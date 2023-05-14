const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron')
const path = require('path')
const fs = require('fs')

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 1000,
    minHeight: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  win.setBackgroundColor('rgb(1, 68, 70)');

  const OpenFile = () => {
    dialog.showOpenDialog({
      properties: ['openFile']
    }).then(result => {
      if (!result.canceled) {
        fs.readFile(result.filePaths[0], 'utf-8', (err, data) => {
          if (err) {
            console.log(err);
          } else {
            //console.log('Data read from file: ', data);
            win.webContents.send('receive-data', data);
          }
        })
      }
    })
  }

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

  //win.webContents.openDevTools()

  ipcMain.handle('save-data', async (event, data) => {
    dialog.showSaveDialog({
      title: 'Select the file Path to save',
      defaultPath: path.join(__dirname, '/assets/sample.txt'),
      filters: {
        extensions: ['json']
      }
    }).then(result => {
      if (!result.canceled) {
        console.log(result.filePath.toString())
        fs.writeFile(result.filePath.toString(), data[0], (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Data saved to file successfully.");
          }
        })
      }
    })
      .catch(err => console.log(err))
    return "Got the data";
  })

  ipcMain.on('port', (event) => {
    const port = event.ports[0];
    port.on('message', (event) => {
      console.log("reached")
      app.relaunch({ args: process.argv.slice(1).concat(['--relaunch']) })
      app.exit(0)
    })

    port.start()
  })

  win.loadFile('dist/angular-form-builder/index.html')
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