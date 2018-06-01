const webpack = require('webpack');
const {resolve} = require('path');
const {vendors} = require('./config');
const config = require('./config');
const {argv} = require('yargs');


module.exports = {
  mode: argv.env,
  entry: {vendors},
  output: {
    path: resolve(__dirname, 'dist/'),
    filename: 'assets/vendors/[name].[chunkhash].js',
    library: '[name]_library'
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
  }
};
