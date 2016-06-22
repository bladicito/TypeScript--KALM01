var gulp = require('gulp'),
	typescript = require('gulp-typescript'),
	browserSync = require('browser-sync'),
	rename = require('gulp-rename'),
	historyApiFallback = require('connect-history-api-fallback'),
	reload = browserSync.reload,
	less = require('gulp-less'),
	path = require('path')
	;


tsFiles = [
	'typeScripts/helpers.ts',
	'typeScripts/playlist.ts',
	'typeScripts/song.ts',
	'typeScripts/app.ts'
	

];
var lessFiles = ["lessFiles/*.less"];

gulp.task('less', function () {
	return gulp.src(lessFiles)
	.pipe(less())
	.pipe(rename({dirname : ''}))
	.pipe(gulp.dest('css'))
});

gulp.task('compileTypeScript', function () {
	return gulp.src(tsFiles)
		.pipe(typescript({
			noImplicitAny: true,
			out: 'output.js'
		}))
		.pipe(gulp.dest('scripts'))
		.pipe(reload({stream: true}));
});

gulp.task('watch', function () {
	gulp.watch('typeScripts/*.ts', ['compileTypeScript']);
	gulp.watch('*.html', ['compileTypeScript']);
	gulp.watch('*.less', ['less']);

});

gulp.task('browser-sync', function () {
	browserSync({
		server: {},
		middleware: [historyApiFallback()],
		ghostMode: false
	});
});


gulp.task('default', ['compileTypeScript','less', 'watch', 'browser-sync']);