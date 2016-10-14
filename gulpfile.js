var gulp = require('gulp'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify');

gulp.task('styles', function () {
    gulp.src('views/**/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/stylesheets'))
        .pipe(minifycss());
});

gulp.task('scripts', function () {
    gulp.src('views/**/*.js')
        .pipe(babel({
            presets: ["es2015", "es2016", "stage-3"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', function () {

    // gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject']);

    gulp.watch('views/**/*.less', function(event) {
        if(isOnlyChange(event)){
            gulp.start('styles');
        }
    });

    gulp.watch('views/**/*.js', function (event) {
        if(isOnlyChange(event)){
            gulp.start('scripts');
        }
    })

});