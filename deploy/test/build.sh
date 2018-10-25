#!/bin/bash

## update code && build:
node -v
npm -v
npm install -g yarn
# npm install --registry=https://registry.npm.taobao.org
$HOME/.yarn/bin/yarn install
npm run build