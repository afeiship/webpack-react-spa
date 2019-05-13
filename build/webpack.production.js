import merge from 'webpack-merge';
import base from './base';
import config from './config';
import { plugins } from 'webpack-app-kits';

export default (inEnv) => {
  return merge(base(inEnv), {
    plugins: [
      plugins.offline( config.offline )
    ]
  });
};
