/**
 * author: 林欣
 * date: 2020.5.15
 * describe: iconfont 图标快速生成器
 * use: npm run dev:icon   [生成开发icon]
 *      npm run build:icon [生成正式icon]
 * document: https://github.com/qc-web-y/gulp-qc-iconfont
 */

require('babel-register')({presets: ['env']})
const gulp = require('gulp')
const gulpQcIconFont = require('gulp-qc-iconfont')
const del = require('del')

const isDev = (process.env.NODE_ENV || 'development') === 'development'

const  {ICONFONT_URL, ICONFONT_OUT_PATH}  = require('./vue.app')
const output = ICONFONT_OUT_PATH
const iconUrl = ICONFONT_URL

if (!iconUrl) {
  return console.error(`抱歉！不存在可编译的css文件，请检查vue.app.js配置文件中的 “ICONFONT_URL”`)
}

gulp.task('clean:iconfont', done => del([`${output}/*`], done))

gulp.task('deal:iconfont', () => gulpQcIconFont({
  url: iconUrl,
  keepIconFontStyle: true,
  isDev: isDev,
}).pipe(gulp.dest(output)))

gulp.task('default', gulp.series('clean:iconfont', 'deal:iconfont'))
