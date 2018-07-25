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

const monacoTextmate = require('monaco-textmate');

class TokenizerState {
  constructor(_ruleStack) {
    this._ruleStack = _ruleStack;
  }
  get ruleStack() {
    return this._ruleStack;
  }
  clone() {
    return new TokenizerState(this._ruleStack);
  }
  equals(other) {
    if (
      !other ||
      !(other instanceof TokenizerState) ||
      other !== this ||
      other._ruleStack !== this._ruleStack
    ) {
      return false;
    }
    return true;
  }
}

/**
 * Wires up monaco-editor with monaco-textmate
 *
 * @param monaco monaco namespace this operation should apply to (usually the `monaco` global unless you have some other setup)
 * @param registry TmGrammar `Registry` this wiring should rely on to provide the grammars
 * @param languages `Map` of language ids (string) to TM names (string)
 */
function wireTmGrammars(monaco, registry, languages) {
  return Promise.all(
    Array.from(languages.keys()).map(async languageId => {
      try {
        const grammar = await registry.loadGrammar(languages.get(languageId));
        monaco.languages.setTokensProvider(languageId, {
          getInitialState: () => new TokenizerState(monacoTextmate.INITIAL),
          tokenize: (line, state) => {
            const res = grammar.tokenizeLine(line, state.ruleStack);

            return {
              endState: new TokenizerState(res.ruleStack),
              tokens: res.tokens.map(token => ({
                ...token,
                // TODO: At the moment, monaco-editor doesn't seem to accept array of scopes
                scopes: token.scopes[token.scopes.length - 1],
              })),
            };
          },
        });
      } catch (e) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(e); // eslint-disable-line
        }
      }
    })
  );
}

module.exports = {wireTmGrammars};