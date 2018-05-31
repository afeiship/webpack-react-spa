const webpack = require('webpack');
const {resolve} = require('path');
const {vendors} = require('./config');
const config = require('./config');
const {argv} = require('yargs');


module.exports = {
  mode: argv.env,
  output: {
    path: resolve(__dirname, 'dist/'),
    filename: 'assets/vendors/[name].[chunkhash].js',
    library: '[name]_library'
  },
  resolve: {
    alias: {
      assets: resolve(__dirname, 'src/assets'),
      images: resolve(__dirname, 'src/assets/images'),
      styles: resolve(__dirname, 'src/assets/styles'),
      components: resolve(__dirname, 'src/components'),
      views: resolve(__dirname, 'src/components/views'),
      interceptors: resolve(__dirname, 'src/components/interceptors'),
      services: resolve(__dirname, 'src/components/services'),
      scripts: resolve(__dirname, 'src/components/scripts'),
      mixins: resolve(__dirname, 'src/components/mixins'),
      modals: resolve(__dirname, 'src/components/modals'),
    },
    extensions: ['.js', '.json', '.scss', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ['babel-loader'],
        include: [
          resolve(__dirname, "src"),
          resolve(__dirname, "node_modules/mixin-decorator"),
          resolve(__dirname, "node_modules/react-dynamic-router")
        ]
      }
    ],
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve(__dirname, 'dist/assets/vendors/manifest.json'),
      name: '[name]_library'
    })
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  entry: {
    vendors
  },
};
