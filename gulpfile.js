var gulp           = require('gulp'),
    typescript    = require('gulp-typescript'),
    browserSync         = require('browser-sync'),
    historyApiFallback  = require('connect-history-api-fallback'),
    reload              = browserSync.reload
    ;


tsFiles =  [
    'typeScripts/*.ts'
];

gulp.task('compileTypeScript', function () {
    return gulp.src(tsFiles)
        .pipe(typescript({
            noImplicitAny: true,
            out: 'output.js'
        }))
        .pipe(gulp.dest('scripts'))
        .pipe(reload({stream:true}));
});

gulp.task('watch', function () {
    gulp.watch('typeScripts/*.ts', ['compileTypeScript']);
    gulp.watch('*.html', ['compileTypeScript']);

});

gulp.task('browser-sync', function() {
    browserSync({
        server : {},
        middleware : [ historyApiFallback() ],
        ghostMode: false
    });
});




gulp.task('default', [ 'compileTypeScript', 'watch', 'browser-sync' ]);