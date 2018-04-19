const { BrowserWindow } = require('electron').remote
const { ipcRenderer } = require('electron')
const path = require('path')
const newWindowBtn = document.getElementById('frameless-window')

// change conditions to send the message to create modal...
newWindowBtn.addEventListener('click', (event) => {
  ipcRenderer.send('asynchronous-message', 'newWindowClicked')
})

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  document.getElementById('async-reply').innerHTML = `Reply: ${arg}`
})
