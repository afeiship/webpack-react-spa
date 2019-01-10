import merge from 'webpack-merge';
import base from './base';

export default (inEnv) => {
  return merge(base(inEnv));
};
