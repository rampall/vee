/**
 * This theme is based on the One Dark Theme for vscode by Mahmoud Ali
 * https://github.com/akamud/vscode-theme-onedark
 */

/**
 * The MIT License (MIT)
 * Copyright (c) 2015 Mahmoud Ali
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
module.exports = {
	name: 'vee',
	base: 'vs-dark',
	inherit: true,
	colors: {
		'badge.background': '#528bff',
		'badge.foreground': '#d7dae0',
		'button.background': '#4d78cc',
		'button.foreground': '#ffffff',
		'button.hoverBackground': '#6087cf',
		'diffEditor.insertedTextBackground': '#00809b33',
		'dropdown.background': '#353b45',
		'dropdown.border': '#181a1f',
		'editor.background': '#282c34',
		'editor.lineHighlightBackground': '#2c313a',
		'editor.selectionBackground': '#3e4451',
		'editorCursor.foreground': '#528bff',
		'editorGroup.background': '#21252b',
		'editorGroup.border': '#181a1f',
		'editorGroupHeader.tabsBackground': '#21252b',
		'editorHoverWidget.background': '#21252b',
		'editorHoverWidget.border': '#181a1f',
		'editorIndentGuide.background': '#3c4049',
		'editorLineNumber.foreground': '#636d83',
		'editorSuggestWidget.background': '#21252b',
		'editorSuggestWidget.border': '#181a1f',
		'editorSuggestWidget.selectedBackground': '#2c313a',
		'editorWhitespace.foreground': '#3c4049',
		'editorWidget.background': '#21252b',
		'extensionButton.prominentBackground': '#2ba143',
		'extensionButton.prominentHoverBackground': '#37af4e',
		focusBorder: '#528bff',
		'input.background': '#1b1d23',
		'input.border': '#181a1f',
		'list.activeSelectionBackground': '#2c313a',
		'list.activeSelectionForeground': '#d7dae0',
		'list.focusBackground': '#2c313a',
		'list.highlightForeground': '#d7dae0',
		'list.hoverBackground': '#2c313a66',
		'list.inactiveSelectionBackground': '#2c313a',
		'list.inactiveSelectionForeground': '#d7dae0',
		'peekView.border': '#528bff',
		'peekViewEditor.background': '#1b1d23',
		'peekViewResult.background': '#21252b',
		'peekViewResult.selectionBackground': '#2c313a',
		'peekViewTitle.background': '#1b1d23',
		'pickerGroup.border': '#528bff',
		'scrollbarSlider.activeBackground': '#747d9180',
		'scrollbarSlider.background': '#4e566680',
		'scrollbarSlider.hoverBackground': '#5a637580',
		'sideBar.background': '#21252b',
		'sideBarSectionHeader.background': '#333842',
		'statusBar.background': '#21252b',
		'statusBar.debuggingForeground': '#ffffff',
		'statusBar.foreground': '#9da5b4',
		'statusBar.noFolderBackground': '#21252b',
		'statusBarItem.hoverBackground': '#2c313a',
		'tab.activeBackground': '#282c34',
		'tab.border': '#181a1f',
		'tab.inactiveBackground': '#21252b',
		'titleBar.activeBackground': '#21252b',
		'titleBar.activeForeground': '#9da5b4',
		'titleBar.inactiveBackground': '#21252b',
		'titleBar.inactiveForeground': '#9da5b4',
		'activityBar.dropBackground': '#ffffff1f',
		'debugExceptionWidget.background': '#420b0d',
		'debugExceptionWidget.border': '#a31515',
		'debugToolBar.background': '#333333',
		descriptionForeground: '#ccccccb3',
		'diffEditor.removedTextBackground': '#ff000033',
		'dropdown.foreground': '#f0f0f0',
		'editor.findMatchBackground': '#515c6a',
		'editor.findMatchHighlightBackground': '#ea5c0055',
		'editor.findRangeHighlightBackground': '#3a3d4166',
		'editor.foreground': '#bbbbbb',
		'editor.hoverHighlightBackground': '#264f7840',
		'editor.inactiveSelectionBackground': '#3e445180',
		'editor.lineHighlightBorder': '#2c313a',
		'editor.rangeHighlightBackground': '#ffffff0b',
		'editor.selectionHighlightBackground': '#34394399',
		'editor.wordHighlightBackground': '#575757b8',
		'editor.wordHighlightStrongBackground': '#004972b8',
		'editorActiveLineNumber.foreground': '#aaaaaa',
		'editorBracketMatch.background': '#0064001a',
		'editorBracketMatch.border': '#888888',
		'editorCodeLens.foreground': '#999999',
		'editorError.foreground': '#ea4646',
		'editorGroup.dropBackground': '#53595d80',
		'editorGroupHeader.noTabsBackground': '#282c34',
		'editorGutter.addedBackground': '#587c0c',
		'editorGutter.background': '#282c34',
		'editorGutter.deletedBackground': '#94151b',
		'editorGutter.modifiedBackground': '#0c7d9d',
		'editorHint.foreground': '#eeeeeeb3',
		'editorIndentGuide.activeBackground': '#3c4049',
		'editorInfo.foreground': '#008000',
		'editorLineNumber.activeForeground': '#aaaaaa',
		'editorLink.activeForeground': '#4e94ce',
		'editorMarkerNavigation.background': '#2d2d30',
		'editorMarkerNavigationError.background': '#ea4646',
		'editorMarkerNavigationInfo.background': '#008000',
		'editorMarkerNavigationWarning.background': '#4d9e4d',
		'editorOverviewRuler.addedForeground': '#007acc99',
		'editorOverviewRuler.border': '#7f7f7f4d',
		'editorOverviewRuler.bracketMatchForeground': '#a0a0a0',
		'editorOverviewRuler.commonContentForeground': '#60606066',
		'editorOverviewRuler.currentContentForeground': '#40c8ae80',
		'editorOverviewRuler.deletedForeground': '#007acc99',
		'editorOverviewRuler.errorForeground': '#ff1212b3',
		'editorOverviewRuler.findMatchForeground': '#f6b94db3',
		'editorOverviewRuler.incomingContentForeground': '#40a6ff80',
		'editorOverviewRuler.infoForeground': '#121288b3',
		'editorOverviewRuler.modifiedForeground': '#007acc99',
		'editorOverviewRuler.rangeHighlightForeground': '#007acc99',
		'editorOverviewRuler.selectionHighlightForeground': '#a0a0a0cc',
		'editorOverviewRuler.warningForeground': '#128812b3',
		'editorOverviewRuler.wordHighlightForeground': '#a0a0a0cc',
		'editorOverviewRuler.wordHighlightStrongForeground': '#c0a0c0cc',
		'editorPane.background': '#282c34',
		'editorRuler.foreground': '#5a5a5a',
		'editorSuggestWidget.foreground': '#bbbbbb',
		'editorSuggestWidget.highlightForeground': '#d7dae0',
		'editorUnnecessaryCode.opacity': '#000000aa',
		'editorWarning.foreground': '#4d9e4d',
		'editorWidget.border': '#454545',
		errorForeground: '#f48771',
		'extensionButton.prominentForeground': '#ffffff',
		foreground: 'cccccc',
		'gitDecoration.addedResourceForeground': '#81b88b',
		'gitDecoration.conflictingResourceForeground': '#6c6cc4',
		'gitDecoration.deletedResourceForeground': '#c74e39',
		'gitDecoration.ignoredResourceForeground': '#a7a8a9',
		'gitDecoration.modifiedResourceForeground': '#e2c08d',
		'gitDecoration.submoduleResourceForeground': '#8db9e2',
		'gitDecoration.untrackedResourceForeground': '#73c991',
		'input.foreground': '#cccccc',
		'inputOption.activeBorder': '#007acc',
		'inputValidation.errorBackground': '#5a1d1d',
		'inputValidation.errorBorder': '#be1100',
		'inputValidation.infoBackground': '#063b49',
		'inputValidation.infoBorder': '#007acc',
		'inputValidation.warningBackground': '#352a05',
		'inputValidation.warningBorder': '#b89500',
		'list.dropBackground': '#2c313a',
		'list.errorForeground': '#ea4646',
		'list.inactiveFocusBackground': '#313135',
		'list.invalidItemForeground': '#b89500',
		'list.warningForeground': '#4d9e4d',
		'merge.commonContentBackground': '#60606029',
		'merge.commonHeaderBackground': '#60606066',
		'merge.currentContentBackground': '#40c8ae33',
		'merge.currentHeaderBackground': '#40c8ae80',
		'merge.incomingContentBackground': '#40a6ff33',
		'merge.incomingHeaderBackground': '#40a6ff80',
		'notificationCenterHeader.background': '#2b3038',
		'notificationLink.foreground': '#4080d0',
		'notifications.background': '#21252b',
		'notifications.border': '#2b3038',
		'panel.background': '#282c34',
		'panel.border': '#80808059',
		'panel.dropBackground': '#ffffff1f',
		'panelTitle.activeBorder': '#80808059',
		'panelTitle.activeForeground': '#e7e7e7',
		'panelTitle.inactiveForeground': '#e7e7e780',
		'peekViewEditor.matchHighlightBackground': '#ff8f0099',
		'peekViewEditorGutter.background': '#1b1d23',
		'peekViewResult.fileForeground': '#ffffff',
		'peekViewResult.lineForeground': '#bbbbbb',
		'peekViewResult.matchHighlightBackground': '#ea5c004d',
		'peekViewResult.selectionForeground': '#ffffff',
		'peekViewTitleDescription.foreground': '#ccccccb3',
		'peekViewTitleLabel.foreground': '#ffffff',
		'pickerGroup.foreground': '#0097fb99',
		'progressBar.background': '#0e70c0',
		'scrollbar.shadow': '#000000',
		'settings.modifiedItemForeground': '#73c991',
		'sideBar.dropBackground': '#ffffff1f',
		'statusBar.debuggingBackground': '#cc6633',
		'statusBar.noFolderForeground': '#9da5b4',
		'statusBarItem.activeBackground': '#ffffff2e',
		'statusBarItem.prominentBackground': '#388a34',
		'statusBarItem.prominentHoverBackground': '#369432',
		'tab.activeForeground': '#ffffff',
		'tab.inactiveForeground': '#ffffff80',
		'tab.unfocusedActiveForeground': '#ffffff80',
		'tab.unfocusedInactiveForeground': '#ffffff40',
		'terminal.ansiBlack': '#000000',
		'terminal.ansiBlue': '#2472c8',
		'terminal.ansiBrightBlack': '#666666',
		'terminal.ansiBrightBlue': '#3b8eea',
		'terminal.ansiBrightCyan': '#29b8db',
		'terminal.ansiBrightGreen': '#23d18b',
		'terminal.ansiBrightMagenta': '#d670d6',
		'terminal.ansiBrightRed': '#f14c4c',
		'terminal.ansiBrightWhite': '#e5e5e5',
		'terminal.ansiBrightYellow': '#f5f543',
		'terminal.ansiCyan': '#11a8cd',
		'terminal.ansiGreen': '#0dbc79',
		'terminal.ansiMagenta': '#bc3fbc',
		'terminal.ansiRed': '#cd3131',
		'terminal.ansiWhite': '#e5e5e5',
		'terminal.ansiYellow': '#e5e510',
		'terminal.foreground': '#cccccc',
		'terminal.selectionBackground': '#ffffff40',
		'textBlockQuote.background': '#7f7f7f1a',
		'textBlockQuote.border': '#007acc80',
		'textCodeBlock.background': '#0a0a0a66',
		'textLink.activeForeground': '#4080d0',
		'textLink.foreground': '#4080d0',
		'textPreformat.foreground': '#d7ba7d',
		'textSeparator.foreground': '#ffffff2e',
		'widget.shadow': '#000000'
	},
	rules: [
		{
			token: 'comment',
			foreground: '5C6370',
			fontStyle: 'italic'
		},
		{
			token: 'comment markup.link',
			foreground: '5C6370'
		},
		{
			token: 'entity.name.type',
			foreground: 'E5C07B'
		},
		{
			token: 'entity.other.inherited-class',
			foreground: '98C379'
		},
		{
			token: 'keyword',
			foreground: 'C678DD'
		},
		{
			token: 'keyword.control',
			foreground: 'C678DD'
		},
		{
			token: 'keyword.operator',
			foreground: 'ABB2BF'
		},
		{
			token: 'keyword.other.special-method',
			foreground: '61AFEF'
		},
		{
			token: 'keyword.other.unit',
			foreground: 'D19A66'
		},
		{
			token: 'storage',
			foreground: 'C678DD'
		},
		{
			token: 'storage.type.annotation',
			foreground: 'C678DD'
		},
		{
			token: 'storage.type.primitive',
			foreground: 'C678DD'
		},
		{
			token: 'storage.modifier.package',
			foreground: 'ABB2BF'
		},
		{
			token: 'storage.modifier.import',
			foreground: 'ABB2BF'
		},
		{
			token: 'constant',
			foreground: 'D19A66'
		},
		{
			token: 'constant.variable',
			foreground: 'D19A66'
		},
		{
			token: 'constant.character.escape',
			foreground: '56B6C2'
		},
		{
			token: 'constant.numeric',
			foreground: 'D19A66'
		},
		{
			token: 'constant.other.color',
			foreground: '56B6C2'
		},
		{
			token: 'constant.other.symbol',
			foreground: '56B6C2'
		},
		{
			token: 'variable',
			foreground: 'E06C75'
		},
		{
			token: 'variable.interpolation',
			foreground: 'BE5046'
		},
		{
			token: 'variable.parameter',
			foreground: 'ABB2BF'
		},
		{
			token: 'string',
			foreground: '98C379'
		},
		{
			token: 'string.regexp',
			foreground: '56B6C2'
		},
		{
			token: 'string.regexp source.ruby.embedded',
			foreground: 'E5C07B'
		},
		{
			token: 'string.other.link',
			foreground: 'E06C75'
		},
		{ token: 'string.key.json', foreground: 'E06C75' },
		{ token: 'string.value.json', foreground: '98C379' },
		{
			token: 'punctuation.definition.comment',
			foreground: '5C6370'
		},
		{
			token: 'punctuation.definition.method-parameters',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.definition.function-parameters',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.definition.parameters',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.definition.separator',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.definition.seperator',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.definition.array',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.definition.heading',
			foreground: '61AFEF'
		},
		{
			token: 'punctuation.definition.identity',
			foreground: '61AFEF'
		},
		{
			token: 'punctuation.definition.bold',
			foreground: 'E5C07B',
			fontStyle: 'bold'
		},
		{
			token: 'punctuation.definition.italic',
			foreground: 'C678DD',
			fontStyle: 'italic'
		},
		{
			token: 'punctuation.section.embedded',
			foreground: 'BE5046'
		},
		{
			token: 'punctuation.section.method',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.section.class',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.section.inner-class',
			foreground: 'ABB2BF'
		},
		{
			token: 'support.class',
			foreground: 'E5C07B'
		},
		{
			token: 'support.type',
			foreground: '56B6C2'
		},
		{
			token: 'support.function',
			foreground: '56B6C2'
		},
		{
			token: 'support.function.any-method',
			foreground: '61AFEF'
		},
		{
			token: 'entity.name.function',
			foreground: '61AFEF'
		},
		{
			token: 'entity.name.class',
			foreground: 'E5C07B'
		},
		{
			token: 'entity.name.type.class',
			foreground: 'E5C07B'
		},
		{
			token: 'entity.name.section',
			foreground: '61AFEF'
		},
		{
			token: 'entity.name.tag',
			foreground: 'E06C75'
		},
		{
			token: 'entity.other.attribute-name',
			foreground: 'D19A66'
		},
		{
			token: 'entity.other.attribute-name.id',
			foreground: '61AFEF'
		},
		{
			token: 'meta.class',
			foreground: 'E5C07B'
		},
		{
			token: 'meta.class.body',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.method-call',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.method',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.definition.variable',
			foreground: 'E06C75'
		},
		{
			token: 'meta.link',
			foreground: 'D19A66'
		},
		{
			token: 'meta.require',
			foreground: '61AFEF'
		},
		{
			token: 'meta.selector',
			foreground: 'C678DD'
		},
		{
			token: 'meta.separator',
			foreground: 'ABB2BF',
			background: '373B41'
		},
		{
			token: 'meta.tag',
			foreground: 'ABB2BF'
		},
		{
			token: 'underline'
		},
		{
			token: 'none',
			foreground: 'ABB2BF'
		},
		{
			token: 'invalid.deprecated',
			foreground: '523D14',
			background: 'E0C285'
		},
		{
			token: 'invalid.illegal',
			foreground: 'FF0000',
			background: 'E05252'
		},
		{
			token: 'markup.bold',
			foreground: 'D19A66',
			fontStyle: 'bold'
		},
		{
			token: 'markup.changed',
			foreground: 'C678DD'
		},
		{
			token: 'markup.deleted',
			foreground: 'E06C75'
		},
		{
			token: 'markup.italic',
			foreground: 'C678DD',
			fontStyle: 'italic'
		},
		{
			token: 'markup.heading',
			foreground: 'E06C75'
		},
		{
			token: 'markup.heading punctuation.definition.heading',
			foreground: '61AFEF'
		},
		{
			token: 'markup.link',
			foreground: 'C678DD'
		},
		{
			token: 'markup.inserted',
			foreground: '98C379'
		},
		{
			token: 'markup.quote',
			foreground: 'D19A66'
		},
		{
			token: 'markup.raw',
			foreground: '98C379'
		},
		{
			token: 'source.c keyword.operator',
			foreground: 'C678DD'
		},
		{
			token: 'source.cpp keyword.operator',
			foreground: 'C678DD'
		},
		{
			token: 'source.cs keyword.operator',
			foreground: 'C678DD'
		},
		{
			token: 'source.css property-name',
			foreground: '828997'
		},
		{
			token: 'source.css property-value',
			foreground: '828997'
		},
		{
			token: 'source.css property-name.support',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.css property-value.support',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.gfm markup'
		},
		{
			token: 'source.gfm link entity',
			foreground: '61AFEF'
		},
		{
			token: 'source.go storage.type.string',
			foreground: 'C678DD'
		},
		{
			token: 'source.ini keyword.other.definition.ini',
			foreground: 'E06C75'
		},
		{
			token: 'source.java storage.modifier.import',
			foreground: 'E5C07B'
		},
		{
			token: 'source.java storage.type',
			foreground: 'E5C07B'
		},
		{
			token: 'source.java keyword.operator.instanceof',
			foreground: 'C678DD'
		},
		{
			token: 'source.java-properties meta.key-pair',
			foreground: 'E06C75'
		},
		{
			token: 'source.java-properties meta.key-pair > punctuation',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.js keyword.operator',
			foreground: '56B6C2'
		},
		{
			token: 'source.js keyword.operator.delete',
			foreground: 'C678DD'
		},
		{
			token: 'source.js keyword.operator.in',
			foreground: 'C678DD'
		},
		{
			token: 'source.js keyword.operator.of',
			foreground: 'C678DD'
		},
		{
			token: 'source.js keyword.operator.instanceof',
			foreground: 'C678DD'
		},
		{
			token: 'source.js keyword.operator.new',
			foreground: 'C678DD'
		},
		{
			token: 'source.js keyword.operator.typeof',
			foreground: 'C678DD'
		},
		{
			token: 'source.js keyword.operator.void',
			foreground: 'C678DD'
		},
		{
			token: 'source.json meta.structure.dictionary.json > string.quoted.json',
			foreground: 'E06C75'
		},
		{
			token:
				'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
			foreground: 'E06C75'
		},
		{
			token: 'source.json meta.structure.dictionary.json > value.json > string.quoted.json',
			foreground: '98C379'
		},
		{
			token: 'source.json meta.structure.array.json > value.json > string.quoted.json',
			foreground: '98C379'
		},
		{
			token:
				'source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation',
			foreground: '98C379'
		},
		{
			token:
				'source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
			foreground: '98C379'
		},
		{
			token: 'source.json meta.structure.dictionary.json > constant.language.json',
			foreground: '56B6C2'
		},
		{
			token: 'source.json meta.structure.array.json > constant.language.json',
			foreground: '56B6C2'
		},
		{
			token: 'source.python keyword.operator.logical.python',
			foreground: 'C678DD'
		},
		{
			token: 'source.python variable.parameter',
			foreground: 'D19A66'
		},
		{
			token: 'meta.attribute.rust',
			foreground: 'BCC199'
		},
		{
			token: 'storage.modifier.lifetime.rust',
			foreground: '33E8EC'
		},
		{
			token: 'entity.name.lifetime.rust',
			foreground: '33E8EC'
		},
		{
			token: 'keyword.unsafe.rust',
			foreground: 'CC6B73'
		},
		{
			token: 'customrule',
			foreground: 'ABB2BF'
		},
		{
			token: 'support.type.property-name',
			foreground: 'ABB2BF'
		},
		{
			token: 'string.quoted.double punctuation',
			foreground: '98C379'
		},
		{
			token: 'support.constant',
			foreground: 'D19A66'
		},
		{
			token: 'support.type.property-name.json',
			foreground: 'E06C75'
		},
		{
			token: 'support.type.property-name.json punctuation',
			foreground: 'E06C75'
		},
		{
			token: 'punctuation.separator.key-value.ts',
			foreground: '56B6C2'
		},
		{
			token: 'punctuation.separator.key-value.js',
			foreground: '56B6C2'
		},
		{
			token: 'punctuation.separator.key-value.tsx',
			foreground: '56B6C2'
		},
		{
			token: 'source.js.embedded.html keyword.operator',
			foreground: '56B6C2'
		},
		{
			token: 'source.ts.embedded.html keyword.operator',
			foreground: '56B6C2'
		},
		{
			token: 'variable.other.readwrite.js',
			foreground: 'ABB2BF'
		},
		{
			token: 'variable.other.readwrite.ts',
			foreground: 'ABB2BF'
		},
		{
			token: 'variable.other.readwrite.tsx',
			foreground: 'ABB2BF'
		},
		{
			token: 'support.variable.dom.js',
			foreground: 'E06C75'
		},
		{
			token: 'support.variable.dom.ts',
			foreground: 'E06C75'
		},
		{
			token: 'support.variable.property.dom.js',
			foreground: 'E06C75'
		},
		{
			token: 'support.variable.property.dom.ts',
			foreground: 'E06C75'
		},
		{
			token: 'meta.template.expression.js punctuation.definition',
			foreground: 'BE5046'
		},
		{
			token: 'meta.template.expression.ts punctuation.definition',
			foreground: 'BE5046'
		},
		{
			token: 'source.ts punctuation.definition.typeparameters',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.js punctuation.definition.typeparameters',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.tsx punctuation.definition.typeparameters',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.ts punctuation.definition.block',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.js punctuation.definition.block',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.tsx punctuation.definition.block',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.ts punctuation.separator.comma',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.js punctuation.separator.comma',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.tsx punctuation.separator.comma',
			foreground: 'ABB2BF'
		},
		{
			token: 'support.variable.property.js',
			foreground: 'E06C75'
		},
		{
			token: 'support.variable.property.ts',
			foreground: 'E06C75'
		},
		{
			token: 'support.variable.property.tsx',
			foreground: 'E06C75'
		},
		{
			token: 'keyword.control.default.js',
			foreground: 'E06C75'
		},
		{
			token: 'keyword.control.default.ts',
			foreground: 'E06C75'
		},
		{
			token: 'keyword.control.default.tsx',
			foreground: 'E06C75'
		},
		{
			token: 'keyword.operator.expression.instanceof.js',
			foreground: 'C678DD'
		},
		{
			token: 'keyword.operator.expression.instanceof.ts',
			foreground: 'C678DD'
		},
		{
			token: 'keyword.operator.expression.instanceof.tsx',
			foreground: 'C678DD'
		},
		{
			token: 'keyword.operator.expression.of.js',
			foreground: 'C678DD'
		},
		{
			token: 'keyword.operator.expression.of.ts',
			foreground: 'C678DD'
		},
		{
			token: 'keyword.operator.expression.of.tsx',
			foreground: 'C678DD'
		},
		{
			token: 'meta.brace.round.js',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.array-binding-pattern-variable.js',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.brace.square.js',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.brace.round.ts',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.array-binding-pattern-variable.ts',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.brace.square.ts',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.brace.round.tsx',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.array-binding-pattern-variable.tsx',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.brace.square.tsx',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.js punctuation.accessor',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.ts punctuation.accessor',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.tsx punctuation.accessor',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.terminator.statement.js',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.terminator.statement.ts',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.terminator.statement.tsx',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.array-binding-pattern-variable.js variable.other.readwrite.js',
			foreground: 'D19A66'
		},
		{
			token: 'meta.array-binding-pattern-variable.ts variable.other.readwrite.ts',
			foreground: 'D19A66'
		},
		{
			token: 'meta.array-binding-pattern-variable.tsx variable.other.readwrite.tsx',
			foreground: 'D19A66'
		},
		{
			token: 'source.js support.variable',
			foreground: 'E06C75'
		},
		{
			token: 'source.ts support.variable',
			foreground: 'E06C75'
		},
		{
			token: 'source.tsx support.variable',
			foreground: 'E06C75'
		},
		{
			token: 'variable.other.constant.property.js',
			foreground: 'D19A66'
		},
		{
			token: 'variable.other.constant.property.ts',
			foreground: 'D19A66'
		},
		{
			token: 'variable.other.constant.property.tsx',
			foreground: 'D19A66'
		},
		{
			token: 'keyword.operator.new.ts',
			foreground: 'C678DD'
		},
		{
			token: 'keyword.operator.new.j',
			foreground: 'C678DD'
		},
		{
			token: 'keyword.operator.new.tsx',
			foreground: 'C678DD'
		},
		{
			token: 'source.ts keyword.operator',
			foreground: '56B6C2'
		},
		{
			token: 'source.tsx keyword.operator',
			foreground: '56B6C2'
		},
		{
			token: 'punctuation.separator.parameter.js',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.separator.parameter.ts',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.separator.parameter.tsx ',
			foreground: 'ABB2BF'
		},
		{
			token: 'constant.language.import-export-all.js',
			foreground: 'E06C75'
		},
		{
			token: 'constant.language.import-export-all.ts',
			foreground: 'E06C75'
		},
		{
			token: 'constant.language.import-export-all.jsx',
			foreground: '56B6C2'
		},
		{
			token: 'constant.language.import-export-all.tsx',
			foreground: '56B6C2'
		},
		{
			token: 'keyword.control.as.js',
			foreground: 'ABB2BF'
		},
		{
			token: 'keyword.control.as.ts',
			foreground: 'ABB2BF'
		},
		{
			token: 'keyword.control.as.jsx',
			foreground: 'ABB2BF'
		},
		{
			token: 'keyword.control.as.tsx',
			foreground: 'ABB2BF'
		},
		{
			token: 'variable.other.readwrite.alias.js',
			foreground: 'E06C75'
		},
		{
			token: 'variable.other.readwrite.alias.ts',
			foreground: 'E06C75'
		},
		{
			token: 'variable.other.readwrite.alias.jsx',
			foreground: 'E06C75'
		},
		{
			token: 'variable.other.readwrite.alias.tsx',
			foreground: 'E06C75'
		},
		{
			token: 'variable.other.constant.js',
			foreground: 'D19A66'
		},
		{
			token: 'variable.other.constant.ts',
			foreground: 'D19A66'
		},
		{
			token: 'variable.other.constant.jsx',
			foreground: 'D19A66'
		},
		{
			token: 'variable.other.constant.tsx',
			foreground: 'D19A66'
		},
		{
			token: 'meta.export.default.js variable.other.readwrite.js',
			foreground: 'E06C75'
		},
		{
			token: 'meta.export.default.ts variable.other.readwrite.ts',
			foreground: 'E06C75'
		},
		{
			token: 'source.js meta.template.expression.js punctuation.accessor',
			foreground: '98C379'
		},
		{
			token: 'source.ts meta.template.expression.ts punctuation.accessor',
			foreground: '98C379'
		},
		{
			token: 'source.tsx meta.template.expression.tsx punctuation.accessor',
			foreground: '98C379'
		},
		{
			token: 'source.js meta.import-equals.external.js keyword.operator',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.jsx meta.import-equals.external.jsx keyword.operator',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.ts meta.import-equals.external.ts keyword.operator',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.tsx meta.import-equals.external.tsx keyword.operator',
			foreground: 'ABB2BF'
		},
		{
			token: 'entity.name.type.module.js',
			foreground: '98C379'
		},
		{
			token: 'entity.name.type.module.ts',
			foreground: '98C379'
		},
		{
			token: 'entity.name.type.module.jsx',
			foreground: '98C379'
		},
		{
			token: 'entity.name.type.module.tsx',
			foreground: '98C379'
		},
		{
			token: 'meta.class.js',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.class.ts',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.class.jsx',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.class.tsx',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.definition.property.js variable',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.definition.property.ts variable',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.definition.property.jsx variable',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.definition.property.tsx variable',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.type.parameters.js support.type',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.type.parameters.jsx support.type',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.type.parameters.ts support.type',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.type.parameters.tsx support.type',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.js meta.tag.js keyword.operator',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.jsx meta.tag.jsx keyword.operator',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.ts meta.tag.ts keyword.operator',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.tsx meta.tag.tsx keyword.operator',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.tag.js punctuation.section.embedded',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.tag.jsx punctuation.section.embedded',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.tag.ts punctuation.section.embedded',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.tag.tsx punctuation.section.embedded',
			foreground: 'ABB2BF'
		},
		{
			token: 'meta.array.literal.js variable',
			foreground: 'E5C07B'
		},
		{
			token: 'meta.array.literal.jsx variable',
			foreground: 'E5C07B'
		},
		{
			token: 'meta.array.literal.ts variable',
			foreground: 'E5C07B'
		},
		{
			token: 'meta.array.literal.tsx variable',
			foreground: 'E5C07B'
		},
		{
			token: 'support.type.object.module.js',
			foreground: 'E06C75'
		},
		{
			token: 'support.type.object.module.jsx',
			foreground: 'E06C75'
		},
		{
			token: 'support.type.object.module.ts',
			foreground: 'E06C75'
		},
		{
			token: 'support.type.object.module.tsx',
			foreground: 'E06C75'
		},
		{
			token: 'constant.language.json',
			foreground: '56B6C2'
		},
		{
			token: 'variable.other.constant.object.js',
			foreground: 'D19A66'
		},
		{
			token: 'variable.other.constant.object.jsx',
			foreground: 'D19A66'
		},
		{
			token: 'variable.other.constant.object.ts',
			foreground: 'D19A66'
		},
		{
			token: 'variable.other.constant.object.tsx',
			foreground: 'D19A66'
		},
		{
			token: 'storage.type.property.js',
			foreground: '56B6C2'
		},
		{
			token: 'storage.type.property.jsx',
			foreground: '56B6C2'
		},
		{
			token: 'storage.type.property.ts',
			foreground: '56B6C2'
		},
		{
			token: 'storage.type.property.tsx',
			foreground: '56B6C2'
		},
		{
			token: 'meta.template.expression.js string.quoted punctuation.definition',
			foreground: '98C379'
		},
		{
			token: 'meta.template.expression.jsx string.quoted punctuation.definition',
			foreground: '98C379'
		},
		{
			token: 'meta.template.expression.ts string.quoted punctuation.definition',
			foreground: '98C379'
		},
		{
			token: 'meta.template.expression.tsx string.quoted punctuation.definition',
			foreground: '98C379'
		},
		{
			token:
				'meta.template.expression.js string.template punctuation.definition.string.template',
			foreground: '98C379'
		},
		{
			token:
				'meta.template.expression.jsx string.template punctuation.definition.string.template',
			foreground: '98C379'
		},
		{
			token:
				'meta.template.expression.ts string.template punctuation.definition.string.template',
			foreground: '98C379'
		},
		{
			token:
				'meta.template.expression.tsx string.template punctuation.definition.string.template',
			foreground: '98C379'
		},
		{
			token: 'keyword.operator.expression.in.js',
			foreground: 'C678DD'
		},
		{
			token: 'keyword.operator.expression.in.jsx',
			foreground: 'C678DD'
		},
		{
			token: 'keyword.operator.expression.in.ts',
			foreground: 'C678DD'
		},
		{
			token: 'keyword.operator.expression.in.tsx',
			foreground: 'C678DD'
		},
		{
			token: 'source.python constant.other',
			foreground: 'ABB2BF'
		},
		{
			token: 'source.python constant',
			foreground: 'D19A66'
		},
		{
			token: 'constant.character.format.placeholder.other.python storage',
			foreground: 'D19A66'
		},
		{
			token: 'support.variable.magic.python',
			foreground: 'E06C75'
		},
		{
			token: 'meta.function.parameters.python',
			foreground: 'D19A66'
		},
		{
			token: 'punctuation.separator.annotation.python',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.separator.parameters.python',
			foreground: 'ABB2BF'
		},
		{
			token: 'entity.name.variable.field.cs',
			foreground: 'E06C75'
		},
		{
			token: 'source.cs keyword.operator',
			foreground: 'ABB2BF'
		},
		{
			token: 'variable.other.readwrite.cs',
			foreground: 'ABB2BF'
		},
		{
			token: 'variable.other.object.cs',
			foreground: 'ABB2BF'
		},
		{
			token: 'variable.other.object.property.cs',
			foreground: 'ABB2BF'
		},
		{
			token: 'entity.name.variable.property.cs',
			foreground: '61AFEF'
		},
		{
			token: 'storage.type.cs',
			foreground: 'E5C07B'
		},
		{
			token: 'keyword.other.unsafe.rust',
			foreground: 'E06C75'
		},
		{
			token: 'markup.raw.block.markdown',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.definition.variable.shell',
			foreground: 'E06C75'
		},
		{
			token: 'support.constant.property-value.css',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.definition.constant.css',
			foreground: 'D19A66'
		},
		{
			token: 'punctuation.separator.key-value.scss',
			foreground: 'E06C75'
		},
		{
			token: 'punctuation.definition.constant.scss',
			foreground: 'D19A66'
		},
		{
			token: 'meta.property-list.scss punctuation.separator.key-value.scss',
			foreground: 'ABB2BF'
		},
		{
			token: 'storage.type.primitive.array.java',
			foreground: 'E5C07B'
		},
		{
			token: 'entity.name.section.markdown',
			foreground: 'E06C75'
		},
		{
			token: 'punctuation.definition.heading.markdown',
			foreground: 'E06C75'
		},
		{
			token: 'markup.heading.setext',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.definition.bold.markdown',
			foreground: 'D19A66'
		},
		{
			token: 'markup.inline.raw.markdown',
			foreground: '98C379'
		},
		{
			token: 'beginning.punctuation.definition.list.markdown',
			foreground: 'E06C75'
		},
		{
			token: 'markup.quote.markdown',
			foreground: '5C6370',
			fontStyle: 'italic'
		},
		{
			token: 'punctuation.definition.string.begin.markdown',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.definition.string.end.markdown',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.definition.metadata.markdown',
			foreground: 'ABB2BF'
		},
		{
			token: 'punctuation.definition.metadata.markdown',
			foreground: 'C678DD'
		},
		{
			token: 'markup.underline.link.markdown',
			foreground: 'C678DD'
		},
		{
			token: 'markup.underline.link.image.markdown',
			foreground: 'C678DD'
		},
		{
			token: 'string.other.link.title.markdown',
			foreground: '61AFEF'
		},
		{
			token: 'string.other.link.description.markdown',
			foreground: '61AFEF'
		},
		{
			token: 'punctuation.separator.variable.ruby',
			foreground: 'E06C75'
		},
		{
			token: 'variable.other.constant.ruby',
			foreground: 'D19A66'
		},
		{
			token: 'keyword.operator.other.ruby',
			foreground: '98C379'
		},
		{
			token: 'punctuation.definition.variable.php',
			foreground: 'E06C75'
		},
		{
			token: 'meta.class.php',
			foreground: 'ABB2BF'
		},
		{
			token: 'token.info-token',
			foreground: '6796e6'
		},
		{
			token: 'token.warn-token',
			foreground: 'cd9731'
		},
		{
			token: 'token.error-token',
			foreground: 'f44747'
		},
		{
			token: 'token.debug-token',
			foreground: 'b267e6'
		}
	],
	type: 'dark'
};
