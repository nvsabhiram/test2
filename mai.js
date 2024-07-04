const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')  // Preload script (optional)
    }
  });

  win.loadFile('public/index.html');

  // Optional: Open dev tools in development mode
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.activate = () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
};
