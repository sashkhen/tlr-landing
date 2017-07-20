#!/bin/bash
display_usage() {
  echo -e "Usage:\n ./deploy.sh [stage]"
  }
  # if less than two arguments supplied, display usage
  if [  $# -le 0 ]
  then
    display_usage
    exit 1
  fi
# check whether user had supplied -h or --help . If yes display usage
  if [[ ( $# == "--help") ||  $# == "-h" ]]
    then
      display_usage
      exit 0
    fi
    if [ $1 == deploy ]
      then
        REMOTE_HOST="104.131.123.194"
        REMOTE_USERNAME="deploy"
    else
      echo -e "This stage is not set"
      exit 1
    fi

# Local build webpack
rm -rf dest/ || true
gulp build
cd dest
tar cf ../build.tar.gz --exclude='*.map' ./
cd ../
#Upload webpack to server
scp build.tar.gz $REMOTE_USERNAME@$REMOTE_HOST:/tmp/

#Deploy Webpack
ssh -tt $REMOTE_USERNAME@$REMOTE_HOST << EOF
cd /var/www/thelongreachgame
rm -rf ./*
tar xf /tmp/build.tar.gz
rm -rf /tmp/build.tar.gz
exit
EOF

rm -rf build.tar.gz || true