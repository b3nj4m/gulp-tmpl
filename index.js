var es       = require('event-stream');
var map      = require('vinyl-map');
var rename   = require('gulp-rename');
var template = require('lodash.template');
var extend   = require('xtend');

module.exports = function(options) {
  options = extend({
    compilerOptions: {},
  }, options);

  var precompile = function(contents, path) {
    return template(contents.toString(), false, options.compilerOptions).source;
  };

  var doRename = function(dir, base, ext) {
    // Change the extension to .js
    return base+'.js';
  };

  return es.pipeline(
    map(precompile),
    rename(doRename)
  );
};
