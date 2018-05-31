const express = require('express');
const app = express();
const portNumber = 3000;
const sourceDir = 'dist';
const compression = require('compression');

//OPEN GZIP
app.use(compression({level: 9}));
app.use(express.static(sourceDir));

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
