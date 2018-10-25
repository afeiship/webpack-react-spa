module.exports = {
  port: "3005",
  proxy: {
    "/api": {
      "target": "http://120.27.13.225:80",
      "changeOrigin": true
    }
  },
  vendors: [
    "antd",
    "next-js-core2",
    "next-react-redux",
    "classnames",
    "react-router",
    "react-router-dom"
  ],
  development: {
    "publicPath": "/",
    "libs": {
      "antd-css": "//cdn.bootcss.com/antd/3.10.1/antd.min.css",
      "spinkit": "//cdn.bootcss.com/spinkit/1.2.5/spinkit.min.css",
      "react": "/react/umd/react.development.js",
      "react-dom": "/react-dom/umd/react-dom.development.js"
    }
  },
  test: {
    "publicPath": "/app/",
    "libs": {
      "antd-css": "//cdn.bootcss.com/antd/3.10.1/antd.min.css",
      "spinkit": "//cdn.bootcss.com/spinkit/1.2.5/spinkit.min.css",
      "react": "//cdn.bootcss.com/react/16.4.0/umd/react.production.min.js",
      "react-dom": "//cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.production.min.js"
    }
  },
  production: {
    "publicPath": "/",
    "libs": {
      "antd-css": "//cdn.bootcss.com/antd/3.10.1/antd.min.css",
      "spinkit": "//cdn.bootcss.com/spinkit/1.2.5/spinkit.min.css",
      "react": "//cdn.bootcss.com/react/16.4.0/umd/react.production.min.js",
      "react-dom": "//cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.production.min.js"
    }
  }
};
