const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../view/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

function createModal(backgroundColor) {
  // red: "#ef5350" green: #66bb6a

  const modalPath = path.join('file://', __dirname, '../view/alert-modal.html')

  let modalWin = new BrowserWindow({
    modal: true,
    parent: mainWindow,
    x: 100,
    y: 100,
    width: 350,
    height: 200,
    frame: false,
    backgroundColor: backgroundColor
  })

  modalWin.on('close', () => { modalWin = null })
  modalWin.loadURL(modalPath)
  modalWin.show()
}


app.on('ready', createWindow)

app.on('window-all-closed', function () {
  app.quit()
})

app.on('activate', function () { // OS X
  if (mainWindow === null) {
    createWindow()
  }
})

//////// Anciliary main process code here

