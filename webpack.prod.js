const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssPlugin = require('mini-css-extract-plugin');

const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'assets/scripts/[name]-[contenthash].js',
    chunkFilename: '[name]-[contenthash].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 3,
          name: 'commons',
          enforce: true
        }
      }
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css'
    })
  ]
});
