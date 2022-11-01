/**
 * author: 林欣
 * date: 2020.5.15
 * describe: 首页模块路由
 * options:
 *  - path       路由路径（必须）
 *  - redirect   路由重定向地址（可选）
 *  - name       路由名称
 *  - meta       路由自定义参数 { title:string [路由视图标题名称], auth:array [权限字段数组] }
 *  - component  路由引用视图组件
 *  - children   嵌套子路由
 */
const NotFound = () =>
    import ('@/views/error.vue');
export default [
    // 重定向
    {
        path: '*',
        redirect: '/error',
        replace: true
    }, {
        path: '/',
        redirect: '/login',
        replace: true
    },
    // 登录
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/user/login.vue')
    },
    // 首页
    {
        path: '/info',
        name: 'info',
        redirect: '/info/home',
        component: () =>
            import ('@/views/info.vue'),
        children: [{
                path: 'home',
                name: 'home',
                component: () =>
                    import ('@/views/info/home.vue'),
                meta: {
                    title: '首页'
                }
            }, {
                path: 'log',
                name: 'log',
                component: () =>
                    import ('@/views/info/log.vue'),
                meta: {
                    title: '日志'
                }
            },
            {
                path: 'account',
                name: 'account',
                component: () =>
                    import ('@/views/info/account.vue'),
                meta: {
                    title: '帐号管理'
                }
            },
            {
                path: 'addaccount',
                name: 'addaccount',
                component: () =>
                    import ('@/views/info/addaccount.vue'),
                meta: {
                    title: '帐号管理'
                }
            },
            {
                path: 'editaccount',
                name: 'editaccount',
                component: () =>
                    import ('@/views/info/editaccount.vue'),
                meta: {
                    title: '帐号管理'
                }
            },
            {
                path: '/error',
                name: 'error',
                component: NotFound
            }
        ]
    },
    // 错误页
    {
        path: '/error',
        name: 'error',
        component: NotFound
    }
]