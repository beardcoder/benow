#!/usr/bin/env bash
export COMPOSE_PROJECT_NAME=$COMPOSE_PROJECT_NAME
export PORT=$PORT
cd $DEPLOY_DIR

docker-compose up -d --build
