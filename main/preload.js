const { contextBridge, ipcRenderer } = require('electron');

// Udostępnienie funkcji do renderer
contextBridge.exposeInMainWorld('ipcRenderer', {
  invoke: (channel, data) => ipcRenderer.invoke(channel, data)
});
