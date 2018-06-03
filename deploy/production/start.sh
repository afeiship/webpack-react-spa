#!/bin/bash

## for production env

## reload
docker-compose -f ./deploy/production/docker-compose.yml down
docker-compose -f ./deploy/production/docker-compose.yml up -d