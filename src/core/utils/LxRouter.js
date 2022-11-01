/**
 * author: 林欣
 * describe: vue路由创建封装
 */

import Vue from 'vue'
import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)

const defaultOptions = {
    mode: 'hash', // 可选值: "hash" | "history"
    base: '/', // 参考：https://router.vuejs.org/zh/api/#base
    scrollBehavior: () => ({ y: 0 }), // 参考：https://router.vuejs.org/zh/api/#scrollbehavior
    permission: null // 鉴权函数
}

const routerBeforeEach = Symbol('routerBeforeEach')
const routerAfterEach = Symbol('routerAfterEach')

class LxRouter {
    constructor(options) {
        options = Object.assign({}, defaultOptions, options)
        const { mode, base, scrollBehavior, routes, permission } = options

        const router = new Router({
            mode,
            base,
            scrollBehavior,
            routes
        })
        router.beforeEach(LxRouter[routerBeforeEach](permission))
        router.afterEach(LxRouter[routerAfterEach])

        this.router = router
    }

    static[routerBeforeEach] = permission => (to, from, next) => {
        //拦截上一页面axios所有请求
        window.__axiosPromiseArr.forEach((ele, index) => {
            ele.cancel()
            window.__axiosPromiseArr.splice(index, 1)
        })

        // 进入鉴权
        if (to.meta && to.meta.auth && permission) {
            permission(to.meta.auth, next)
            return
        }

        let token = sessionStorage.getItem("token")
        if (to.path === '/login') return next()
        else return !token || token == null || token == '' || token == 'null' ? next('/login') : next()

        // 进入页面
        return next()
    }

    static[routerAfterEach] = ( /*to, from, next*/ ) => {
        // 暂时没想到做什么
    }
}

export default LxRouter