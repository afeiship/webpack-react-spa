import { configs, inputs, loaders, outputs, plugins } from '@jswork/webpack-app-kits';
import { resolve } from 'path';
import config from './config';

export default (inEnv) => {
  const mode = process.env.NODE_ENV;
  const { libs, publicPath } = config[mode || 'production'];

  return {
    mode,
    stats: 'errors-only',
    entry: inputs.spa(),
    output: outputs.spa({
      publicPath,
    }),
    resolve: {
      alias: configs.alias(),
      extensions: configs.extensions(),
    },
    module: {
      rules: nx.flatten([
        loaders.babel({
          include: [
            resolve(__dirname, '../src'),
            resolve(__dirname, '../node_modules/@jswork/mixin-decorator'),
            resolve(__dirname, '../node_modules/@jswork/service-decorator'),
          ],
        }),
        loaders.environment(),
        loaders.css(),
        loaders.sass(),
        loaders.mp34(),
        loaders.image({ limit: 10 }),
        loaders.font(),
      ]),
    },
    optimization: configs.optimization(),
    performance: configs.performance(),
    plugins: nx.flatten([
      plugins.progressBar(),
      plugins.minCssExtract(),
      plugins.moduleConcatenation(),
      plugins.singleHtml({ libs }),
      // plugins.htmlBanner(),
      plugins.dllRefrence({ publicPath }),
      plugins.loaderOptions(),
      plugins.fallback(),
      plugins.provide({
        service: '@jswork/service-decorator',
        renderNull: '@jswork/render-null-decorator',
        bomb: '@jswork/bomb-decorator',
        IfElse: ['@jswork/react-if-else', 'default'],
        RCM: ['@jswork/react-condition-manager', 'default'],
        RSM: ['@jswork/react-status-manager', 'default'],
        cx: 'classnames',
      }),
    ]),
  };
};
