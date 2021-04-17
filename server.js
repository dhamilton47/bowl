const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');

const port = 8080;

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(
  webpackDevMiddleWare(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get('/hello', function(req, res) {
  res.json('Hello from the backend!');
})

app.listen(port, function() {
  console.log(`Listening on Port: ${port}!\n`);
});