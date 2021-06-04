#!/usr/bin/env bash

npm test
if [ $? -eq 0 ]; then
echo "success!"
exit 1
fi
echo "fail"
exit 1

