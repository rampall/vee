const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
let mainWindow, initialLoadFile;

function createWindow() {
	mainWindow = new BrowserWindow({ width: 800, height: 720, titleBarStyle: 'hidden' });
	mainWindow.loadFile(path.join(__dirname, 'editor/index.html'));

	// Open the DevTools.
	// if(process.env.NODE_ENV != 'production')
	// mainWindow.webContents.openDevTools();

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function() {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});

// On Windows, you have to parse process.argv in the main process) to get the filepath.
app.on('open-file', function(event, fsPath) {
	const fileObject = {
		path: fsPath,
		language: extToLang[path.extname(fsPath)],
		data: fs.readFileSync(fsPath).toString()
	};
	if (mainWindow) {
		mainWindow.webContents.send('load-file', fileObject);
	} else {
		initialLoadFile = fileObject;
	}
	event.preventDefault();
});

/**
 * Called when CmdCtrl+O is pressed from the editor
 */
ipcMain.on('open-file', event => {
	const selectedFiles = dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] });
	if (selectedFiles) {
		selectedFiles.forEach(f => {
			const fileObject = {
				path: f,
				language: extToLang[path.extname(f)],
				data: fs.readFileSync(f).toString()
			};

			event.sender.send('load-file', fileObject);
		});
	}
});

ipcMain.on('save-file', (event, payload) => {
	try {
		fs.writeFileSync(payload.path, payload.data, { flag: 'w' });
		event.returnValue = {
			id: payload.modelId,
			language: extToLang[path.extname(payload.path)]
		};
	} catch (err) {
		event.returnValue = { error: err };
	}
});

ipcMain.on('format-file', (event, payload) => {
	try {
		const formattedData = prettier.format(payload.data, prettierConfig);
		event.returnValue = {data: formattedData};
	} catch (err) {
		event.returnValue = {error: err};
	}
});

/**
 * Client sends a message once the editor is ready
 */
ipcMain.on('editor-loaded', event => {
	if (initialLoadFile) mainWindow.webContents.send('load-file', initialLoadFile);
});

/**
 * This Object has a mapping of the extension to language for loading the editor
 */

const extToLang = {
	'.js': 'javascript',
	'.css': 'css',
	'.html': 'html',
	'.md': 'markdown',
	'.xml': 'xml',
	'.json': 'json',
	'.txt': 'plaintext',
	'.scss': 'scss',
	'.sql': 'sql',
	'.ts': 'typescript',
	'.yaml': 'yaml'
};

// Prettier configuration
const prettierConfig = {
	printWidth: 100,
	tabWidth: 4,
	useTabs: true,
	singleQuote: true
};