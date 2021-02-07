import gulp from 'gulp'
import { browserSyncServer, uploadFilesToShopify } from './server'
import { watchSass } from './sass'
import { watchJs } from './js'


gulp.task('dev', gulp.parallel(browserSyncServer, uploadFilesToShopify, watchSass, watchJs))

gulp.task('default', gulp.series('dev'))