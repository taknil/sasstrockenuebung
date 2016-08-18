var gulp = require('gulp');
var sass = require('gulp-sass');
var echo = require('node-echo');

var config = require('./gulp-config');


//task that builds styles
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});


gulp.task('styles-sophisiticated', function() {
    gulp.src(config.src.scss)
        .pipe(sass(
        {
        	outputStyle: 'expanded',
            sourceComments: true
        }
        	).on('error', sass.logError))
        .pipe(gulp.dest(config.build.css));
});


gulp.task('foo', function() {
	echo("foo");
});
//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});