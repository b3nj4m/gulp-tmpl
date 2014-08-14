# gulp-tmpl

Lodash/Underscore templates plugin for gulp 3

## Usage

First, install `gulp-tmpl` as a development dependency:

```shell
npm install --save-dev gulp-tmpl
```

## Compiling and executing the templates:

```javascript
var template = require('gulp-tmpl');
var source = require('vinyl-source-stream');

gulp.task('templates', function(){
  var data = {
    someTmplVars: 'woo'
  };

  gulp.src(['client/templates/index.tpl'])
    .pipe(template(data))
    .pipe(source('index.html'))
    .pipe(gulp.dest('build/html/'));
});
```

## Compiling to JS:

```javascript
var template = require('gulp-tmpl');

gulp.task('templates', function(){
  gulp.src(['client/templates/*.tpl'])
    .pipe(template.precompile())
    .pipe(gulp.dest('build/templates/'));
});

```

## API

### template(data, options)

#### data
Type: `Object`

Data to pass to the compiled template when executing it.

#### options.compilerOptions
Type: `Object`

Compiler options to pass to `_.template`.

### template.precompile(options)

(Same options as above)

## Credit

All the credit goes to [Larry Davis](https://github.com/lazd). This plugin is heavily inspired (read copied) from his [gulp-handlebars](https://github.com/lazd/gulp-handlebars) plugin.
