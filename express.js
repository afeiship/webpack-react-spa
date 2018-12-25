const express = require('express');
const app = express();
const portNumber = 3000;
const sourceDir = 'dist';
const compression = require('compression');
const proxy = require('http-proxy-middleware');

//OPEN GZIP
app.use(compression({ level: 6 }));
app.use(express.static(sourceDir));

app.use(
  '/api',
  proxy({
    target: 'http://test.demo.com',
    changeOrigin: true
  })
);

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
