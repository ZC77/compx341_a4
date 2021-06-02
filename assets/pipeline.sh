#!/usr/bin/env bash

echo Running....
npm install
npm run build
 
if [ $? -eq 0 ]; then
	echo "success!"
	cd ..
	git add *
	git commit -m "$1"
	git push origin master
	git status
else
	echo "Fail"
fi
