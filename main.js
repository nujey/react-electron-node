const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  // 加载应用 本链接可以根据项目修改 这里是react
  mainWindow.loadURL('http://localhost:3000/')

  // 关闭的时候
  mainWindow.on('closed', ()=> {
    mainWindow = null
  })
}

// 当electron完成初始化的时候 准备创建浏览器窗口的时候调用
app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})
