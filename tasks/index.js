import gulp from 'gulp'
import { browserSyncServer, uploadFilesToShopify } from './server'

gulp.task('dev', gulp.parallel(browserSyncServer, uploadFilesToShopify))

gulp.task('default', gulp.series('dev'))