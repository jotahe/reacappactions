#!/bin/bash

# Force an error to see the failure in the action
if [ true ]
then
  echo 'error forced message'
  exit 1
fi

# to log and debug message we can do this
echo "::debug ::Debug Message"   # VM would now that it have to load a debug message
echo "::warning ::Warning Message"
echo "::error ::Error Message"

echo "::add-mask::$1"   # We mask the output so it is not shown on the screen
echo "HI $1"
time=$(date)
echo "::set-output name=time::$time"

echo "::group::Some expandable logs"
echo 'some stuff'
echo 'some stuff'
echo 'some stuff'
echo "::endgroup"

echo "{DOCKERSIMPLEHELLO}={dockersimplehello}" >> $GITHUB_ENV   # New way to export environment variables
# echo '::set-env name:DOCKERSIMPLEHELLO::dockersimplehello'   # old github actions way