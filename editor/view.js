
/**
 * This is the view file which uses the vue.js
 */
module.exports = () => {
    return new Vue({
        el: '#header',
        data: {
            lineNumber: 0,
            column: 0,
            selectedFile: null,
            files: []
        },
        methods: {
            setSelected: function () {
                const selectedFile = this.files.find(f => f.selected);
                this.selectedFile = selectedFile;
                return selectedFile;
            },
            getIndexById: function (id) {
                return this.files.findIndex(f => f.id == id);
            },
            getViewFile: function (file)  {
                return (file.isSaved ? '' : '*') + (file.uri.scheme === 'inmemory' ? "unsaved" : file.name+file.ext);
            },
            getViewDir: function (file)  {
                return file.uri.scheme === 'inmemory' ? "" : " - "+file.dir.split('/').reverse()[0];
            }
          }
    });    
};
