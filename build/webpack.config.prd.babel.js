// production config
import merge from 'webpack-merge';
import {resolve} from 'path';
import commonConfig from './webpack.config.common.babel';

module.exports = merge(commonConfig, {
  mode: 'production'
});
