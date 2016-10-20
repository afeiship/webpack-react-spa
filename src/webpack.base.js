(function() {

  var config = require('./config.json');
  var path = require('path');
  var webpack = require('webpack');
  var entries = require('webpack-entries');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  var HtmlWebpackPlugin = require('html-webpack-plugin');
  var PurifyCSSPlugin = require('purifycss-webpack-plugin');
  var webpackEntries = entries('modules/**/*.js');
  var webpackPlugins = [
    new webpack.ProvidePlugin({}),
    new webpack.NoErrorsPlugin(),
    // split vendor js into its own file,
    new ExtractTextPlugin('[name][hash:5].css')
  ];

  console.log(webpackEntries);
  module.exports = {
    entry: webpackEntries,
    plugins: webpackPlugins,
    initMultiHtmlWebpackPlugins: function() {
      Object.keys(webpackEntries).forEach(function(name) {
        if (name.indexOf('index') > -1) {
          var plugin = new HtmlWebpackPlugin({
            filename: name + '.html',
            template: name + '.html',
            inject: true,
            chunks: [config.venderName, name]
          });
          webpackPlugins.push(plugin);
        }
      });
    },
    module: {
      loaders: [{
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer')
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
      }, {
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader?limit=8096&name=images/[name].[ext]'
      }, {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8096&name=fonts/[name].[ext]'
      }, {
        test: /\.(html|tpl)$/,
        loader: 'html-loader'
      }, {
        test: /\.js|jsx$/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0'],
        include: path.join(__dirname, 'js')
      }]
    },
    resolve: {
      extensions: ['', '.js', '.scss'],
      alias: {
        components: path.join(__dirname, 'components'),
        images: path.join(__dirname, 'assets/images')
      }
    }
  };

}());
