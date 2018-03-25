const { BrowserWindow } = require('electron').remote
const path = require('path')
const newWindowBtn = document.getElementById('frameless-window')

newWindowBtn.addEventListener('click', (event) => {
  createModal()
})

// TODO put this in the main process to set mainWindow as the parent for correct modalness
function createModal(backgroundColor) {
  // red: "#ef5350" green: #66bb6a

  const modalPath = path.join('file://', __dirname, '../view/alert-modal.html')

  let modalWin = new BrowserWindow({
    modal: true,
    // parent: mainWindow,
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
