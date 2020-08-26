import { plugins } from '@feizheng/webpack-app-kits';
import merge from 'webpack-merge';
import config from './config';
import base from './webpack.base';

export default (inEnv) => {
  return merge(base(inEnv), {
    plugins: [plugins.offline(config.offline)],
  });
};
