const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/public'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}...`));
