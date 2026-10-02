// Exposes a tiny Steam bridge to the game page (src/engine/achievements.js looks for window.steam).
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('steam', {
  activateAchievement: (name) => ipcRenderer.invoke('steam:activate', name),
  isActivated: (name) => ipcRenderer.invoke('steam:isActivated', name),
});
