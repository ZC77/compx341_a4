#!/usr/bin/env bash

echo Running....
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
