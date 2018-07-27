/**
 * This is the main editor file
 *
 * vee editor uses monaco editor for code editing.
 * It creates just one instance of the editor and manages all the files as models.
 *
 * For code highlighting it mostly depends on the Monarch tokenisers which is already part of monaco editor.
 * But for Javascript (80% of the time I code in .js files) alone I use TextMates tokenization as it is much better than the Monarch.
 *
 */

/**
 * A common function to require files from this file.
 */
const path = require('path');
const requirePath = p => require(path.join(__dirname, '../' + p));

const Mousetrap = require('mousetrap');
const { ipcRenderer, remote } = require('electron');
const { setJavascriptTokenizer } = requirePath('grammars/configure-tokenizer');

/**
 * Set a global variable for vee, editor
 *
 * vee - just a reference of the monaco object itself.
 * editor - the instance of the crated editor. Only one editor is created throughout the lifecycle of the app.
 * view -  is the reference of the vue.js app object,
 */
let vee, editor, view;

/**
 * contents - indexed object for storing & maintaining the original contents from the file system
 * this is mainly used to check the state (saved || unsaved) of the opened file
 */
let contents = {};

/**
 * Note: there are 3 variables where we hold the state of the files
 * 1. view.files -  used to populate the UI using vue.js
 * 2. editor.models - monaco editor's built in model array
 * 3. contents - holds the contents of the file in the file system
 *
 * All the 3 are indexed by model.id
 */

/**
 * Memory of the editor will hold the closed files.
 */
const closedTabs = [];

// A simple compose function to compose an array of functions
const compose = (...fs) => x => fs.reduce((acc, f) => f(acc), x);

/**
 * This function is called when monaco editor has finished loaded by the AMDRequire.
 */
const editorLoaded = e => {
	vee = e;
	initEditor();
};

/**
 * Creates the editor in the #editor div
 */
const initEditor = () => {
	/**
	 * Set the theme before initializing the editor
	 */
	vee.editor.defineTheme('vee', requirePath('theme'));
	vee.editor.setTheme('vee');

	// initiate the editor with the necessary configuration
	editor = vee.editor.create(document.getElementById('editor'), {
		minimap: {
			enabled: false // I really hate the minimap and never use this
		},
		contextmenu: false, // Not a fan of right click while coding
		fontFamily: 'Hack, monospace', // looks like a decent font
		fontSize: 13,
		folding: true,
		foldingStrategy: 'indentation',
		showFoldingControls: 'always',
		automaticLayout: true, //for adjusting the editor to the container
		scrollbar: {
			useShadows: false,
			verticalScrollbarSize: 8,
			horizontalScrollbarSize: 8
		},
		language: 'javascript' // setting as js so that the setJavascriptTokenizer() can be initiated
	});
	//load the app view using view js
	view = requirePath('view/view.js')();

	//make the header div visible after load
	document.getElementById('header').style.visibility = 'visible';

	// for setting tab space. default to 4
	// editor.model.updateOptions({ tabSize: 2 });

	//focus the editor on initial load
	editor.focus();

	editor.model.dispose(); // Dispose the editor created model as it is causing unnecessary problems

	editor.onDidChangeCursorPosition(() => {
		const { lineNumber, column } = editor.getPosition();
		view.lineNumber = lineNumber;
		view.column = column;
	});

	// initiate the listeners
	requirePath('listeners');

	// send a message to main thread to intimate that the editor has been loaded
	ipcRenderer.send('editor-loaded');

	// add the JS tokenizer
	// https://github.com/Microsoft/monaco-editor/issues/884#issuecomment-391706345
	monaco.languages.typescript.getJavaScriptWorker().then(() => setJavascriptTokenizer(vee));
};

/**
 * Marks the file as unsaved when anything in the file is changed
 * Checks the content of the file each time
 */
const modelDidChangeContent = () => {
	const thisFile = view.getFileById(editor.model.id);
	thisFile.state.isSaved = contents[editor.model.id] === editor.getValue();
};

/**
 * Creates a model and returns the model object
 */
const createModel = file => {
	// create the model from the received file.
	const model = vee.editor.createModel(
		file.data ? file.data : '',
		file.language ? file.language : undefined,
		file.fsPath ? vee.Uri.parse(file.fsPath) : undefined
	);
	model.onDidChangeContent(modelDidChangeContent);
	return model;
};
/**
 * get model by id from editor object
 */
const getModel = id => vee.editor.getModels().find(m => m.id == id);
/**
 * Clears the editor and sets the given model in the editor
 */
const setModel = model => {
	editor.setModel(null); //clear the editor before attaching any model
	editor.setModel(model);
	return model;
};
/**
 * We only update the URI of the model
 */
const updateModel = (model, fsPath) => {
	model.uri = vee.Uri.parse(fsPath);
	return model;
};

/**
 * gets the current state of the model in the editor and update it in the view.files
 */
const updateModelState = m => {
	if (editor.model) {
		// get the file from view.files
		const currentFile = view.getFileById(editor.model.id);
		currentFile.state.position = editor.getPosition();
		currentFile.state.scroll = { left: editor.getScrollLeft(), top: editor.getScrollTop() };
	}
	return m; // get & return the model. for composing purpose
};
/**
 * Get the state from view.files and set it to the editor
 */
const setEditorState = model => {
	const currentFile = view.getFileById(model.id);
	editor.focus();
	editor.setPosition(currentFile.state.position);
	editor.setScrollLeft(currentFile.state.scroll.left);
	editor.setScrollTop(currentFile.state.scroll.top);
	return model;
};

/**
 * Add file to view.files
 * gets the details from model object
 */
const createFile = model => {
	const file = {
		id: model.id,
		fsPath: model.uri.scheme === 'inmemory' ? undefined : model.uri.fsPath,
		selected: true,
		state: {
			position: new vee.Position(1, 1),
			scroll: { left: 0, top: 0 },
			isSaved: model.uri.scheme === 'inmemory' ? false : true
		}
	};
	view.files.push(file);
	return model;
};
/**
 * Delete a file from the view.files array
 */
const deleteFile = model => {
	const fileIndex = view.getIndexById(model.id);
	view.files.splice(fileIndex, 1);
	return;
};
/**
 * Make the model selected in the sidebar
 */
const selectFile = model => {
	view.files.forEach(f => {
		if (f.id == model.id) f.selected = true;
		else f.selected = false;
	});
	return model;
};
/**
 * check if the file with the same path already loaded
 */
const checkFile = fsPath => {
	return view.files.find(f => f.fsPath == fsPath);
};

/**
 * Sets the content of the file in the content object
 */
const setContent = (id, content) => {
	contents[id] = content;
};
/**
 * delete a content from the content object
 */
const deleteContent = id => {
	delete contents[id];
};

/**
 * Loads a file in the editor
 * {
 *   fsPath: 'path of the file in the file system',
 *   language: 'inferred language based on extension of the file.',
 *   data: 'contents of the file'
 * }
 */
const loadFile = (event, payload) => {
	const thisFile = checkFile(payload.fsPath);
	const modelId = payload.id || thisFile ? thisFile.id : false;
	/**
	 * If this file already exists set the model to the editor
	 * else create & set the model
	 */
	let thisModel;
	if (modelId) {
		thisModel = compose(
			updateModelState,
			setModel,
			setEditorState,
			selectFile
		)(getModel(modelId));
	} else {
		thisModel = compose(
			updateModelState,
			createModel,
			setModel,
			createFile,
			setEditorState,
			selectFile
		)(payload);
	}
	setContent(thisModel.id, payload.data);
};

/**
 * Opens a file from file-syetem
 * Shows the open dialog to choose file(s).
 */
const open = () => {
	//send a ipc message to main thread
	ipcRenderer.send('open-file');
	return false;
};
/**
 * Create a new file
 */
const createNew = () => {
	compose(
		updateModelState,
		createModel,
		setModel,
		createFile,
		setEditorState,
		selectFile
	)({ data: '' });
};
/**
 * Saves the current file to the file system
 */
const save = () => {
	const savedFile = ipcRenderer.sendSync('save-file', {
		id: editor.model.id,
		fsPath: view.getFileById(editor.model.id).fsPath,
		data: editor.getValue()
	});
	if (savedFile) {
		if (savedFile.error) {
			console.error(savedFile.error);
			remote.dialog.showErrorBox(fileData.errorMsg, fileData.errorMsg);
		} else {
			const file = view.getFileById(savedFile.id);
			console.log(file);
			vee.editor.setModelLanguage(editor.model, savedFile.language); // set the language of the save file
			file.state.isSaved = true; // mark the file as saved
			contents[savedFile.id] = savedFile.data; //update the contents object with new contents
		}
	}
};
/**
 * Closes the current file in the editor
 */
const close = () => {
	//a function to perform the actual close
	const performClose = () => {
		const modelIndex = view.getIndexById(editor.model.id); //get the model index of files

		deleteFile(editor.model);
		deleteContent(editor.model.id);
		editor.model.dispose();

		// load the next available model
		if (view.files.length > 0) {
			let nextIndex = modelIndex - 1;
			nextIndex = nextIndex < 0 ? 0 : nextIndex;
			// proceed only if nextModel index is valid
			if (nextIndex >= 0) {
				const nextModel = getModel(view.files[nextIndex].id);
				compose(
					updateModelState,
					setModel,
					setEditorState,
					selectFile
				)(nextModel);
				update(view.getFileById(nextModel.id)); //update needs to be called after each setModel been called;
			}
		}
	};

	if (view.getFileById(editor.model.id).state.isSaved == false) {
		remote.dialog.showMessageBox(
			{
				message: 'This file is not yet saved',
				buttons: ['Save', 'Cancel', "Don't Save"]
			},
			response => {
				switch (response) {
					case 0:
						save();
						performClose();
						break;
					case 2:
						performClose();
						break;
					default:
						break;
				}
				console.log(response);
			}
		);
	} else {
		performClose();
	}
};
/**
 * toggles the file in forward/backward fashion
 */
const toggle = isReverse => {
	const fileBar = document.querySelector('header #select');
	if (fileBar.style.display == 'block') {
		// toggle across the opened file
		const currentIndex = view.getIndexById(editor.model.id);
		let nextIndex;
		if (isReverse === true) {
			nextIndex = currentIndex - 1;
			if (nextIndex < 0) nextIndex = view.files.length - 1;
		} else {
			nextIndex = currentIndex + 1;
			if (nextIndex >= view.files.length) nextIndex = 0;
		}

		compose(
			updateModelState,
			setModel,
			setEditorState,
			selectFile
		)(getModel(view.files[nextIndex].id));
		update(view.files[nextIndex]); //update needs to be called after each setModel been called;
	} else {
		fileBar.style.display = 'block';
	}
};
const toggleReverse = () => toggle(true);
/**
 * Sends a message to main thread to get the file contents
 * The file contents are updated
 */
const update = ({ id, fsPath }) => {
	if (fsPath) {
		const fileData = ipcRenderer.sendSync('get-file-contents', { id, fsPath });
		if (fileData.error) {
			console.error(fileData.error);
			remote.dialog.showErrorBox(fileData.errorMsg, fileData.errorMsg);
		} else {
			setContent(fileData.id, fileData.data);
			modelDidChangeContent();
		}
	}
};

const format = () => {
	const response = ipcRenderer.sendSync('format-file', {
		data: editor.getValue()
	});
	if (response.error) {
		console.error(response.error);
		const errorPosition = response.error.loc.start;
		remote.dialog.showErrorBox(
			response.errorMsg,
			response.errorMsg +
				'\nline number: ' +
				errorPosition.line +
				', column: ' +
				errorPosition.column
		);
		editor.setPosition(new vee.Position(errorPosition.line, errorPosition.column));
	} else {
		editor.setValue(response.data);
	}
};

//Hide the sidebar
const hideSideBar = () => {
	document.querySelector('header #select').style.display = 'none';
	return true;
};

/**
 * Using monaco-loader module to load the editor
 * Reason: monaco editor uses a built in loader function. Normal require wont work
 */
require('monaco-loader')().then(editorLoaded);
