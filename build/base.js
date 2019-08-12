import config from './config';
import { resolve } from 'path';
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
    resolve: {
      alias: configs.alias({
        'react-dom': '@hot-loader/react-dom'
      }),
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
      plugins.minCssExtract(),
      plugins.moduleConcatenation(),
      plugins.singleHtml({ libs }),
      plugins.htmlBanner(),
      plugins.dllRefrence({ publicPath }),
      plugins.loaderOptions(),
      plugins.fallback(),
      plugins.provide({
        service: 'service-decorator',
        renderNull: 'render-null-decorator',
        IfElse: ['react-if-else', 'default'],
        RCM: ['react-condition-manager', 'default'],
        RSM: ['react-status-manager', 'default'],
        cx: 'classnames'
      })
    ])
  };
};
