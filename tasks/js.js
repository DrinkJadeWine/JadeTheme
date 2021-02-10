import gulp from 'gulp'
import path from 'path'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import webpackConfig from '../webpack.config.js'

export function js() {
    return gulp.src(path.resolve(__dirname, '../js/**/*.js'))
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest(path.resolve(__dirname, '../shopify-theme/assets')))
}

export function watchJs() {
    gulp.watch(path.resolve(__dirname, '../js/**/*.js'), js);
}