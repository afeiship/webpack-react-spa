// shared config (dev and prod)
import webpack from 'webpack';
import {resolve, join} from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import ScriptsInjectorPlugin from 'scripts-injector-webpack-plugin';
import {argv} from 'yargs';
import config from '../config.json';
const argEnv = argv.env || 'dev';


export default {
  entry: './index.js',
  output: {
    filename: '[name]-[hash:6].bundle.js',
    path: resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.css'],
  },
  context: resolve(__dirname, '../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.scss$/,
        loader: 'import-glob-loader',
        enforce: "pre"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          name: 'images/[name]-[hash:4].[ext]',
          limit: 8192
        }
      },
      {
        test: /\.(woff|eot|ttf)\??.*$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name]-[hash:4].[ext]',
          limit: 8192
        }
      }
    ],
  },
  plugins: [
    new ScriptsInjectorPlugin({
      replacer: '<!--APP_LOADER-->',
      path: resolve(__dirname, '../src/components/others/app-loader.html')
    }),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      nx: 'next-js-core2',
      mixin: 'mixin-decorator',
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: resolve(__dirname, '../dist/vendors/manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.ejs'),
      favicon: resolve(__dirname, '../src/assets/images/favicon.ico'),
      title: 'Hot Module Replacement',
      libs: config[argEnv].libs
    }),
    new AddAssetHtmlPlugin({
      includeSourcemap: false,
      filepath: resolve(__dirname, '../dist/vendors/vendors.*.js')
    }),
    // build optimization plugins
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common-[hash].min.js',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: {
          plugins: [
            autoprefixer({
              browsers: [
                'last 2 version',
                'Explorer >= 10',
                'Android >= 4'
              ]
            })
          ]
        },
        img: {
          gifsicle: {
            interlaced: false
          },
          mozjpeg: {
            progressive: true,
            arithmetic: false
          },
          optipng: false, // disabled
          pngquant: {
            floyd: 0.5,
            speed: 2
          },
          svgo: {
            plugins: [
              {
                removeTitle: true
              },
              {
                convertPathData: false
              }
            ]
          }
        }
      }
    }),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
};
