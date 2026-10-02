// Desktop wrapper for Steam builds.
// Install once:  npm i -D electron steamworks.js
// Run:           npx electron electron/main.js
// Put your Steam App ID in steam_appid.txt next to the executable (480 = Spacewar test app).
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

// Always use the graphics chip, even on machines Chromium would normally blocklist,
// and prefer the dedicated GPU on dual-graphics laptops.
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('enable-gpu-rasterization');
app.commandLine.appendSwitch('enable-zero-copy');
app.commandLine.appendSwitch('force_high_performance_gpu');

let steam = null;
function initSteam() {
  try {
    const appIdFile = path.join(__dirname, '..', 'steam_appid.txt');
    const appId = fs.existsSync(appIdFile) ? parseInt(fs.readFileSync(appIdFile, 'utf8'), 10) : 480;
    steam = require('steamworks.js').init(appId);
    console.log('[steam] initialised for', steam.localplayer.getName());
  } catch (e) {
    console.log('[steam] not available — running without Steam:', e.message);
  }
}

ipcMain.handle('steam:activate', (_e, name) => {
  if (!steam) return false;
  try { return steam.achievement.activate(name); } catch (e) { return false; }
});
ipcMain.handle('steam:isActivated', (_e, name) => {
  if (!steam) return false;
  try { return steam.achievement.isActivated(name); } catch (e) { return false; }
});

function createWindow() {
  const win = new BrowserWindow({
    width: 1600, height: 900, backgroundColor: '#0c0b10', autoHideMenuBar: true,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, backgroundThrottling: false },
  });
  win.loadFile(path.join(__dirname, '..', 'index.html'));
}

app.whenReady().then(() => { initSteam(); createWindow(); });
app.on('window-all-closed', () => app.quit());
// steamworks.js needs this for the overlay
try { require('steamworks.js').electronEnableSteamOverlay(); } catch (e) { /* not installed */ }
