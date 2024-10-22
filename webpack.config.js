const webpack = require('webpack');
var path = require('path');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';


module.exports = {
  context: __dirname,
  // Include the hot middleware with each entry point
  entry: {
		main_bundle: ['./sim/main/main.js', hotMiddlewareScript],
		quiz_bundle: ['./sim/quiz/main.js', hotMiddlewareScript],
	},
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'cheap-module-source-map',
//  devtool: 'source-map', //for production?
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.sass$/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.sass'],
    modulesDirectories: ['node_modules'],
    alias: {
      '~' : __dirname
    }
  },
  devServer: {
    historyApiFallback: true
  },
	plugins: [
		 new webpack.optimize.OccurenceOrderPlugin(),
		 new webpack.HotModuleReplacementPlugin(),
		 new webpack.NoErrorsPlugin(),
	]

};
