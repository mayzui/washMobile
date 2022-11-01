/**
 * author: 林欣
 * describe: api 请求函数创建
 * warning: 已在main.js中将其挂载至vue原型实例中，
 *          可使用this.$api.[_api下的文件名].[api名]调用api请求
 * example:
 *  this.$api.user.login(data, other).then(res=>{ // success }).catch(err=> // error)
 *  => data  {Object} 必须，请求参数
 *  => other {Any}    可选，用于当api为函数返回时，传入函数的自定义字段，如：
 *     {
 *       getBillList (data, other) {
 *         other = other || 1
 *         return {url: `/api/bill/${other}`, method: 'get', params: data}
 *       }
 *     }
 */
import LxRequest, {createApi} from '@utils/LxRequest'
import {APT_LIST} from '@control/control_unite'
import {AUTH_MODE, AUTH_FIELD, handleAuthToken} from '@control/control_site'
import {PROXY_API, AXIOS_BASE_URL} from '@root/vue.app'

const request = new LxRequest({
  /**
   * 可配置项：
   * openLoading: true, // Boolen 是否开启请求全屏loading
   * openErrHintMsg: true, // Boolen 是否开启请求HTTP200操作失败自动提示错误消息
   * openErrNotReturn: true, // Boolen 是否开启请求HTTP200操作失败不返回
   * beforeReq: data => data, // Function 请求前提交参数处理函数
   * afterReq: data => data, // Function 请求后响应参数处理函数
   * hint: window.alert, // Function 错误信息提示函数
   * timeout: 3000, // Number 请求超时配置毫秒
   * responseFormat: { // Object 响应参数格式
   * codeField: 'status', // String 操作识别码字段名
   * codeValue: { // Object 操作识别码值
   *   success: true, // [Number,String,Boolean] 成功
   *   fail: false // [Number,String,Boolean] 失败
   * },
   * hintField: 'msg', // String 操作提示字段名
   * isStrictMode: true // Boolen 是否开启严格验证识别码值模式，即是否恒等于
   * },
   * httpCode: [// Array HTTP响应码
   *   {code: 0, msg: '网络链接失败，请检查您网络或稍后重试！'},
   *   {code: 401, msg: '抱歉，无访问权限，请先登录账号!', to: '/login'}, // 可选
   *   {code: 404, msg: '该资源在服务器不存在，请确认您操作正确！'}, // 可选
   *   {code: 500, msg: '服务器开小差了，请稍后重试！'}, // 可选
   *   // 可自由新增更多
   * ],
   * baseUrl: ''
   */
  proxyApi: PROXY_API, // api代理地址
  baseUrl: AXIOS_BASE_URL,
  /**
   * describe: 鉴权数据
   * warning: 请勿在此配置，请移步/control/site中进行相关配置
   * @param {String} authMode 鉴权模式，可选参数 [header 请求头模式] [params 请求参数模式]
   * @param {String} authField 鉴权字段名 (请求头模式为请求头字段名，请求参数模式为请求参数名)
   * @param {getAuthenToken} Function 获取鉴权token值
   */
  authMode: AUTH_MODE,
  authField: AUTH_FIELD,
  authToken: handleAuthToken.get()
})

const api = createApi(APT_LIST, request.service)

export default api
