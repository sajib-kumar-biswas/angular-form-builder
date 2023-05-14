const { contextBridge, ipcRenderer, app } = require('electron')

ipcRenderer.on('save-file', () => {
    const beforeUnloadEvent = new Event('beforeunload');
    window.dispatchEvent(beforeUnloadEvent);
    let data = {
        header: JSON.parse(localStorage.getItem('header')),
        questions: JSON.parse(localStorage.getItem('questions'))
    }

    data = JSON.stringify(data)

    ipcRenderer.invoke('save-data', [data])
        .then(result => console.log(result))
})

ipcRenderer.on('receive-data', (event, data) => {
    //console.log(data);
    data = JSON.parse(data);
    localStorage.setItem('header', JSON.stringify(data.header));
    localStorage.setItem('questions', JSON.stringify(data.questions));
    const {port1, port2} = new MessageChannel();
    port2.postMessage("relaunch");
    ipcRenderer.postMessage('port', null, [port1]);
})

console.log("skb")