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
    //首页数据
    agenturl: {
        url: '/api/agent/homepage/link',
        method: 'get',
        openLoading: true,
        isToken: true
    },
    homechart: {
        url: '/api/agent/homepage/lists',
        method: 'get',
        openLoading: true,
        isToken: true
    },
    //操作日志列表
    loglist: {
        url: '/api/agent/agentaccount/record',
        method: 'get',
        openLoading: true,
        isToken: true
    },
    //账号列表
    accountlist: {
        url: '/api/agent/agentaccount/lists',
        method: 'get',
        openLoading: true,
        isToken: true
    },
    //重置账号
    restartaccount: {
        url: '/api/agent/agentaccount/reset',
        method: 'post',
        openLoading: true,
        isToken: true
    },
    //新增账号
    addaccount: {
        url: '/api/agent/agentaccount/save',
        method: 'post',
        openLoading: true,
        isToken: true
    },
    //编辑账号
    editaccount: {
        url: '/api/agent/agentaccount/modify',
        method: 'put',
        openLoading: true,
        isToken: true
    },
    //账号详情
    accountdetail: {
        url: '/api/agent/agentaccount/getone',
        method: 'get',
        openLoading: true,
        isToken: true
    },
    //删除账号
    deleteaccount: {
        url: '/api/agent/agentaccount/remove',
        method: 'delete',
        openLoading: true,
        isToken: true
    },
    // 函数带自定义字段式生成api方式用例
    // getBillList (data, other) {
    //   other = other || 1
    //   return {url: `/api/bill/${other}`, method: 'get', params: data}
    // }
}