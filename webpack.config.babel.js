export default (inEnv) => {
  const NODE_ENV = process.env.NODE_ENV;
  const type = inEnv ? inEnv.type : null;
  return require(`./build/webpack.${type || NODE_ENV}.js`).default(inEnv);
};
