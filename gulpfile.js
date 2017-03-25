'use strict';
var gulp = require('gulp'),
	pug = require('gulp-pug'),
 	stylus = require( 'gulp-stylus' ),
	concatCss = require( 'gulp-concat-css' ),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename'),
	concat = require( 'gulp-concat' ),
  uglify = require('gulp-uglify'),
  scss = require('gulp-sass')


var browserSync = require("browser-sync").create();

  gulp.task("serve", function(){
    browserSync.init({
      server:{
        baseDir:'./'
      }
    });
    gulp.watch("./index.html").on("change", browserSync.reload);
    gulp.watch("./app.js").on("change", browserSync.reload);
    gulp.watch("./app.css").on("change", browserSync.reload);

});

gulp.task( 'js', function() {

  gulp.src( [
    // './bower_components/jquery/dist/jquery.min.js',
    // './assets/js/libs/jquery-ui.min.js',
    // './assets/js/libs/jquery.ui.touch-punch.min.js',
    // './bower_components/bootstrap/dist/js/bootstrap.min.js',
    // './bower_components/angular/angular.min.js',
    // './bower_components/angular-local-storage/angular-local-storage.min.js',
    // './assets/js/libs/sortable.js',
    // './assets/js/libs/app.js',
    // './assets/js/directives/angular.editInPlace.js',
    // './assets/js/directives/angular.ngEnter.js'

    
      './assets/js/libs/jquery.min.js',
      './assets/js/libs/jquery-ui.min.js',
      './assets/js/libs/jquery.ui.touch-punch.min.js',
      './assets/js/libs/bootstrap.min.js',
      './assets/js/libs/angular.min.js',
      './assets/js/libs/angular-local-storage.min.js',
      './assets/js/libs/sortable.js',
      './assets/js/app.js',
      './assets/js/directives/angular.editInPlace.js',
      './assets/js/directives/angular.ngEnter.js',
      './assets/js/libs/eventos.js'
  ] )
    .pipe( concat( 'app.js' ) )
    // .pipe(uglify())
    .pipe( gulp.dest( './' ) );

});
gulp.task('css', function(){
   gulp.src([
    './bower_components/bootstrap/dist/css/bootstrap.min.css',
    './assets/css/**/*.css'
   ])
    .pipe(concatCss("app.css"))
    .pipe(cssmin())
    .pipe(rename({suffix: ''}))
    .pipe(gulp.dest('./'))
});
gulp.task('scss', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(scss.sync().on('error', scss.logError))
    .pipe(gulp.dest('./assets/css/'));
});


gulp.task('html', function(){
  gulp.src('./assets/views/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
});
 
gulp.task('watch', function() {
  
  gulp.watch('./assets/css/**/*css', ['css'] );
  gulp.watch('./assets/scss/**/*.scss', ['scss']);
  gulp.watch('./assets/**/*js', ['js'] );
  gulp.watch('./assets/views/**/*.pug', ['html'] );

});


gulp.task('default', [ 'html', 'js', 'css', 'scss' ]);
