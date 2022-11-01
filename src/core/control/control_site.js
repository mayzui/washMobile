import LxCache from '@utils/LxCache'

/**
 * author: 林欣
 * describe: 鉴权Token相关常量
 * warning: 请勿轻易删除，除非你已对模板源码了如指掌
 * @param {String} AUTH_MODE 鉴权模式，可选参数 [header 请求头模式] [params 请求参数模式]
 * @param {String} AUTH_FIELD 鉴权字段名 (请求头模式为请求头字段名，请求参数模式为请求参数名)
 * @param {String} CACHE_MODE 鉴权字段缓存模式，可选参数 [sessions 使用sessionStorage缓存] [locals 使用localStorage缓存]
 * @param {Function} handleAuthToken 操作鉴权值
 */
export const AUTH_MODE = 'header'
export const AUTH_FIELD = 'token'
export const CACHE_MODE = 'sessions'
export const handleAuthToken = new LxCache({
    mode: CACHE_MODE,
    field: AUTH_FIELD
})

/**
 * author: 林欣
 * describe: 全局公共配置(站点配置文件)
 * warning: 已在main.js中将其挂载至vue原型实例中，
 *          可使用this.$site.[变量名]获取值或调用函数
 *          注意，如非全局多处使用不建议申明在此处!
 */
export default {
    // 这里存放一些全局公用的变量及方法
    name: '洗护-代理端',
    website: 'https://gitee.com/qc-web-y/lx-vue-template',
    issues: 'https://gitee.com/qc-web-y/lx-vue-template/issues',
    navList: [
        { path: '/home', name: '首页' },
        { path: '/content', name: '内容' },
        { path: '/user', name: '用户' },
        { path: '/login', name: '登录' }
    ]

}