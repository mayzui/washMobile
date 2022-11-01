require('babel-register')({
    presets: ['env']
})
function resolve(dir) {
    return path.join(__dirname, dir)
}
const {
    PROXY_API,
    SASS_GLOBAL_VAR,
    DEV_HOST,
    DEV_PORT,
    PUBLIC_PATH
} = require('./vue.app')
const path = require('path')

let devServerProxy = {}
for (let [key, value] of PROXY_API) {
    if (!value) return
    const pathRewrite = {}
    pathRewrite['^/' + key] = '/'
    devServerProxy['/' + key] = {
        target: value,
        ws: true,
        changOrigin: true,
        pathRewrite: pathRewrite
    }
}

module.exports = {
    publicPath: PUBLIC_PATH,
    outputDir: 'dist',
    // 是否开启eslint保存检测，有效值：ture | false | 'error'
    lintOnSave: false,
    // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    productionSourceMap: false,
    // 构建时开启多进程处理babel编译
    parallel: require('os').cpus().length > 1,
    devServer: {
        open: true,
        host: DEV_HOST || '0.0.0.0',
        port: DEV_PORT || 10086,
        https: false,
        hotOnly: true,
        // 设置让浏览器 overlay 同时显示警告和错误
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: devServerProxy
    },
    configureWebpack: config => {
        config.externals = {
            'element-ui': 'ELEMENT',
            'vue-router': 'VueRouter',
            'vue': 'Vue',
            'vuex': 'Vuex',
            'axios': 'axios'
        }
        config.name = '洗护-代理端'
        config.resolve = {
            alias: {
                '@': resolve('src'),
                '@root': path.resolve(__dirname),
                '@control': path.resolve(__dirname, 'src/core/control'),
                '@utils': path.resolve(__dirname, 'src/core/utils'),
                '@comp': path.resolve(__dirname, 'src/components')
            },
            extensions: ['.js', '.vue', '.json']
        }
    },
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    resources: SASS_GLOBAL_VAR
                })
                .end()
        })
    }
}