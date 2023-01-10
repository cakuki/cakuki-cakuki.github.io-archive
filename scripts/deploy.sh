#!/bin/sh

DATE=$(date)
ORIGIN=$(git config --get remote.origin.url)

pnpm export

# push changes
cd out
git init
git remote add -t gh-pages origin ${ORIGIN}
git checkout -b gh-pages
git add .
git commit -m "Deploy $(date -Iseconds)"
git push -uf origin gh-pages

# cleanup
cd ..
rm -rf out/.git
