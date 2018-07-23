import {vendors} from './config';
import {loaders, plugins, configs, inputs, outputs} from 'webpack-app-kits';


export default (inEnv) => {
  const {mode} = inEnv;
  return {
    mode,
    entry: inputs.dll({vendors}),
    output: outputs.dll(),
    plugins: [
      plugins.dll()
    ],
    externals: configs.externals.react()
  }
};
