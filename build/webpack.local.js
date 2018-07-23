import merge from 'webpack-merge';
import config from './config';
import {plugins, configs} from 'webpack-app-kits';

import base from './base';

export default (inEnv) => {
  const {port, proxy} = config;

  return merge(base(inEnv), {
    devtool: configs.devtool(),
    plugins: [
      plugins.hotModuleReplacement()
    ],
    devServer: configs.devServer({
      port,
      proxy,
    })
  });
};
