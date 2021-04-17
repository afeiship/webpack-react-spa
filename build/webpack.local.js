import { configs } from '@jswork/webpack-app-kits';
import merge from 'webpack-merge';
import config from './config';
import base from './webpack.base';

export default (inEnv) => {
  const { port, proxy } = config;
  return merge(base(inEnv), {
    mode: 'development',
    devtool: configs.devtool(),
    devServer: configs.devServer({
      port,
      proxy,
      hot: false,
      hotOnly: false,
    }),
  });
};
