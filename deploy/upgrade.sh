#!/usr/bin/env bash

rm -rf node_modules/webpack-app-kits/
rm -rf node_modules/next-*
rm -rf package-lock.json
rm -rf yarn.lock

npm install --registry=https://registry.npm.taobao.org
