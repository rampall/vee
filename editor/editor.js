
/**
 * This is the main editor file
 */

const path = require('path');
const Mousetrap = require('mousetrap');
const {ipcRenderer} = require('electron'); 
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
        language: "javascript",
        value: "/* Its a test code */\n\nfunction hello (){\n\tconst greet = \'Hello World!\';\n\tif(true){\n\t\tconsole.log(greet);\n\t}\n}\n\nhello();\n"
    });
    //load the view js
    view = require('./view')();
    //make the header div visible after load
    document.getElementById('header').style.visibility = 'visible';

    // Push the first model to memory
    pushModelToMemory(editor.model);

    //for setting tab space
    // editor.model.updateOptions({ tabSize: 2 });
    console.log(editor);
    console.log(vee.editor.getModels());
    // editor._standaloneKeybindingService.addDynamicKeybinding("-actions.find");

    // First time loaded model
    editor.model.onDidChangeContent(modelDidChangeContent);

    editor.onDidChangeCursorPosition(() => {
        const {lineNumber, column} = editor.getPosition();
        view.lineNumber = lineNumber;
        view.column = column;
    });

    editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_O], openFileInEditor);
    editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_S], saveFileInEditor);
    editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_T], showOpenedFiles);
    Mousetrap.bind(['command+t', 'ctrl+t'], showOpenedFiles);

    editor.addCommand([vee.KeyMod.CtrlCmd | vee.KeyCode.KEY_W], () => false);

    // // Disable the refresh when the focus is in editor
    // editor.addCommand([monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_R], () => false);
    // editor.addCommand([monaco.KeyMod.CtrlCmd | monaco.KeyCode.Shift | monaco.KeyCode.KEY_R], () => false);
    // // // Disable the refresh when the focus is not in editor
    // Mousetrap.bind(['command+r', 'ctrl+k', 'command+shift+r', 'ctrl+shift+k'], () => false);
}
const clearEditor = (m) => {
    //clear the editor before attaching any model
    document.getElementById('editor').innerHTML = ''; 
    return m; // for easy composing
}
const attachModel = (model) => {
    view.files[view.getIndexById(editor.model.id)].selected = false; // make selected = false for current model
    const newModelIndexInView = view.getIndexById(model.id);
    if(newModelIndexInView >= 0){
        view.files[newModelIndexInView].selected = false; // make selected = true for new model
        view.setSelected();
    }
    // attach the model to the editor
    editor._attachModel(model);
    return model;
}
const createModel = (file) => {
    // create the model from the received file.
    const model = vee.editor.createModel(
        file.data, 
        'javascript', 
        vee.Uri.parse(file.path)
    );
    model.onDidChangeContent(modelDidChangeContent);
    return model;
}
const modelDidChangeContent = () => {
    const modelIndex = view.files.findIndex(f => f.id  == editor.model.id);
    view.files[modelIndex].isSaved = false;
}
const pushModelToMemory  = ({id, uri}) => {
    const filepath = path.parse(uri.path);
    const file = {
        id, 
        uri,
        isSaved: uri.scheme === 'inmemory' ? false : true,
        selected: true,
        ...filepath
    };
    view.files.push(file);
    view.setSelected(); // everytime a new file is added to the memory we change the selected file.
}

const openFileInEditor = (e) => {
    ipcRenderer.send('open-file');
    return false;
}

const saveFileInEditor = () => {
    console.log();
    console.log('Save the file');
    return false;
}

const showOpenedFiles = () => {
    const ele = document.querySelector('header #select');
    ele.style.display = (ele.style.display === 'block' ? 'none' : 'block');
}

ipcRenderer.on('load-file', (event, file) => {
    compose(createModel, clearEditor, attachModel, pushModelToMemory)(file);
});
    // var newModel = monaco.editor.createModel(['function x() {',
    //         '\tconsole.log("Hello Earth!");',
    //         '}'
    //     ].join('\n'),
    //     'javascript',
    //     monaco.Uri.parse('/Users/vasanthv/Projects/tests/input.txt')
    // );
    // var newModel2 = monaco.editor.createModel('body{color:black;}',
    //     'css',
    //     monaco.Uri.parse('/Users/vasanthv/Projects/tests/input2.txt')
    // );
    // var editor = monaco.editor.create(document.getElementById('container'), {
    //     model: newModel,
    //     minimap: {
    //         enabled: false
    //     }
    // });
    

    
    // // var editor2 = monaco.editor.create(document.getElementById('container'), {
    // // 	value: [
    // // 		'function x() {',
    // // 		'\tconsole.log("Hello Earth!");',
    // // 		'}'
    // // 	].join('\n'),
    // // 	language: 'javascript'
    // // });
    // var markers = null;
    // // console.log(editor.model.dispose());
    
    // setTimeout(() => {
    //     console.log(editor.getPosition());
    // }, 5000);
    // // setTimeout(() => {
    // // 	markers = monaco.editor.getModelMarkers();
    // // 	document.getElementById('container').innerHTML = '';
    // // 	editor._attachModel(newModel2);
    // // }, 5000);
    // // setTimeout(() => {
    // // 	document.getElementById('container').innerHTML = '';
    // // 	editor._attachModel(newModel);
    // // 	monaco.editor.setModelMarkers(newModel, '', markers);
    // // 	console.log(monaco.editor.getModels());
    // // 	console.log(editor.model);
    // // 	console.log(monaco.editor.getModelMarkers());
    // // }, 10000);

// module.exports = {
//     editorLoaded
// }


require('monaco-loader')().then(editorLoaded);

// https://github.com/Binaryify/OneDark-Pro/blob/master/themes/OneDark-Pro-vivid.json
// https://gist.github.com/developit/a0430c500f5559b715c2dddf9c40948d