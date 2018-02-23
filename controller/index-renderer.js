const { BrowserWindow } = require('electron').remote
const path = require('path')
const newWindowBtn = document.getElementById('frameless-window')

newWindowBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '../view/modal.html')
  let win = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false,
    transparent: false
  })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})
