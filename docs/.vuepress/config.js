const { defaultTheme } = require('vuepress')


const navbar =  require('./configs/navbar');
const sidebar=  require('./configs/sidebar');

module.exports = {
    home:true,
    docsDir: 'docs',
    title: 'May醉',
    description: '过刚则折 过满则溢 人生有度 物极必反',
    head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
    host:'127.0.0.1',
    port:8080,
    theme: defaultTheme({
        colorMode: 'dark',
        logo: './images/logo.png',
        // 默认主题配置
        navbar: navbar,
        sidebar:sidebar,
        sidebarDepth : 3
    }),
}
