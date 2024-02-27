#!/bin/bash

echo "Run Application"
firebase emulators:start --import ./.emulators --export-on-exit ./.emulators