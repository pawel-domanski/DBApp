const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true, // Dla bezpieczeństwa
    },
  });

  mainWindow.loadURL('http://localhost:3000'); // Ładuje aplikację Next.js

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// IPC do odczytu i zapisu klucza API
ipcMain.handle('get-api-key', () => {
  const configPath = path.join(app.getPath('userData'), 'config.json');
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    return config.OpenAI_API;
  }
  return '';
});

ipcMain.handle('set-api-key', (event, apiKey) => {
  const configPath = path.join(app.getPath('userData'), 'config.json');
  const config = { OpenAI_API: apiKey };
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');
});

app.on('ready', createWindow);
