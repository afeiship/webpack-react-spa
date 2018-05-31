import merge from 'webpack-merge';
import dllCommonConfig from './webpack.config.dll-common.babel';
import { resolve } from 'path';

export default merge(dllCommonConfig, {
  mode: 'development'
});
