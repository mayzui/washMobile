---
title:前端
---

# 开始一个electron应用程序

:::tip 看看文档
[文档地址](https://www.electronjs.org/zh/docs/latest/tutorial/quick-start)
:::

:::tip 开始构建
:::

```cmd
    yarn init
```
:::tip 第二不添加electron
官网上给了 npm和yarn两种命令
:::

```cmd
npm install --save-dev electron
yarn add --dev electron
# 没有翻墙都慢的很,使用cnpm 快的一b
cnpm install --save-dev electron

```

> package.json文件改成这个样


```json
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js",
  "author": "Jane Doe",
  "license": "MIT",
  "scripts": {
    "start": "electron ."
  }
}
```


:::danger 创建一个index.html
:::

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <title>啦啦啦!</title>
  </head>
  <body>
    <h1>老王!</h1>
    来玩 <span id="node-version"></span>,
    玩 <span id="chrome-version"></span>,
    Electron <span id="electron-version"></span>.
  </body>
</html>
```


:::danger 创建一个main.js 
main的js是你构建项目是填写的 构建的时候默认是index.js  我填写的是main.js根据个人习惯
:::

```javascript

const { app, BrowserWindow } = require('electron')


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}


app.whenReady().then(() => {
    createWindow()
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

```

:::danger 运行一下
:::
```cmd
    yarn start
```
