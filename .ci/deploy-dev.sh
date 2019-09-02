#!/usr/bin/env bash

cd $DEPLOY_DIR

docker-compose up -d --build
