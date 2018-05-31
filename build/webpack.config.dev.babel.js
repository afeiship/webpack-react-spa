// development config
import {resove, join} from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import {resolve} from 'path';
import commonConfig from './webpack.config.common.babel';
import {dev, port} from '../config.json';

export default merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './index.js',
    // the entry point of our app
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  //devtools:
  devtool: 'source-map',
  devServer: {
    contentBase: [
      resolve(__dirname, '../dist'),
      resolve(__dirname, '../node_modules')
    ],
    hot: true,
    stats: 'errors-only',
    port,
    compress: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: dev.proxy
  }
});
