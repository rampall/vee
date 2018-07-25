/**
 * This file has all the event listeners used by this app
 * this included key bindings,  ipc Messages etc
 */

//Opening a file
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_O], openFileInEditor);
Mousetrap.bind(['command+o', 'ctrl+o'], openFileInEditor);

//saving a file
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_S], saveFileInEditor);
Mousetrap.bind(['command+s', 'ctrl+s'], saveFileInEditor);

//Create a new file
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_N], createNewFile);
Mousetrap.bind(['command+n', 'ctrl+n'], createNewFile);

// close a file
editor.addCommand(
	[vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_W],
	compose(
		disposeCurrentModel,
		setNextModel
	)
);
Mousetrap.bind(
	['command+w', 'ctrl+w'],
	compose(
		disposeCurrentModel,
		setNextModel
	)
);

//Format the current file in the editor
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_P], formatFile); // uses prettier to format the file
Mousetrap.bind(['command+p', 'ctrl+p'], formatFile);

editor.addCommand([vee.KeyMod.WinCtrl | vee.KeyMod.Shift | vee.KeyCode.Tab], prevOpenedFile);
Mousetrap.bind(['ctrl+shift+tab'], prevOpenedFile);

editor.addCommand([vee.KeyMod.WinCtrl | vee.KeyCode.Tab], nextOpenedFile);
Mousetrap.bind(['ctrl+tab'], nextOpenedFile);
// editor.addCommand(vee.KeyCode.Escape, hideOpenedFiles);
Mousetrap.bind(['esc'], hideOpenedFiles);
editor.onKeyDown(e => e.code == 'Escape' && hideOpenedFiles());

// Disable the refresh when the focus is in editor
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_R], () => false);
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyMod.Shift | vee.KeyCode.KEY_R], () => false);
// // Disable the refresh when the focus is not in editor
Mousetrap.bind(['command+r', 'command+shift+r'], () => false);

ipcRenderer.send('editor-loaded');

document.addEventListener('drop', function(e) {
	e.preventDefault();
	e.stopPropagation();

	for (let f of e.dataTransfer.files) {
		console.log('File(s) you dragged here: ', f.path);
	}
});
document.addEventListener('dragover', function(e) {
	e.preventDefault();
	e.stopPropagation();
});
