#!/bin/sh

# Make sure perl is > 5.10.x
sudo /usr/bin/perl ./zeo_export.pl daemon --listen "http://*:3000"