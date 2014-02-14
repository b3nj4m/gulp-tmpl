# gulp-tmpl [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]
> Lodash/Underscore templates plugin for gulp 3

## Usage

First, install `gulp-tmpl` as a development dependency:

```shell
npm install --save-dev gulp-tmpl
```

## Compiling to a namespace for the browser

[gulp-declare] can be used to compile templates for the browser. Just pipe the output of gulp-tmpl to gulp-declare:

```javascript
var template = require('gulp-tmpl');
var declare = require('gulp-declare');

gulp.task('templates', function(){
  gulp.src(['client/templates/*.hbs'])
    .pipe(template())
    .pipe(declare({
      namespace: 'MyApp.templates'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/js/'));
});
```


## API

### template(options)

#### options.compilerOptions
Type: `Object`

Compiler options to pass to `_.template`.
