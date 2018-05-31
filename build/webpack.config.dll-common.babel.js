import {resolve} from 'path';
import webpack from 'webpack';
import {vendors} from '../config.json';
const ExtractTextPlugin = require('extract-text-webpack-plugin');


export default {
  output: {
    path: resolve(__dirname, '../dist/'),
    filename: 'assets/scripts/[name].[chunkhash].js',
    library: '[name]_library'
  },
  resolve: {
    alias: {
      assets: resolve(__dirname, '../src/assets'),
      images: resolve(__dirname, '../src/assets/images'),
      styles: resolve(__dirname, '../src/assets/styles'),
      components: resolve(__dirname, '../src/components'),
      views: resolve(__dirname, '../src/components/views'),
      interceptors: resolve(__dirname, '../src/components/interceptors'),
      services: resolve(__dirname, '../src/components/services'),
      scripts: resolve(__dirname, '../src/components/scripts'),
      mixins: resolve(__dirname, '../src/components/mixins'),
      modals: resolve(__dirname, '../src/components/modals'),
    },
    extensions: ['.js', '.json', '.scss', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ['babel-loader'],
        include: [
          resolve(__dirname, "../src"),
          resolve(__dirname, "../node_modules/mixin-decorator"),
          resolve(__dirname, "../node_modules/react-dynamic-router")
        ]
      }
    ],
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve(__dirname, '../dist/assets/scripts/manifest.json'),
      name: 'assets/scripts/[name]_library'
    })
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  entry: {
    vendors
  },
}
