const path = require('path');
var webpack = require('webpack');
var $ = require("jquery");
global.jQuery = require('jquery');


module.exports = {
  entry: './src/router.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        //exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 100000000000
        }
      }
    ]
  },
  plugins: [new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery"})],
  devServer: {
    contentBase: [
      path.join(__dirname, '/'),
      path.join(__dirname, '/src/'),
    ]
  },
  devtool: 'eval'
};
