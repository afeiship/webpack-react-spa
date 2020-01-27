import { vendors } from './config';
import { plugins, configs, inputs, outputs } from '@feizheng/webpack-app-kits';

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
      plugins.semver()
    ],
    externals: configs.externals.react()
  };
};
