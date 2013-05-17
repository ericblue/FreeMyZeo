#!/bin/sh

# Run under daemon
#./zeo_export.pl daemon --listen "http://*:3000"

# Run under hypnotoad
# TODO Figure out why hypnotoad stop is caching old data
#hypnotoad -s zeo_export.pl
kill -9 `pidof zeo_export.pl`
hypnotoad zeo_export.pl
