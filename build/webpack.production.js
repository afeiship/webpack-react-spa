import merge from 'webpack-merge';
import base from './base';
import { plugins } from 'webpack-app-kits';

export default (inEnv) => {
  return merge(base(inEnv), {
    plugins: [
      plugins.offline({
        externals: [
          '//cdn.bootcss.com/spinkit/1.2.5/spinkit.min.css',
          '//cdn.bootcss.com/antd/3.10.1/antd.min.css',
          '//cdn.bootcss.com/react/16.4.0/umd/react.production.min.js',
          '//cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.production.min.js'
        ]
      })
    ]
  });
};
