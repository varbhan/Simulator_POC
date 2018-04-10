var webpack = require('webpack');
var path = require('path');

var CLIENT = path.resolve(__dirname, 'src/client');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.js',
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
    },
    devServer: {
      inline:true,
      port: 8008,
      contentBase: CLIENT,
      historyApiFallback: true
    },
   mode:"development",
  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        include : APP_DIR,
        exclude:/(node_modules|bower_components)/,
        use : 'babel-loader'
      },{
          test: /\.(less|css)$/,
          include : APP_DIR,
          exclude:/(node_modules|bower_components)/,
          loaders: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  }
};

module.exports = config;
