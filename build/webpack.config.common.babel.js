// shared config (dev and prod)
import webpack from 'webpack';
import {resolve, join} from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './index.js',
  output: {
    filename: '[name]-[chunkhash:6].bundle.js',
    path: resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css']
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
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.ProvidePlugin({
      nx: 'next-js-core2',
      autobind: 'autobind-decorator',
      mixin: 'mixin-decorator',
    }),
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, '../dist/vendors/manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/index.html'),
      title: 'Hot Module Replacement'
    }),
    // build optimization plugins
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash:6].min.js',
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
