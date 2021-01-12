const { app, BrowserWindow } = require('electron')
const client = require('discord-rich-presence')('798550732411502612');


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true
    }
  })

  client.updatePresence({
    details: `🍂 Bloomint is a`,
    state: `unique FOSS game!`,
    largeImageKey: 'large',
    smallImageKey: 'small',
    instance: true,
  });

  win.loadFile('src/index.html')
}


app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  client.disconnect();
  app.quit()
  return 0;
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})