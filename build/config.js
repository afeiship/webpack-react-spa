const nx = require('@feizheng/next-js-core2');
const nxValues = require('@feizheng/next-values');
const libs = {
  nextJsCore2: '//unpkg.com/@feizheng/next-js-core2@2.0.5/dist/next-js-core2.min.js',
  loadingScreen: '//unpkg.com/@feizheng/loading-screen@1.0.2/dist/style.css',
  antdCss: '//cdnjs.cloudflare.com/ajax/libs/antd/3.12.1/antd.min.css',
  react: '//cdnjs.cloudflare.com/ajax/libs/react/16.8.4/umd/react.production.min.js',
  reactDom: '//cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.4/umd/react-dom.production.min.js'
};

module.exports = {
  port: '3006',
  proxy: {
    '/api': {
      target: 'http://120.27.13.225:80',
      changeOrigin: true
    }
  },
  vendors: ['classnames', 'react-router', 'react-router-dom'],
  offline: {
    externals: nxValues(libs)
  },
  development: {
    publicPath: '/',
    libs: nx.mix(null, libs, {
      antdCss: '/antd/dist/antd.css',
      react: '/react/umd/react.development.js',
      reactDom: '/react-dom/umd/react-dom.development.js'
    })
  },
  test: {
    publicPath: '/app/',
    libs: libs
  },
  production: {
    publicPath: '/',
    libs: libs
  }
};
