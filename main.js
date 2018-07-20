const {app, BrowserWindow, ipcMain, dialog} = require('electron');
const fs = require('fs');
const path = require('path');
let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({width: 780, height: 720, titleBarStyle: 'hidden'});
    mainWindow.loadFile(path.join(__dirname,'editor/index.html'));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// On Windows, you have to parse process.argv (in the main process) to get the filepath.
app.on('open-file', function (event) {
    console.log(event);
});


/**
 * Called when CmdCtrl+O is pressed from the editor
 */
ipcMain.on('open-file', (event) => {
    const selectedFiles = dialog.showOpenDialog({properties: ['openFile', 'multiSelections']});
    selectedFiles.forEach(f => {
        const fileObject = {
            path:f, 
            ext: extToLang[path.extname(f)],
            data: fs.readFileSync(f).toString()
        };

        event.sender.send('load-file', fileObject);
    });
    console.log('Open a file');
});


/**
 * This Object has a mapping of the extension to language for loading the editor
 */

const extToLang = {
    '.js': 'javascript',
    '.css': 'css',
    '.html': 'html'
}