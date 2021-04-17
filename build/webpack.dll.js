import { configs, inputs, outputs, plugins } from '@jswork/webpack-app-kits';
import { vendors } from './config';

export default (inEnv) => {
  return {
    mode: 'production',
    entry: inputs.dll({ vendors }),
    output: outputs.dll(),
    plugins: [
      plugins.progressBar(),
      plugins.clean(),
      plugins.dll(),
      plugins.banner(),
      plugins.semver(),
    ],
    externals: configs.externals.react(),
  };
};
