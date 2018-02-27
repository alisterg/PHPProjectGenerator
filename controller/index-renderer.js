const { BrowserWindow } = require('electron').remote
const path = require('path')
const newWindowBtn = document.getElementById('frameless-window')

newWindowBtn.addEventListener('click', (event) => {
  createModal()
})

// TODO figure out this modal shit
