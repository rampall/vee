/**
 * This file has all the event listeners used by this app
 * this included key bindings,  ipc Messages etc
 */

/**
 * Opening a file
 * key bindings
 * ⌘+o || Ctrl+o
 */
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_O], open);
Mousetrap.bind(['command+o', 'ctrl+o'], open);

// listen for load file message from main thread
ipcRenderer.on('load-file', loadFile);

/**
 * Create a new file
 * key bindings
 * ⌘+n || Ctrl+n
 */
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_N], createNew);
Mousetrap.bind(['command+n', 'ctrl+n'], createNew);

/**
 * Save the current file in the editor
 * key bindings
 * ⌘+s || Ctrl+s
 */
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_S], save);
Mousetrap.bind(['command+s', 'ctrl+s'], save);

/**
 * Close the current file in the editor
 * key bindings
 * ⌘+w || Ctrl+w
 */
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_W], close);
Mousetrap.bind(['command+w', 'ctrl+w'], close);

/**
 * Format the current file in the editor
 * uses prettier to format the file
 * key bindings
 * ⌘+p || Ctrl+p
 */
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_P], format);
Mousetrap.bind(['command+p', 'ctrl+p'], format);

/**
 * Moves to the next file
 * key bindings
 * Ctrl+Tab
 */
editor.addCommand([vee.KeyMod.WinCtrl | vee.KeyCode.Tab], toggle);
Mousetrap.bind(['ctrl+tab'], toggle);

/**
 * Moves to the previous file
 * key bindings
 * Shift+Ctrl+Tab
 */
editor.addCommand([vee.KeyMod.WinCtrl | vee.KeyMod.Shift | vee.KeyCode.Tab], toggleReverse);
Mousetrap.bind(['ctrl+shift+tab'], toggleReverse);

/**
 * Hides the widgets
 * find & replace | sidebar
 */
Mousetrap.bind(['esc'], hideSideBar);
editor.onKeyDown(e => e.code == 'Escape' && hideSideBar());

/**
 * Read file path from the drop event & load the files
 */
document.addEventListener('drop', function(e) {
	e.preventDefault();
	e.stopPropagation();

	for (let f of e.dataTransfer.files) {
		ipcRenderer.send('load-file', f.path);
	}
});
document.addEventListener('dragover', function(e) {
	e.preventDefault();
	e.stopPropagation();
});

// Disable the refresh when the focus is in editor
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_R], () => false);
editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyMod.Shift | vee.KeyCode.KEY_R], () => false);
// // Disable the refresh when the focus is not in editor
Mousetrap.bind(['command+r', 'command+shift+r'], () => false);
