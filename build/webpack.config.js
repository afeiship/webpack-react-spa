const path = require('path');
const argv = require('yargs').argv;
const env = argv.config.indexOf('prod.conf') > -1 ? 'prod' : 'dev';
const dllPath = env === 'dev' ? '/dist' : '';
const bundleConfig = require('../dist/vendors/bundle-config.json');
const vendors = `${dllPath}/vendors/${bundleConfig.vendors.js}`;

module.exports = {
  vendorName: 'vendors/common',
  htmlWebpackOptions: {
    hash: 6,
    data: {
      cdn_ionicons: 'http://cdn.bootcss.com/ionicons/2.0.1/css/ionicons.css',
      vendors: vendors
    }
  },
  devServer: {
    port: 8090,
    hot: true,
    //host: '192.168.30.62',
    stats: 'errors-only',
    // proxy: {
    //   '/weipai': {
    //     target: 'http://train.dcpai.cn:80',
    //     // target: 'http://192.168.30.106:8081',
    //     pathRewrite: {'^/weipai': '/weipai'},
    //     changeOrigin: true
    //   }
    // }
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]-[hash:6].js',
    chunkFilename: '[id]-[hash:6].js',
    minify: false,
    publicPath: '/'
  }
};
