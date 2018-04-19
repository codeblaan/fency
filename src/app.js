const {
  app,
  BrowserWindow,
  Menu,
  session
} = require('electron')

const path = require('path')

const url = require('url')

const DEBUG = false

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    minWidth: 400,
    height: 640,
    minHeight: 400
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  if (DEBUG) mainWindow.webContents.openDevTools()
}

function createMenu() {
  Menu.setApplicationMenu(Menu.buildFromTemplate([{
    label: 'Fency',
    submenu: [
      { label: 'About Fency', selector: 'orderFrontStandardAboutPanel:' },
      { type: 'separator' },
      { label: 'Hide', accelerator: 'Command+H', selector: 'hide:' },
      { type: 'separator' },
      { label: 'Quit', accelerator: 'Command+Q', click: () => app.quit() }
    ]}, {
      label: 'File',
      submenu: [
        { label: 'Clear Session', click: session.defaultSession.clearStorageData([], () => {}) }
      ]
    }, {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
        { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
        { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' }
      ]}
  ]))
}

app.on('ready', () => {
  createWindow()
  createMenu()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
