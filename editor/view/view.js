
/**
 * This is the view file which uses the vue.js
 */

const {parse} = require('path');
module.exports = () => {
    return new Vue({
        el: '#header',
        data: {
            lineNumber: 0,
            column: 0,
            files: []
        },
        methods: {
            getFileById: function (id) {
                return this.files.find(f => f.id == id);
            },
            getIndexById: function (id) {
                return this.files.findIndex(f => f.id == id);
            },
            getViewFile: function (file)  {
                if(file){
                    const filePath = file.path && parse(file.path);
                    return (file.isSaved ? '' : '*') + (filePath ? filePath.base : "new");
                }
            },
            getViewDir: function (file)  {
                if(file){
                    const filePath = file.path && parse(file.path);
                    return filePath ? " - "+filePath.dir.split('/').reverse()[0] : "";
                }
            },
            getSelected: function (){
                return this.files.find(f => f.selected == true);
            },
            fileClick: function (file) {
                loadModel(file.model);
            }
          }
    });    
};
