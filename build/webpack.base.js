(function () {
  const glob = require('glob');
  const path = require('path');
  const config = require('./webpack.config');
  const nx = require('next-js-core2');
  const ExtractTextPlugin = require('extract-text-webpack-plugin');
  const webpack = require('webpack');
  let entries = require('webpack-entries');
  let baseEntries = entries(config.baseEntryPath);


  let webpackPlugins = [
    new webpack.ProvidePlugin({
      nx: 'next-js-core2',
      React: 'react',
      ReactDOM: 'react-dom',
      autobind: 'autobind-decorator'
    }),
    new webpack.NoErrorsPlugin(),
    // split vendor js into its own file,
    new ExtractTextPlugin('[name]-[chunkhash:6].css'),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../dist/vendors/manifest.json'),
    })
  ];

  module.exports = {
    baseEntries: baseEntries,
    plugins: webpackPlugins,
    // externals: {
    //   'react': 'React',
    //   'react-dom': 'ReactDOM'
    // },
    node: {
      fs: "empty"
    },
    module: {
      preloaders: [{
        test: /\.scss/,
        loader: 'import-glob-loader'
      }],
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer')
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass!import-glob-loader')
      }, {
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader?limit=8096&name=images/[name].[ext]'
      }, {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8096&name=fonts/[name].[ext]'
      }, {
        test: /\.(html|tpl)$/,
        loader: 'html-loader?minimize=false'
      }, {
        test: /\.js|jsx$/,
        loaders: ['react-hot'],
        include: path.join(__dirname, 'js')
      }, {
        test: /\.hbs$/,
        loader: "handlebars"
      }]
    },
    resolve: {
      extensions: ['', '.js', '.scss'],
      alias: {
        node_modules: path.join(__dirname, '../node_modules'),
        bower_components: path.join(__dirname, '../bower_components'),
        components: path.join(__dirname, '../src/components'),
        modules: path.join(__dirname, '../src/modules'),
        images: path.join(__dirname, '../src/assets/images'),
        vendor: path.join(__dirname, '../src/vendor'),
      }
    }
  };

}());
