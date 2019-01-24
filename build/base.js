import config from './config';
import { loaders, plugins, configs, inputs, outputs } from 'webpack-app-kits';
import 'next-flatten';

export default (inEnv) => {
  const type = inEnv ? inEnv.type : null;
  const mode = process.env.NODE_ENV;
  const { libs, publicPath } = config[type || mode];

  return {
    mode,
    entry: inputs.spa(),
    output: outputs.spa({
      publicPath
    }),
    resolve: { alias: configs.alias(), extensions: configs.extensions() },
    module: {
      rules: nx.flatten([
        loaders.babel(),
        loaders.environment(),
        loaders.css(),
        loaders.sass(),
        loaders.mp34(),
        loaders.image({ limit: 10 }),
        loaders.font()
      ])
    },
    externals: configs.externals.react(),
    optimization: configs.optimization(),
    performance: configs.performance(),
    plugins: nx.flatten([
      plugins.imagemin({
        mozJpeg: { quality: 75 },
        pngquant: { quality: '70-80' }
      }),
      plugins.banner(),
      plugins.semver(),
      plugins.moduleConcatenation(),
      plugins.singleHtml({ libs }),
      plugins.extractText(),
      plugins.dllRefrence({ publicPath }),
      plugins.loaderOptions(),
      plugins.provide()
    ])
  };
};
