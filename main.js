const { app, BrowserWindow,Menu,path } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 1000,
    minHeight: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.setBackgroundColor('rgb(1, 68, 70)');

  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Save',
          accelerator: 'Ctrl + S',
          click: () => win.webContents.send('save-file', ['save this file'])
        },
        {
          label: 'Open',
          accelerator: 'Ctrl + O',
          click: OpenFile
        }
      ]
    }
  ]
  
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  win.loadFile('dist/angular-form-builder/index.html')
}

const SaveFile = () => {

}

const OpenFile = () => {

}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})