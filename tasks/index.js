import gulp from 'gulp'
import path from 'path'
import { browserSyncServer, uploadFilesToShopify } from './server'
import { watchSass } from './sass'

gulp.task('sass', () => {
    return gulp.src(path.resolve(__dirname, '../sass/**/*.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.resolve(__dirname, '../shopify-theme/assets')))
})

gulp.task('sass:watch', () => {
    gulp.watch(path.resolve(__dirname, '../sass/**/*.scss'), gulp.series('sass'));
})


gulp.task('dev', gulp.parallel(browserSyncServer, uploadFilesToShopify, watchSass))

gulp.task('default', gulp.series('dev'))