const merge = require('webpack-merge');
const base = require('./webpack.base');
const {resolve} = require('path');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: [
      resolve(__dirname, 'dist'),
      resolve(__dirname, 'node_modules')
    ],
    hot: true,
    stats: 'errors-only',
    compress: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // mini-css-extract-plugin 暂时不支持hmr
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
});
