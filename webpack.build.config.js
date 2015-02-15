/* jshint node: true */
var config = require('./webpack.config');


config.externals = {
 'react': 'var React',
 'd3': 'var d3'
};


module.exports = config;
