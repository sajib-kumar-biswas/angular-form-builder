const { contextBridge, ipcRenderer } = require('electron')

ipcRenderer.on('save-file', () => {
    console.log(window.localStorage.getItem('header'))
})