const { app, BrowserWindow ,Menu } = require('electron')

const template = []
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL('http://10.6.58.121:8090/#/welcome')
}

app.whenReady().then(() => {
  createWindow()
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })
})

