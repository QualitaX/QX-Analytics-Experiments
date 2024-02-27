#!/bin/zsh

echo "Build Start"
npm --prefix frontend run build
npm --prefix backend/functions run build
echo "Build Completed"