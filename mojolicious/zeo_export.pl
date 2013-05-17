#!/usr/bin/env perl

# $Id: zeo_export.pl,v 1.3 2013-05-16 23:54:17 ericblue76 Exp $
#
# Author:       Eric Blue - ericblue76@gmail.com
# Project:      FreeMyZeo
# Url:          http://eric-blue.com/projects/freemyzeo
#

use Mojolicious::Lite;
use WebService::Zeo;
use MIME::Base64;
use Data::Dumper;
use Encode;
use POSIX;
use strict;

# "real_ip" helper
helper real_ip => sub {
    my $self      = shift;
    my $forwarded = $self->req->headers->header('X-Forwarded-For');
    if ( defined($forwarded) ) {
        $forwarded =~ /([^,\s]+)$/ and return $1;
    }
    else {
        return $self->tx->{remote_address};
    }

};

sub create_date_string {

    my ($d) = @_;

    $d->{month} = sprintf( "%02d", $d->{month} );
    $d->{day}   = sprintf( "%02d", $d->{day} );

    my $date = $d->{year} . "-" . $d->{month} . "-" . $d->{day};

    # Create date string only if HH:MM:SS aren't present
    if ( !exists $d->{hour} ) {
        return $date;
    }
    else {

        # Add leading zeros to correct JSON output
        my $time =
            sprintf( "%02d", $d->{hour} ) . ":"
          . sprintf( "%02d", $d->{minute} ) . ":"
          . sprintf( "%02d", $d->{second} );

        return "$date $time";
    }

}

get '/freemyzeo/export/*file' => sub {
    my $self = shift;
    my $file = $self->stash('file');

   die "Invalid filename "if ($file!~/.csv$/);

    $self->res->headers->content_type('text/csv');
    $self->res->content->asset(
        Mojo::Asset::File->new( path => "../csv/$file" ) );
    $self->rendered(200);

};

post '/freemyzeo/export' => sub {

    my $self = shift;

    my $username = $self->param('username');
    my $password = $self->param('password');
    
    #my $start_date = "2011-12-01";
    #my $end_date   = strftime( "%Y-%m-%d", localtime( time - 86400 ) );
    my $start_date = $self->param('start_date');
    my $end_date = $self->param('end_date');

    $self->app->log->info(
        "Request to export data (" . $username . "[" . $self->real_ip . "]" );

    my $success_response = {
        type    => "success",
        message => ""
    };

    my $failure_response = {
        type    => "failure",
        message => ""
    };

    eval {

        my $zeo = WebService::Zeo->new(

            # Requires API registration
            'apikey' => 'API_KEY_GOES_HERE',

            # Credentials used to login to myzeo
            'username' => $username,
            'password' => $password
        );

       

        $self->app->log->info(
            "Finding sleep dates in range between $start_date and $end_date..."
        );
        my @dates =
          $zeo->get_dates_with_sleep_data_in_range( $start_date, $end_date );

        if ($#dates == 0) {
            die "No data found for that particular date range!";
        }

        my $total_days = $#dates + 1;
        $success_response->{'total_days'} = $total_days;
        $self->app->log->info("Fetching $total_days days of sleep data...");

        # Generate header data from first record - don't feel like statically coding all of the fields!

        my $sample_sleep_record =
          $zeo->get_sleep_record_for_date( create_date_string( $dates[0] ) );
        my @csv_fields;
        foreach ( sort( keys(%$sample_sleep_record) ) ) {
            push( @csv_fields, $_ );
        }

        my $file = encode_base64($username);
        $file =~ s/[^\w]//g;
        my $csv_filename = "csv/$file.csv";
        $success_response->{'csv_file'} = "/freemyzeo/export/$file.csv";
        open( CSV, ">../$csv_filename" );

        my $i = 0;
        foreach (@csv_fields) {
            print CSV $_;
            print CSV "," if $i != $#csv_fields;
            $i++;
        }
        print CSV "\r\n";

        foreach (@dates) {

            my $date_string = create_date_string($_);
            $self->app->log->info("Fetching sleep record for $date_string...");

            my $sleep = $zeo->get_sleep_record_for_date($date_string);

            my $i = 0;
            foreach (@csv_fields) {

                # All cases of a HASH are date/time fields
                if ( ref( $sleep->{$_} ) eq "HASH" ) {
                    print CSV create_date_string( $sleep->{$_} );

                    # Handle sleepgraph data (DEEP, REM, LIGHT, UNKNOWN)
                }
                elsif ( ref( $sleep->{$_} ) eq "ARRAY" ) {
                    print CSV "\"";
                    foreach ( @{ $sleep->{$_} } ) {
                        print CSV $_ . " ";
                    }
                    print CSV "\"";

                    # Handle all other number values
                }
                else {
                    print CSV $sleep->{$_};
                }
                print CSV "," if $i != $#csv_fields;
                $i++;
            }
            print CSV "\r\n";

            #$success_response->{'debug_message'} = Dumper($sleep);

        }

        close(CSV);

    };

    if ($@) {
        $failure_response->{'message'} = $@;
        $self->render( json => { response => $failure_response } );
    }
    else {
        $self->render( json => { response => $success_response } );
    }

};

app->config( hypnotoad => { listen => ['http://*:3000'] } );
app->log->path('../log/debug.log');
app->log->level('info');
app->start;

1;
