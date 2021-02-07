import gulp from 'gulp'
import babel from 'gulp-babel'
import path from 'path'

export function js() {
    return gulp.src(path.resolve(__dirname, '../js/**/*.js'))
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest(path.resolve(__dirname, '../shopify-theme/assets')))
}

export function watchJs() {
    gulp.watch(path.resolve(__dirname, '../js/**/*.js'), js);
}