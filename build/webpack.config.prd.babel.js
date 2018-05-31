// production config
import merge from 'webpack-merge';
import {resolve} from 'path';
import webpack from 'webpack';
import commonConfig from './webpack.config.common.babel';
import { uglify } from '../config.json';
module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(uglify)
  ]
});
