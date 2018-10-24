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
  local: {
    "publicPath": "/",
    "libs": {
      "react": "/react/umd/react.development.js",
      "react-dom": "/react-dom/umd/react-dom.development.js"
    }
  },
  development: {
    "publicPath": "/app/",
    "libs": {
      "react": "//cdn.bootcss.com/react/16.4.0/umd/react.production.min.js",
      "react-dom": "//cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.production.min.js"
    }
  },
  production: {
    "publicPath": "/",
    "libs": {
      "react": "//cdn.bootcss.com/react/16.4.0/umd/react.production.min.js",
      "react-dom": "//cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.production.min.js"
    }
  }
};
