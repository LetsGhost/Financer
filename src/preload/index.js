import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Extend the electronAPI to include the send method
const extendedAPI = {
  ...electronAPI,
  send: (channel, ...args) => ipcRenderer.send(channel, ...args)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', extendedAPI)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = extendedAPI
}
