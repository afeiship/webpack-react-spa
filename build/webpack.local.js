import merge from 'webpack-merge';
import config from './config';
import base from './webpack.base';
import { plugins, configs } from '@feizheng/webpack-app-kits';

export default (inEnv) => {
  const { port, proxy } = config;
  return merge(base(inEnv), {
    mode: 'development',
    devtool: configs.devtool(),
    plugins: [plugins.hotModuleReplacement()],
    devServer: configs.devServer({
      port,
      proxy
    })
  });
};
