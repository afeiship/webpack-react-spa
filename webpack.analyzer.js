const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const base = require('./webpack.base');
const merge = require('webpack-merge');

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};