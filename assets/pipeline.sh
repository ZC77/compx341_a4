#!/usr/bin/env bash

echo Running....

if [ $(python3 name_check.py) = 0 ]; then
	echo "all ts files names printed"
else
	echo "Missing Name and ID on some files!"
	exit 1
fi

npm install
npm run build
 
if [ $? -eq 0 ]; then
	cd ..
	git add *
	git commit -m "$1"
	git push origin master
	git status
	echo "success!"
else
	echo "Fail"
fi
