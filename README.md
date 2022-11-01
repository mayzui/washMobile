# 洗护-代理端
> 该模板为本人在工作中累计经验而研发出的前端三层架构，架构以后端思想驱动前端架构发展，整合代码逻辑，集控管理核心逻辑。便于代码的开发与维护。
框架模板已集成sass、iconfont.cn字体图片功能，做到开箱即用。详细的代码注解，可作为前端进阶学习的产物。如有疑问欢迎小窗咨询：695524015（QQ）。

- [demo预览站](https://preview.dev.hcyan.cn/password/lxVueTemplate)  (密码: 123456)

## 项目开发信息

#### 前端开发: 林欣 -Vue
#### 后端开发:
#### 项目经理:
#### 启动时间: 2020.05.15
#### 原型图:
- [用户端-H5]()
- [管理端-PC]()
#### 仓库首页: [仓库首页](https://gitee.com/qc-web-y/lx-vue-template)
#### 仓库GIT: [仓库Git](https://gitee.com/qc-web-y/lx-vue-template.git)
#### 测试预览: [demo预览站](https://preview.dev.hcyan.cn/password/lxVueTemplate)

#### 接口与文档
接口类型 | 接口地址 | 文档地址 | 用户名与账号
:-:|:-:|:-:|:-:
模拟测试 | [mock](https://mock.lx.test.hcyan.cn/mock/5ea03a75f439060016f1744c/template) | 无 | 无

#### 后端接口返回数据格式规范
```
// HTTP 200 请求成功
// 1. 通用数据返回格式
{
  data: '数据',
  code: '1-成功 2-失败 3-无权限'
  msg: "提示信息",
}

// HTTP 401 鉴权失败

// HTTP 404 不存在

// HTTP 500 服务器错误
```

## 项目目录结构
```
|- docs ---------------------------- 文档规范
|- public -------------------------- 基于站点目录的静态资源文件
|- src ----------------------------- 开发目录
|- |-- assets ---------------------- 开发时引用到的静态资源文件
|- |-- |-- iconfont ---------------- gulp-qc-iconfont插件生成字体图标文件
|- |-- |-- sls --------------------- simple-layout-scss简易布局框架
|- |-- |-- logo.png ---------------- 站点LOGO
|- |-- components ------------------ 全局公共组件
|- |-- core ------------------------ 架构核心逻辑
|- |-- |-- _api -------------------- API文件（以文件命名模块，可直接通过this.$api.[文件名].[方法名]进行调用）
|- |-- |-- _router ----------------- 路由文件（以文件命名模块，自动生成相关模块路由）
|- |-- |-- _store ------------------ vuex存储逻辑文件（以文件命名模块，自动生成相关模块存储库）
|- |-- |-- control ----------------- 架构核心控制器
|- |-- |-- |-- control_api.js ------ API控制器
|- |-- |-- |-- control_router.js --- 路由控制器
|- |-- |-- |-- control_site.js ----- 站点变量控制器（已挂载进VUE原型实例，可直接通过this.$site.[变量名]进行调用）
|- |-- |-- |-- control_store.js ---- vuex控制器
|- |-- |-- |-- control_unite.js ---- 架构主控
|- |-- |-- utils ------------------- 架构核心工具
|- |-- views ----------------------- 页面视图文件
|- |-- App.vue --------------------- vue入口视图
|- |-- main.js --------------------- vue入口逻辑
|- .gitignore ---------------------- git忽略配置
|- babel.config.js ----------------- babel配置
|- gulpfile.js --------------------- gulp插件配置
|- LICENSE ------------------------- 开源许可说明
|- vue.app.js ---------------------- 模板项目基础配置
|- vue.config.js ------------------- vue-cli配置
```

## 项目架构说明
```
|- 项目架构分三层
|- |-- 项目层 -即项目根目录，为整个项目的所有内容
|- |-- 开发层 -即项目src目录，为整个项目开发主要内容
|- |-- |-- 开发层细分为以下五层
|- |-- |-- |-- src/assets           -资源层，主要存放会被webpack打包进项目的静态资源
|- |-- |-- |-- src/components       -组件层，主要存放会被全局多次调用的公共组件
|- |-- |-- |-- src/core             -控制层，即项目核心控制中心
|- |-- |-- |-- src/views            -视图层，主要存放路由相关的视图组件
|- |-- |-- |-- src/App.vue与main.js -入口层，主要为vue项目入口逻辑
|- |-- 控制层 -即项目src/core目录，为整个项目核心逻辑层
|- |-- |-- 控制层细分为以下四层
|- |-- |-- |-- src/core/_api                     -api层，项目api文件
|- |-- |-- |-- src/core/_router                  -路由层，项目路由文件
|- |-- |-- |-- src/core/_store                   -存储层，项目vuex文件
|- |-- |-- |-- src/core/control/control_site.js  -变量层，项目全局挂载变量
```
## command
npm 命令 | 描述
:-:|:-:
``npm install`` | 安装相关依赖
``npm run serve`` | 启动开发环境
``npm run build`` | 构建打包代码
``npm run build:lx`` | 构建打包代码至我的预览站
``npm run dev:icon`` | 根据配置的阿里图标css在线地址快速生成开发字体图标css文件
``npm run build:icon`` | 根据配置的阿里图标css在线地址快速生成正式字体图标css及字体文件

## 技术栈
技术栈 | 描述
:-:|:-:
[vue](https://cn.vuejs.org/) | 项目主框架
[vue-cli](https://cli.vuejs.org/) | 项目搭建脚手架
[vue-router](https://router.vuejs.org/zh/) | 路由
[vuex](https://vuex.vuejs.org/zh/) | 存储
[axios](https://github.com/axios/axios) | ajax请求
[gulp-qc-iconfont](https://github.com/qc-web-y/gulp-qc-iconfont) | 阿里iconfont图标快速生成器
[sass](https://www.sass.hk/) | CSS预编译
[simple-layout-scss](https://gitee.com/qc-web-y/sls) | CSS简易框架

## 开发规范
- [命名规范](docs/name.docs.md)
- [sass规范](docs/sass.docs.md)

## 开源说明
> 该架构为本人前端工作4年累积的经验收获，欢迎大家使用并提出不同的意见，当然如果我的作品荣幸的被您看中，也希望在使用过程中可以保留作者信息，以对我辛苦付出的回馈！
