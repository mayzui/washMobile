import Vue from 'vue'
import App from '@/App.vue'
import api from '@control/control_api'
import router from '@control/control_router'
import site from '@control/control_site'
import store from '@control/control_store'
import '@/assets/iconfont/iconfont.css'
import '@/assets/sls/index.scss'
import {
    toast
} from '@/core/utils/tools.js'
import cubtn from '@/components/cubtn.vue';
Vue.component('cubtn', cubtn) // 按钮
import selecttime from '@/components/selecttime.vue';
Vue.component('selecttime', selecttime) // 选择时间
Vue.prototype.toast = toast
Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.prototype.$api = api
Vue.prototype.$site = site

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 开发调试输出
if (process.env.NODE_ENV === 'development') {
  window.__currentApp = vue
  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = vue.constructor
  }

  console.log('%c[api] --api列表--↓↓↓', 'color:#4188f2;')
  console.dir(api)

  console.log('%c[config] --站点配置--↓↓↓', 'color:#4188f2;')
  console.dir(site)

  console.log('%c[routes] --路由列表--↓↓↓', 'color:#4188f2;')
  console.dir(router.options.routes)

  console.log('%c[store] --store state--↓↓↓', 'color:#4188f2;')
  console.dir(store._modules.root.state)

  console.log('%c[store] --store actions--↓↓↓', 'color:#4188f2;')
  console.dir(store._actions)
}
