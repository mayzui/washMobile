/**
 * author: 林欣
 * describe: axios请求封装
 */

import axios from 'axios'
import Router from '@control/control_router'
import lxLoading from '@utils/lxLoading'
import  { handleAuthToken }  from  '@control/control_site'
import { toast } from './tools'

const isDev = process.env.NODE_ENV === 'development'
const interceptRequest = Symbol('interceptRequest')
const interceptRequestError = Symbol('interceptRequestError')
const interceptResponse = Symbol('interceptResponse')
const interceptResponseError = Symbol('interceptResponseError')
const requestOptions = Symbol('requestOptions')
const globalConfig = Symbol('globalConfig')
const responseFormat = Symbol('responseFormat')
const httpCode = Symbol('httpCode')
const isRequestHeaderMode = Symbol('isRequestHeaderMode')
const isRequestParamsMode = Symbol('isRequestParamsMode')
const hintErrorMsg = Symbol('hintErrorMsg')

const isFunction = val => typeof val === 'function'
const defaultOptions = {
    isToken: true, // Boolen 是否传入Token
    openLoading: false, // Boolen 是否开启请求全屏loading
    openErrHintMsg: true, // Boolen 是否开启请求HTTP200操作失败自动提示错误消息
    openErrNotReturn: true, // Boolen 是否开启请求HTTP200操作失败不返回
    beforeReq: data => data, // Function 请求前提交参数处理函数
    afterReq: data => data, // Function 请求后响应参数处理函数
    hint: toast, // Function 错误信息提示函数
    timeout: 10000, // Number 请求超时配置毫秒
    responseFormat: { // Object 响应参数格式
        codeField: 'status', // String 操作识别码字段名
        codeValue: { // Object 操作识别码值
            success: true, // [Number,String,Boolean] 成功
            fail: false // [Number,String,Boolean] 失败
        },
        hintField: 'msg', // String 操作提示字段名
        isStrictMode: true // Boolen 是否开启严格验证识别码值模式，即是否恒等于
    },
    httpCode: [ // Array HTTP响应码
        { code: 0, msg: '网络链接失败，请检查您网络或稍后重试！' },
        { code: 401, msg: '抱歉，无访问权限，请先登录账号!', to: '/login' }, // 可选
        { code: 404, msg: '该资源在服务器不存在，请确认您操作正确！' }, // 可选
        { code: 500, msg: '服务器开小差了，请稍后重试！' }, // 可选
        // 可自由新增更多
    ],
    baseUrl: ''
}


class LxRequest {
    constructor(options) {
        window.__axiosPromiseArr = []
        window.__axiosLxLoading = null

        options = Object.assign({}, defaultOptions, options)
        const { openLoading, openErrHintMsg, openErrNotReturn, beforeReq, afterReq } = options

        LxRequest[requestOptions] = options
        LxRequest[globalConfig] = { openLoading, openErrHintMsg, openErrNotReturn, beforeReq, afterReq }
        LxRequest[responseFormat] = Object.assign({}, defaultOptions.responseFormat, options.responseFormat)
        LxRequest[httpCode] = Array.from(new Set([...defaultOptions.httpCode, ...options.httpCode]))
        LxRequest[isRequestHeaderMode] = options.authMode === 'header'
        LxRequest[isRequestParamsMode] = options.authMode === 'params'
        LxRequest[hintErrorMsg] = options.hint

        const service = axios.create({
            baseURL: options.baseUrl,
            timeout: options.timeout
        })

        service.interceptors.request.use(LxRequest[interceptRequest], LxRequest[interceptRequestError])

        service.interceptors.response.use(LxRequest[interceptResponse], LxRequest[interceptResponseError]())

        this.service = service
    }

    static[interceptRequest] = config => {
        const deploy = Object.assign({}, LxRequest[globalConfig], config)
        const { openLoading, beforeReq, method, isToken } = deploy
        let { authField, authToken, proxyApi } = LxRequest[requestOptions]
        console.log(config)

        // 设置api地址及正确路径
        if (proxyApi && proxyApi.size) {
            for (let key of proxyApi.keys()) {
                if (deploy.url.indexOf(`{${key}}`) > -1) deploy.baseURL = '/' + key
                deploy.url = deploy.url.replace(`{${key}}`, '')
            }
        }

        // 拦截请求参数进行处理
        const beforeReqIsFunction = isFunction(beforeReq)
        if (beforeReqIsFunction) {
            let argument = 'params'
            switch (method) {
                case 'get':
                    argument = 'params'
                    break
                case 'post':
                    argument = 'data'
                    break
                case 'put':
                    argument = 'data'
                    break
                case 'delete':
                    argument = 'data'
                    break
            }
            deploy[argument] = beforeReq(deploy[argument])
        }

        // 打开全屏loading
        if (openLoading) window.__axiosLxLoading = lxLoading.open()

        // 准备接口鉴权token
		if(isToken){
			authToken = handleAuthToken.get()
			if (authToken && authField) {
				const token = authToken

				if (LxRequest[isRequestHeaderMode] && token) {
					deploy.headers[authField] = token
				}
				if (LxRequest[isRequestParamsMode] && token) {
					let argument = 'params'
					switch (method) {
						case 'get':
							argument = 'params'
							break
						case 'post':
							argument = 'data'
						case 'put':
							argument = 'data'
							break
						case 'delete':
							argument = 'data'
							break
					}
					const authArg = {}
					authArg[authField] = token
					deploy[argument] = Object.assign(deploy[argument] || {}, authArg)
				}
			}			
		}
        // 为路由跳转拦截上一页面请求做准备
        deploy.cancelToken = new axios.CancelToken(cancel => {
            window.__axiosPromiseArr.push({ cancel })
        })

        return deploy
    }

    static[interceptRequestError] = error => {
        if (isDev) console.log('LxRequest interceptRequestError: ', error)
        return error
    }

    static[interceptResponse] = ({ config, status, data }) => {
        const { openLoading, openErrHintMsg, openErrNotReturn, afterReq } = config
        const hint = LxRequest[hintErrorMsg]

        // 关闭loading
        if (openLoading) window.__axiosLxLoading && window.__axiosLxLoading.close()

        // HTTP 200
        if (status === 200) {
			if(data.code == 601){
                toast('登录失效')
                handleAuthToken.del()
                localStorage.clear()
                setTimeout(() => {
                    window.location.href = window.location.origin + '/#/login'
                }, 500);
                return {}
			}
            const { codeField, codeValue, hintField, isStrictMode } = LxRequest[responseFormat]
            const RCODE = data[codeField]
            if (isStrictMode) {
                // 严格模式
                if (RCODE === codeValue.success) {
                    data.status = true
                }

                if (RCODE === codeValue.fail) {
                    data.status = false
                    if (openErrHintMsg) hint(data[hintField])
                    if (openErrNotReturn) return {}
                }
            } else {
                // 非严格模式
                if (RCODE == codeValue.success) {
                    data.status = true
                }

                if (RCODE == codeValue.fail) {
                    data.status = false
                    if (openErrHintMsg) hint(data[hintField])
                    if (openErrNotReturn) return {}
                }

            }
        }

        // 拦截响应参数进行处理
        const afterReqIsFunction = isFunction(afterReq)
        return afterReqIsFunction ? afterReq(data) : data
    }

    static[interceptResponseError] = () => {
        const httpCode = defaultOptions.httpCode
        const hint = LxRequest[hintErrorMsg]
        return error => {
            // 关闭loading
            if (window.__axiosLxLoading) window.__axiosLxLoading.close()

            // 提示错误
            if (!error?.response) {
				console.log(error)
                // hint('接口请求未知错误！')
                return {}
            }

            // 请求错误项获取
            console.log(httpCode)
            const httpCodeNum = parseInt(error.response?.status || 0)
            let httpCodeItem = httpCode.find(s => s.code === httpCodeNum)
            if (!httpCodeItem) httpCodeItem = httpCode.find(s => s.code === 0)
            hint(httpCodeItem.msg)
            if (httpCodeItem.to) Router.replace(httpCodeItem.to)

            if (isDev) console.log('error:', error)
            return {}
        }
    }
}

export default LxRequest

export function createApi(apiList, request) {
    const apiRequest = {}

    Object.keys(apiList).forEach(mItem => {
        const m = apiList[mItem]
        apiRequest[mItem] = {}
        Object.keys(m).map(aItem => {
            const a = m[aItem]
            apiRequest[mItem][aItem] = function(data, apiId) {
                let axiosOption
                if (typeof a === 'object') axiosOption = JSON.parse(JSON.stringify(a))

                axiosOption.method = axiosOption.method.toLowerCase()
                switch (axiosOption.method) {
                    case 'get':
                        axiosOption.params = axiosOption.params || data
                        break
                    case 'post':
                        axiosOption.data = axiosOption.data || data
                        break
                    case 'put':
                        axiosOption.data = axiosOption.data || data
                        break
                    case 'delete':
                        axiosOption.data = axiosOption.data || data
                        break
                }

                if (typeof a === 'function') axiosOption = a(data, apiId)

                return request(axiosOption)
            }
        })
    })

    return apiRequest
}