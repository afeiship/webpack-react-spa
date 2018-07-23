require('babel-core/register');

module.exports = (inEnv) => {
  const {mode, type} = inEnv;
  console.log(inEnv);
  return require(`./build/webpack.${type}.js`).default(inEnv);
};
