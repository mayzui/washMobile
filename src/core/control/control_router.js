/**
 * author: 林欣
 * describe: vue路由创建
 */
import LxRouter from '@utils/LxRouter'
import {handleAuthToken} from '@control/control_site'
import {ROUTES_LIST} from '@control/control_unite'

const lxRouter = new LxRouter({
  routes: ROUTES_LIST,
  /**
   * describe: 路由鉴权函数
   * @param {Array} authList 路由定义meta里面的auth权限列表
   * @param {Function} next  vue-router beforeEach中的next回调函数
   */
  permission: (authList, next) => {
    // 登陆鉴权
    const logged = authList.includes('logged')
    if (logged) {
      const token = handleAuthToken.get()
      if (!token) return next('/login')
    }
    next()
  }
})

export default lxRouter.router
