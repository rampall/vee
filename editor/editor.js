
/**
 * This is the main editor file
 */

const path = require('path');
const Mousetrap = require('mousetrap');
const {ipcRenderer, remote} = require('electron'); 
// Set a global variable for vee, editor
let vee, editor, view;
/**
 * Memory of the editor will hold the closed files.
 */
const closedTabs = []; 

// A simple compose function to compose an array of functions
const compose = (...fs) => (x) => fs.reduce((acc, f) => f(acc), x);
 /**
  * This function is called when monaco editor is loaded by the AMDRequire.
  */
const editorLoaded = (e) => {
    vee = e;
    initEditor();
}

/**
 * Creates the editor in the #editor div
 */
const initEditor = () => {
    vee.editor.defineTheme('vee', require('./theme'));
    vee.editor.setTheme('vee');
    
    editor = vee.editor.create(document.getElementById('editor'), {
        minimap: {
            enabled: false // I really hate the minimap and never use this
        },
        contextmenu: false, // Not a fan of right click while coding
        fontFamily: "Hack, monospace", // looks like a decent font
        fontSize: 12,
        automaticLayout: true, //for adjusting the editor to the container
        scrollbar:{
            useShadows: false,
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8
        },
        value: ""
    });
    //load the view js
    view = require('./view')();
    //make the header div visible after load
    document.getElementById('header').style.visibility = 'visible';

    // for setting tab space
    // editor.model.updateOptions({ tabSize: 2 });

    //focus the editor on initial load
    editor.focus();

    // Push the first model to memory
    compose(pushModelToMemory, setSelected)(editor.model);

    // First time loaded model
    editor.model.onDidChangeContent(modelDidChangeContent);

    editor.onDidChangeCursorPosition(() => {
        const {lineNumber, column} = editor.getPosition();
        view.lineNumber = lineNumber;
        view.column = column;
    });


    // Registering all the necessary key binding
    editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_O], openFileInEditor);
    editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_S], saveFileInEditor);
    editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_N], createNewFile);
    editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_W], compose(disposeCurrentModel, setNextModel));

    editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyMod.Shift | vee.KeyCode.KEY_T], prevOpenedFile);
    editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_T], nextOpenedFile);
    Mousetrap.bind(['command+t', 'ctrl+t'], nextOpenedFile);
    editor.addCommand(vee.KeyCode.Escape, hideOpenedFiles);
    Mousetrap.bind(['esc'], hideOpenedFiles);

    // Disable the refresh when the focus is in editor
    editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_R], () => false);
    editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyMod.Shift | vee.KeyCode.KEY_R], () => false);
    // // Disable the refresh when the focus is not in editor
    Mousetrap.bind(['command+r', 'ctrl+k', 'command+shift+r', 'ctrl+shift+k'], () => false);
}
const clearEditor = (m) => {
    //clear the editor before attaching any model
    document.getElementById('editor').innerHTML = ''; 
    return m; // for easy composing
}
const setEditorPosition = (model) => {
    const file = view.getFileById(model.id);
    editor.focus();
    editor.setPosition(file.position);
    return model;
}
const createNewFile = () => {
    compose(createModel, clearEditor, attachModel, pushModelToMemory, setEditorPosition, setSelected)({data: ''});
}

/**
 * Creates a model
 * - sets a listener for content change
 * returns a model
 */
const createModel = (file) => {
    // create the model from the received file.
    const model = vee.editor.createModel(
        file.data ? file.data : '', 
        file.language ? file.language : undefined, 
        file.path ? vee.Uri.parse(file.path) : undefined
    );
    model.onDidChangeContent(modelDidChangeContent);
    return model;
}
const attachModel = (model) => {
    // attach the model to the editor
    editor._attachModel(model);
    return model;
}
const loadModel = (model) => {
    // maintain the position in memory
    const currentModelId = editor.model.id;
    view.getFileById(currentModelId).position = editor.getPosition();

    if(currentModelId != model.id)
    compose(clearEditor, attachModel, setEditorPosition, setSelected)(model);
}
const disposeCurrentModel = () => {
    const currentModelId = editor.model.id;
    const modelIndex = view.getIndexById(currentModelId);
    view.files.splice(modelIndex, 1);
    editor.model.dispose();
    return modelIndex;
}
const setNextModel = (prevIndex) => {
    if(view.files.length > 0){
        let nextIndex = prevIndex - 1;
        nextIndex = nextIndex < 0 ? 0 : nextIndex;
        const nextModel = view.files[nextIndex].model;
        compose(clearEditor, attachModel, setEditorPosition, setSelected)(nextModel);
    } else{
        //create an empty model and assign it
        createNewFile();
    }
}



const pushModelToMemory  = (model) => {
    const file = {
        id: model.id, 
        path: model._associatedResource.scheme === 'inmemory' ? undefined : model._associatedResource.fsPath,
        isSaved: model._associatedResource.scheme === 'inmemory' ? false : true,
        selected: true,
        position: (new vee.Position(1, 1)),
        model: model
    };
    view.files.push(file);
    return model;
}
const setSelected = (model) => {
    view.files.forEach(f => {
        if(f.id == model.id)
            f.selected = true;
        else
            f.selected = false;
    });
    return model;
}

const saveFileInEditor = () => {
    const file = view.getFileById(editor.model.id);
    if(!file.path){
        const filePath = remote.dialog.showSaveDialog();
        if(!filePath) return;
        file.model._associatedResource = vee.Uri.parse(filePath);
        file.path = filePath;
    }
    saveFile({
        modelId: file.id, // for updating the model
        path: file.path,
        data: editor.getValue()
    });

    return false;
}

const saveFile = (payload) => {
    //save file synchronously to avoid race condtion
    const response = ipcRenderer.sendSync('save-file', payload);
    if(response.error){
        console.error(response.error);
        remote.dialog.showMessageBox({
            title: "Error while saving the file",
            message: "Error while saving the file"
        });
    }else{
        const file = view.getFileById(response.id);
        vee.editor.setModelLanguage(file.model, response.language); // set the language of the save file
        editor.setValue(response.data);
        file.isSaved = true; // mark the file as saved
    }
}
const nextOpenedFile = () => {
    document.querySelector('header #select').style.display = 'block';
    // toggle across the opened file
    const currentIndex = view.getIndexById(editor.model.id);
    let nextIndex = currentIndex + 1;
    if(nextIndex >= view.files.length)
    nextIndex = 0;

    loadModel(view.files[nextIndex].model);
}
const prevOpenedFile = () => {
    document.querySelector('header #select').style.display = 'block';
    // toggle across the opened file
    const currentIndex = view.getIndexById(editor.model.id);
    let prevIndex = currentIndex - 1;
    if(prevIndex < 0)
    prevIndex = view.files.length - 1;

    loadModel(view.files[prevIndex].model);
}

const hideOpenedFiles = () => {
    document.querySelector('header #select').style.display = 'none';
}
const modelDidChangeContent = () => {
    view.getFileById(editor.model.id).isSaved = false;
}
const openFileInEditor = (e) => {
    ipcRenderer.send('open-file');
    return false;
}
ipcRenderer.on('load-file', (event, file) => {
    compose(createModel, clearEditor, attachModel, pushModelToMemory, setSelected, setEditorPosition)(file);
});

require('monaco-loader')().then(editorLoaded);

// https://github.com/Binaryify/OneDark-Pro/blob/master/themes/OneDark-Pro-vivid.json
// https://gist.github.com/developit/a0430c500f5559b715c2dddf9c40948d