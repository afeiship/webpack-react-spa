(function () {

  let path = require('path');
  let webpack = require('webpack');
  let $ = require('./webpack.base');
  let webpackMerge = require('webpack-merge');
  let config = require('./webpack.config.js');
  let HtmlWebpackPlugin = require('html-webpack-plugin');
  let devEnties = $.baseEntries;
  let nx = require('next-js-core2');
  let devPlugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];


  nx.each(devEnties, function (name) {
    if (name.indexOf('index') > -1) {
      let plugin = new HtmlWebpackPlugin(
        nx.mix(config.htmlWebpackOptions, {
          filename: name + '.html',
          template: name + '.ejs',
          chunks: [config.vendorName, name]
        })
      );
      devPlugins.push(plugin);
    }
  });


  module.exports = webpackMerge($, {
    entry: devEnties,
    output: config.output,
    plugins: devPlugins,
    devtool: '#source-map',
    devServer: config.devServer
  });


}());
