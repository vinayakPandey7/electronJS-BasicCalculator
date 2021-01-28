const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 325,
    height: 575,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false,
    icon:'calculator.jpeg'
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


const fs = require('fs')

const root = fs.readdirSync('/')

console.log(root.home)