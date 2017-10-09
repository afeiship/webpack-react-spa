// production config
import merge from 'webpack-merge';
import {resolve} from 'path';
import webpack from 'webpack';
import commonConfig from './webpack.config.common.babel';

module.exports = merge(commonConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    })
  ]
});
