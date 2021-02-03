import gulp from 'gulp'
import path from 'path'
import sass from 'gulp-sass'


export function compileSass() {
    return gulp.src(path.resolve(__dirname, '../sass/**/*.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.resolve(__dirname, '../shopify-theme/assets')))
}

export function watchSass() {
    gulp.watch(path.resolve(__dirname, '../sass/**/*.scss'), compileSass);
}