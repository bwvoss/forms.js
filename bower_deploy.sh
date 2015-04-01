#!/bin/bash
echo 'Make sure everything is added!'
echo -n 'Current version: '
grep 'version' bower.json | sed -n 's/^.*['"'"'"]version['"'"'"] *: *['"'"'"]\([^'"'"'"]*\).*$/\1/p'

echo -n 'New version: '
read VERSION

# check for semantic version number
if [ `echo $VERSION | grep -c '^[0-9]\+\.[0-9]\+\.[0-9]\+$'` -ne 1 ]
then
  echo 'Version not valid!'
  echo 'Try again with semantic version number (ex. 1.2.10).'
  exit 1
fi

# build
grunt
if [ $? -ne 0 ]
then
  echo 'Did not build correctly.'
  echo 'Run `grunt` to see errors.'
  exit 1
fi
git add dist

#run tests
testem ci -P -R 'dot'
if [ $? -ne 0 ]
then
  echo 'Tests failed.'
  echo 'Run `testem ci` to see errors.'
  exit 1
fi

# update version number in bower.json
sed 's/\(['"'"'"]version['"'"'"] *: *['"'"'"]\)[^'"'"'"]*/\1'$VERSION'/' bower.json > new_bower.json
mv new_bower.json bower.json
git add bower.json

# commit
git commit -m'Version '$VERSION''
git tag -f 'v'$VERSION''

# print messages
echo ''
echo 'Version '$VERSION' committed and tagged.'
echo 'When you are satisfied, `git push` and `git push --tags` to deploy the new version'
