require('@jswork/next');
require('@jswork/next-values');
require('@jswork/next-flatten');

export default (inEnv) => {
  const NODE_ENV = process.env.NODE_ENV;
  return require(`./build/webpack.${NODE_ENV}.js`).default(inEnv);
};
