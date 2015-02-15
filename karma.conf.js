/* jshint node: true */
module.exports = function(config) {
  config.set({
    basePath: '.',

    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],

    files: [
      // shim to workaroud PhantomJS 1.x lack of `bind` support
      // see: https://github.com/ariya/phantomjs/issues/10522
      'node_modules/es5-shim/es5-shim.js',

      // React is an external dependency of the component
      'node_modules/react/dist/react-with-addons.js',

      'spec/spec-helper.js',
      'spec/**/*.spec.*',
      { pattern: 'lib/**/*', watched: true, included: false }
    ],

    preprocessors: {
      // add webpack as preprocessor
      'spec/**/*.spec.*': ['webpack']
    },

    webpack: require('./webpack.config.js'),

    webpackServer: {
      noInfo: true
    },

    singleRun: true
  });
};
