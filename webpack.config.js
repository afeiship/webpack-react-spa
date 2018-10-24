require('babel-core/register');

module.exports = (inEnv) => {
  const NODE_ENV = process.env.NODE_ENV;
  const type = inEnv ? inEnv.type : null;
  console.log(type, NODE_ENV);
  return require(`./build/webpack.${type || NODE_ENV}.js`).default(inEnv);
};
