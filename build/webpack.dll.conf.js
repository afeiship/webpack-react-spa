const webpack = require('webpack');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const argv = require('yargs').argv;
const env = argv.config.indexOf('prod.conf') > -1 ? 'prod' : 'dev';


// common vendors(can be minifed by uglify lodaer:)
let vendors = [
  'next-js-core2'
];


let plugins = [
  new webpack.DllPlugin({
    path: './dist/vendors/manifest.json',
    name: '[name]_library',
    context: __dirname,
  }),
  new AssetsWebpackPlugin({
    filename: 'bundle-config.json',
    path: './dist/vendors'
  })
];

if (env === 'prod') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: false
    })
  );
  vendors = vendors.concat([
    'react.min',
    'react-dom.min',
  ]);
} else {
  vendors = vendors.concat([
    'react',
    'react-dom',
  ]);
}


module.exports = {
  output: {
    path: './dist/vendors',
    filename: '[name].[hash].js',
    library: '[name]_library'
  },
  entry: {
    vendors: vendors
  },
  plugins: plugins
};
