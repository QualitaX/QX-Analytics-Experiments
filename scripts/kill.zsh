#!/bin/zsh

echo "Kill Firebase Emulators"
lsof -t -i:9099 -i:8080 -i:5001 -i:5000 -i:9199 -i:4000 | xargs kill -9