// shared config (dev and prod)
import webpack from 'webpack';
import {resolve, join} from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
// import ScriptsInjectorPlugin from 'scripts-injector-webpack-plugin';
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
  context: resolve(__dirname, '../src'),
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
    // new ScriptsInjectorPlugin({
    //   replacer: '<!--APP_LOADER-->',
    //   path: resolve(__dirname, '../src/components/others/app-loader.html')
    // }),
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
    new webpack.LoaderOptionsPlugin({
      options: {
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 3,
          name: 'commons',
          enforce: true
        }
      }
    }
  },
  performance: {
    hints: false
  },
};
