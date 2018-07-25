const { loadWASM } = require('onigasm'); // peer dependency of 'monaco-textmate'
const { Registry } = require('monaco-textmate'); // peer dependency
const { wireTmGrammars } = require('./set-grammars');
const fs = require('fs');
const path = require('path');

/* eslint-disable */
const tsGrammar = fs.readFileSync(path.join(__dirname,'tmGrammars/TypeScript.tmLanguage.json')).toString();
const jsGrammar = fs.readFileSync(path.join(__dirname,'tmGrammars/JavaScript.tmLanguage.json')).toString();
// const tsGrammar = require('./tmGrammars/TypeScriptReact.tmLanguage');
/* eslint-enable */

let wasmLoaded = false;

async function liftOff(monaco) {
  if (!wasmLoaded) {
    // eslint-disable-next-line global-require
    await loadWASM('../node_modules/onigasm/lib/onigasm.wasm'); // See https://www.npmjs.com/package/onigasm#light-it-up
    wasmLoaded = true;
  }

  const registry = new Registry({
    getGrammarDefinition: async scopeName => {
      console.log(scopeName);
      if (scopeName === 'source.js') {
        return {
          format: 'json',
          content: jsGrammar,
        };
      }else if (scopeName === 'source.ts') {
        return {
          format: 'json',
          content: tsGrammar,
        };
      }

      return {
        format: 'json',
        content: jsGrammar,
      };
    },
  });

  // map of monaco "language id's" to TextMate scopeNames
  const grammars = new Map();
  grammars.set('typescript', 'source.ts');
  grammars.set('javascript', 'source.js');

  await wireTmGrammars(monaco, registry, grammars);
}

module.exports = {liftOff};
