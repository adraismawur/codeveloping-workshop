git stash save "Stash changes before reset"
git branch backup
git checkout master
git remote add upstream git@github.com:adraismawur/codeveloping-workshop.git
git fetch upstream
git reset --hard upstream/master
git push --force
