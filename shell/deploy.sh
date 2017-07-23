#!/bin/sh
SCRIPTDIR=$(dirname "$0")
PROJECTROOT="$(dirname "$SCRIPTDIR")"
DESTINATION="$1:/var/www/enraged.pl"

cd "$(realpath $PROJECTROOT)"
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
