/* jshint node: true */
var path = require('path');


module.exports = {
  context: path.join(__dirname),
  entry: './lib/index.js',

  output: {
    path: path.join(__dirname),
    filename: 'dist/react-transition.js',
    libraryTarget: 'umd',
    library: 'ReactTransition'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  }
};
