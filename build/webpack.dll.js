import { vendors } from './config';
import { loaders, plugins, configs, inputs, outputs } from 'webpack-app-kits';

export default (inEnv) => {
  const NODE_ENV = process.env.NODE_ENV;
  return {
    mode: NODE_ENV,
    entry: inputs.dll({ vendors }),
    output: outputs.dll(),
    plugins: [plugins.dll()],
    externals: configs.externals.react()
  };
};
