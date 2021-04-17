 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './public',
  },
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Experimentation',
    }),
  ],
 }