/**
 * author: 林欣
 * date: 2020.5.15
 * describe: 公共部分api
 * options:
 *  - url      请求路径（必须）
 *  - method   请求模式（必须）
 *  - isToken  是否请求带上Token（默认：true）
 *  - openLoading  是否请求展示loading（默认：true）
 *  - openErrHintMsg   是否展示错误信息（默认：true）
 *  - openErrNotReturn 是否开启请求HTTP200操作失败不返回（默认：true）
 *  - beforeReq  请求前提交参数处理函数
 *  - afterReq   请求后响应参数处理函数
 */
export default {
    // 默认api声明用例
    login: {
        url: '/api/agent/login/login',
        method: 'post',
        openLoading: true,
        isToken: false
    },
    // 函数带自定义字段式生成api方式用例
    // getBillList (data, other) {
    //   other = other || 1
    //   return {url: `/api/bill/${other}`, method: 'get', params: data}
    // }
}