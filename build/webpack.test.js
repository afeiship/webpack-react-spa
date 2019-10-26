import merge from 'webpack-merge';
import base from './webpack.base';

export default (inEnv) => {
  return merge(base(inEnv));
};
