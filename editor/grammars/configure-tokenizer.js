/**
 * Some parts of this file is borrowed from https://github.com/CompuIves/codesandbox-client
 *
 * https://github.com/CompuIves/codesandbox-client/tree/master/packages/app/src/app/components/CodeEditor/Monaco/grammars
 */

/**
 * CodeSandbox. An online code editor tailored for web application development.
 * Copyright (C) 2018  Ives van Hoorne
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const { loadWASM } = require('onigasm'); // peer dependency of 'monaco-textmate'
const { Registry } = require('monaco-textmate'); // peer dependency
const { wireTmGrammars } = require('./set-grammars');
const fs = require('fs');
const path = require('path');

const getFileContents = fsPath => {
	return fs.readFileSync(path.join(__dirname, fsPath)).toString();
};

/* eslint-disable */
const tsGrammar = getFileContents('tmGrammars/TypeScript.tmLanguage.json');
const jsGrammar = getFileContents('tmGrammars/JavaScript.tmLanguage.json');
/* eslint-enable */

let wasmLoaded = false;

async function setJavascriptTokenizer(monaco) {
	if (!wasmLoaded) {
		// eslint-disable-next-line global-require
		await loadWASM('../../node_modules/onigasm/lib/onigasm.wasm'); // See https://www.npmjs.com/package/onigasm#light-it-up
		wasmLoaded = true;
	}

	const registry = new Registry({
		getGrammarDefinition: async scopeName => {
			if (scopeName === 'source.ts') {
				return {
					format: 'json',
					content: tsGrammar
				};
			}
			return {
				format: 'json',
				content: jsGrammar
			};
		}
	});

	// map of monaco "language id's" to TextMate scopeNames
	const grammars = new Map();
	grammars.set('typescript', 'source.ts');
	grammars.set('javascript', 'source.js');

	await wireTmGrammars(monaco, registry, grammars);
}

module.exports = { setJavascriptTokenizer };
