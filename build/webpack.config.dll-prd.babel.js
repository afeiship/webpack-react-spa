import merge from 'webpack-merge';
import dllCommonConfig from './webpack.config.dll-common.babel';
import {uglify} from '../config.json'

export default merge(dllCommonConfig, {
  mode: 'production',
});
