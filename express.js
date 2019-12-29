const express = require('express');
const path = require('path');
const app = express();
const portNumber = 80;
const sourceDir = 'dist';
const connectHistoryApiFallback = require('connect-history-api-fallback');

app.use(connectHistoryApiFallback({
  verbose: false,
}));

app.use(express.static(sourceDir));

app.get(express.static(sourceDir));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, sourceDir));
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://0.0.0.0:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
