require('@feizheng/next-js-core2');
require('@feizheng/next-values');
require('@feizheng/next-flatten');

export default (inEnv) => {
  const NODE_ENV = process.env.NODE_ENV;
  return require(`./build/webpack.${NODE_ENV}.js`).default(inEnv);
};
