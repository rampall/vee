const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
let mainWindow;

/**
 * this variable holds the array of files that the app was trying to open before launching
 */
let initialLoadFile = [];

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
	'.yaml': 'yaml',
	'.sh': 'shell'
};

// Prettier configuration
const prettierConfig = {
	printWidth: 100,
	tabWidth: 4,
	useTabs: true,
	singleQuote: true
};

function createWindow() {
	mainWindow = new BrowserWindow({ width: 800, height: 720, titleBarStyle: 'hidden' });
	mainWindow.loadFile(path.join(__dirname, 'editor/view/index.html'));

	// Open the DevTools.
	// if(process.env.NODE_ENV != 'production')
	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', function() {
		mainWindow = null;
	});

	const menuTemplate = [
		{
			label: 'Edit',
			submenu: [
				{ role: 'cut' },
				{ role: 'copy' },
				{ role: 'paste' },
				{ type: 'separator' },
				{ role: 'selectall' }
			]
		}
	];
	if (process.platform === 'darwin') {
		menuTemplate.unshift({
			label: app.getName(),
			submenu: [{ role: 'quit' }]
		});
	}
	const menu = Menu.buildFromTemplate(menuTemplate);
	// Menu.setApplicationMenu(menu);
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
	const fileObject = loadFile(fsPath);
	if (mainWindow) {
		mainWindow.webContents.send('load-file', fileObject);
	} else {
		initialLoadFile.push(fileObject);
	}
	event.preventDefault();
});


/**
 * loads a file from the file system
 */
const loadFile = fsPath => {
	return {
		fsPath: fsPath,
		language: extToLang[path.extname(fsPath)],
		data: fs.readFileSync(fsPath).toString()
	};
};

/**
 * Called when CmdCtrl+O is pressed from the editor
 */
ipcMain.on('open-file', event => {
	const selectedFiles = dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] });
	if (selectedFiles) {
		selectedFiles.forEach(fsPath => event.sender.send('load-file', loadFile(fsPath)));
	}
});

/**
 * loads a file from file system
 */
ipcMain.on('load-file', (event, fsPath) => {
	event.sender.send('load-file', loadFile(fsPath));
});


/**
 * Saves a file
 * Shows the save dialog box if it is a new file
 */
ipcMain.on('save-file', (event, payload) => {
	const fsPath = payload.fsPath || dialog.showSaveDialog();
	// fsPath will be empty if user did not select any file
	if (!fsPath) event.returnValue = null;

	//else proceed to write the file
	try {
		fs.writeFileSync(payload.fsPath, payload.data);
		event.returnValue = {
			id: payload.id,
			language: extToLang[path.extname(payload.fsPath)],
			data: payload.data
		};
	} catch (err) {
		event.returnValue = { error: error, errorMsg: 'Error while saving the file' };
	}
});

/**
 * Formats a string using prettier
 */
ipcMain.on('format-file', (event, payload) => {
	try {
		const formattedData = prettier.format(payload.data, prettierConfig);
		event.returnValue = { data: formattedData };
	} catch (error) {
		event.returnValue = { error: error, errorMsg: 'Error while formatting the file' };
	}
});

/**
 * Gets the contents of the file for update (file-system sync) purpose
 */
ipcMain.on('get-file-contents', (event, { id, fsPath }) => {
	try {
		const fileObject = loadFile(fsPath);
		event.returnValue = { id, ...fileObject };
	} catch (error) {
		event.returnValue = { error: error, errorMsg: 'Unable to get file contents' };
	}
});

/**
 * Client sends a message once the editor is ready
 */
ipcMain.on('editor-loaded', event => {
	if (initialLoadFile.length > 0) {
		initialLoadFile.forEach(f => mainWindow.webContents.send('load-file', f));
		initialLoadFile = []; //reset the initialload file array
	}
});

