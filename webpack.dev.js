const merge = require('webpack-merge');
const base = require('./webpack.base');
const {resolve} = require('path');
const config = require('./config');

module.exports = (env, options) => {
  console.log(env, options);
  const {port, proxy} = config;
  return merge(base, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      port,
      proxy,
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
    }
  });
};
