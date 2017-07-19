#!/bin/sh
SCRIPTDIR=$(dirname "$0")
PROJECTROOT="$(dirname "$SCRIPTDIR")"
DESTINATION="$1:/var/www/enraged.pl"

# REF: https://stackoverflow.com/a/3879077
require_clean_work_tree() {
    # Update the index
    git update-index -q --ignore-submodules --refresh
    err=0

    # Disallow unstaged changes in the working tree
    if ! git diff-files --quiet --ignore-submodules --
    then
        echo >&2 "cannot $1: you have unstaged changes."
        git diff-files --name-status -r --ignore-submodules -- >&2
        err=1
    fi

    # Disallow uncommitted changes in the index
    if ! git diff-index --cached --quiet HEAD --ignore-submodules --
    then
        echo >&2 "cannot $1: your index contains uncommitted changes."
        git diff-index --cached --name-status -r --ignore-submodules HEAD -- >&2
        err=1
    fi

    if [ $err = 1 ]
    then
        echo >&2 "Please commit or stash them."
        exit 1
    fi
}

cd "$(realpath $PROJECTROOT)"
require_clean_work_tree
git checkout develop
[[ $? = 0 ]] || exit 1
git checkout master
[[ $? = 0 ]] || exit 1
git rebase develop
[[ $? = 0 ]] || exit 1
export CI=true # because we want non-interactive test
yarn test
[[ $? = 0 ]] || exit 1
export CI=false
yarn run build
[[ $? = 0 ]] || exit 1
ssh "$1" "find /var/www/enraged.pl/* | grep -v \".well-known\" | xargs rm -rf" # beacuse rsync and windows don't mix
[[ $? = 0 ]] || exit 1
scp -rp ./build/* "$DESTINATION"
[[ $? = 0 ]] || exit 1
git checkout develop