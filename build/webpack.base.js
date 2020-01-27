import config from './config';
import { resolve } from 'path';
import { loaders, plugins, configs, inputs, outputs } from '@feizheng/webpack-app-kits';

export default (inEnv) => {
  const mode = process.env.NODE_ENV;
  const { libs, publicPath } = config[mode || 'production'];

  return {
    mode,
    stats: 'errors-only',
    entry: inputs.spa(),
    output: outputs.spa({
      publicPath
    }),
    resolve: {
      alias: configs.alias(),
      extensions: configs.extensions()
    },
    module: {
      rules: nx.flatten([
        loaders.babel({
          include: [
            resolve(__dirname, '../src'),
            resolve(__dirname, '../node_modules/mixin-decorator'),
            resolve(__dirname, '../node_modules/service-decorator')
          ]
        }),
        loaders.environment(),
        loaders.css(),
        loaders.sass(),
        loaders.mp34(),
        loaders.image({ limit: 10 }),
        loaders.font()
      ])
    },
    optimization: configs.optimization(),
    performance: configs.performance(),
    plugins: nx.flatten([
      plugins.progressBar(),
      plugins.minCssExtract(),
      plugins.moduleConcatenation(),
      plugins.singleHtml({ libs }),
      plugins.htmlBanner(),
      plugins.dllRefrence({ publicPath }),
      plugins.loaderOptions(),
      plugins.fallback(),
      plugins.provide({
        service: '@feizheng/service-decorator',
        renderNull: '@feizheng/render-null-decorator',
        bomb: '@feizheng/bomb-decorator',
        IfElse: ['@feizheng/react-if-else', 'default'],
        RCM: ['@feizheng/react-condition-manager', 'default'],
        RSM: ['@feizheng/react-status-manager', 'default'],
        cx: 'classnames'
      })
    ])
  };
};
