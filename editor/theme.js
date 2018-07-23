const background = '282A36';
const currentLine = '313342';
const selection = '45485f';
const foreground = 'CDCDC9';
const comment = '586694';
const red = 'CC6666';
const orange = 'DE935F';
const yellow = 'EBEF8C';
const green = '2ECC71';
const aqua = '56AFC6';
const blue = '81A2BE';
const purple = 'CF66AA';

module.exports = {
  name: 'vee',
  base: 'vs-dark',
  inherit: true,
  rules: [
		{ token: '', foreground: foreground, background: background },
		{ token: 'invalid', foreground: red },
		{ token: 'emphasis', fontStyle: 'italic' },
		{ token: 'strong', fontStyle: 'bold' },

		{ token: 'identifier', foreground: foreground },
		{ token: 'identifier.name.type', foreground: red },

		{ token: 'variable', foreground: purple },
		{ token: 'variable.predefined', foreground: 'BE5046' },
		{ token: 'variable.parameter', foreground: 'ABB2BF' },

		{ token: 'constant', foreground: green },
		{ token: 'comment', foreground: comment, fontStyle: "italic"},
		{ token: 'number', foreground: orange },
		{ token: 'number.hex', foreground: orange },
		{ token: 'regexp', foreground: green },
		{ token: 'annotation', foreground: 'C678DD' },
		{ token: 'type', foreground: 'E5C07B' },

		{ token: 'delimiter', foreground: aqua }, // delimiter includes all brackets etc
		{ token: 'delimiter.array', foreground: foreground }, // delimiter brackets. takes only curly braces
		{ token: 'delimiter.bracket', foreground: foreground }, // delimiter brackets. takes only curly braces
		{ token: 'delimiter.parenthesis', foreground: foreground }, // delimiter brackets. takes only round braces		
		{ token: 'delimiter.angle', foreground: foreground }, // delimiter brackets. takes only <> braces		
		
		{ token: 'delimiter.html', foreground: foreground },
		{ token: 'delimiter.xml', foreground: foreground },

		{ token: 'tag', foreground: red },
		{ token: 'tag.id.jade', foreground: red },
		{ token: 'tag.class.jade', foreground: red },

		{ token: 'meta.scss', foreground: 'A79873' },
		{ token: 'meta.tag', foreground: 'ABB2BF' },

		{ token: 'metatag', foreground: yellow },
		{ token: 'metatag.content.html', foreground: aqua },
		{ token: 'metatag.html', foreground: blue },
		{ token: 'metatag.xml', foreground: blue },
		{ token: 'metatag.php', fontStyle: 'bold' },

		{ token: 'key', foreground: aqua },
		{ token: 'string.key.json', foreground: aqua },
		{ token: 'string.value.json', foreground: red },

		{ token: 'attribute.name', foreground: orange },
		{ token: 'attribute.name.css', foreground: foreground },
		{ token: 'attribute.value', foreground: green },
		{ token: 'attribute.value.css', foreground: green },
		{ token: 'attribute.value.number.css', foreground: orange },
		{ token: 'attribute.value.unit.css', foreground: orange },
		{ token: 'attribute.value.hex.css', foreground: aqua },

		{ token: 'string', foreground: green },
		{ token: 'string.sql', foreground: green },

		{ token: 'keyword', foreground: purple },
		{ token: 'keyword.flow', foreground: purple },
		{ token: 'keyword.json', foreground: orange },
		{ token: 'keyword.flow.scss', foreground: blue },

		{ token: 'operator.scss', foreground: '909090' },
		{ token: 'operator.sql', foreground: '778899' },
		{ token: 'operator.swift', foreground: '909090' },
		{ token: 'predefined.sql', foreground: 'FF00FF' },
	],
  colors: {
      "editor.background": "#"+background,
      "editor.foreground": "#"+foreground,
      "foreground": "#"+foreground,
      "editor.lineHighlightBackground": "#"+currentLine,
      "editor.selectionBackground": "#"+selection,
      "editorCursor.foreground": "#"+foreground,
      "editorIndentGuide.background": "#"+comment,
      "editorLineNumber.foreground": "#"+comment,
      "editorWhitespace.foreground": "#"+foreground,
      "editorHoverWidget.background": "#"+background,
      "editorHoverWidget.border": "#"+selection,
      "editorSuggestWidget.background": "#"+background,
      "editorSuggestWidget.border": "#"+currentLine,
      "editorSuggestWidget.selectedBackground": "#"+selection,
      "editorWidget.background": "#"+background,
      "input.background": "#"+currentLine,
      "input.foreground": "#"+foreground, // Text color of find & replace widget
      "input.border": "#181A1F",
      "focusBorder": "#528BFF",
      "list.activeSelectionBackground": "#2C313A",
      "list.activeSelectionForeground": "#D7DAE0",
      "list.focusBackground": "#2C313A",
      "list.hoverBackground": "#2C313A66",
      "list.highlightForeground": "#D7DAE0",
      "list.inactiveSelectionBackground": "#2C313A",
      "list.inactiveSelectionForeground": "#D7DAE0",
      "pickerGroup.border": "#528BFF",
      "scrollbarSlider.background": "#4E566680",
      "scrollbarSlider.activeBackground": "#747D9180",
	  "scrollbarSlider.hoverBackground": "#5A637580",
	  "scrollbar.shadow": "#FFFFFF"
  }
}

// Available list of color names:
'foreground' // Overall foreground color. This color is only used if not overridden by a component.
'errorForeground' // Overall foreground color for error messages. This color is only used if not overridden by a component.
'descriptionForeground' // Foreground color for description text providing additional information, for example for a label.
'focusBorder' // Overall border color for focused elements. This color is only used if not overridden by a component.
'contrastBorder' // An extra border around elements to separate them from others for greater contrast.
'contrastActiveBorder' // An extra border around active elements to separate them from others for greater contrast.
'selection.background' // The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor.
'textSeparator.foreground' // Color for text separators.
'textLink.foreground' // Foreground color for links in text.
'textLink.activeForeground' // Foreground color for active links in text.
'textPreformat.foreground' // Foreground color for preformatted text segments.
'textBlockQuote.background' // Background color for block quotes in text.
'textBlockQuote.border' // Border color for block quotes in text.
'textCodeBlock.background' // Background color for code blocks in text.
'widget.shadow' // Shadow color of widgets such as find/replace inside the editor.
'input.background' // Input box background.
'input.foreground' // Input box foreground.
'input.border' // Input box border.
'inputOption.activeBorder' // Border color of activated options in input fields.
'input.placeholderForeground' // Input box foreground color for placeholder text.
'inputValidation.infoBackground' // Input validation background color for information severity.
'inputValidation.infoBorder' // Input validation border color for information severity.
'inputValidation.warningBackground' // Input validation background color for information warning.
'inputValidation.warningBorder' // Input validation border color for warning severity.
'inputValidation.errorBackground' // Input validation background color for error severity.
'inputValidation.errorBorder' // Input validation border color for error severity.
'dropdown.background' // Dropdown background.
'dropdown.foreground' // Dropdown foreground.
'dropdown.border' // Dropdown border.
'list.focusBackground' // List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
'list.focusForeground' // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
'list.activeSelectionBackground' // List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
'list.activeSelectionForeground' // List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
'list.inactiveSelectionBackground' // List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
'list.inactiveSelectionForeground' // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
'list.hoverBackground' // List/Tree background when hovering over items using the mouse.
'list.hoverForeground' // List/Tree foreground when hovering over items using the mouse.
'list.dropBackground' // List/Tree drag and drop background when moving items around using the mouse.
'list.highlightForeground' // List/Tree foreground color of the match highlights when searching inside the list/tree.
'pickerGroup.foreground' // Quick picker color for grouping labels.
'pickerGroup.border' // Quick picker color for grouping borders.
'button.foreground' // Button foreground color.
'button.background' // Button background color.
'button.hoverBackground' // Button background color when hovering.
'badge.background' // Badge background color. Badges are small information labels, e.g. for search results count.
'badge.foreground' // Badge foreground color. Badges are small information labels, e.g. for search results count.
'scrollbar.shadow' // Scrollbar shadow to indicate that the view is scrolled.
'scrollbarSlider.background' // Slider background color.
'scrollbarSlider.hoverBackground' // Slider background color when hovering.
'scrollbarSlider.activeBackground' // Slider background color when active.
'progressBar.background' // Background color of the progress bar that can show for long running operations.
'editor.background' // Editor background color.
'editor.foreground' // Editor default foreground color.
'editorWidget.background' // Background color of editor widgets, such as find/replace.
'editorWidget.border' // Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.
'editor.selectionBackground' // Color of the editor selection.
'editor.selectionForeground' // Color of the selected text for high contrast.
'editor.inactiveSelectionBackground' // Color of the selection in an inactive editor.
'editor.selectionHighlightBackground' // Color for regions with the same content as the selection.
'editor.findMatchBackground' // Color of the current search match.
'editor.findMatchHighlightBackground' // Color of the other search matches.
'editor.findRangeHighlightBackground' // Color the range limiting the search.
'editor.hoverHighlightBackground' // Highlight below the word for which a hover is shown.
'editorHoverWidget.background' // Background color of the editor hover.
'editorHoverWidget.border' // Border color of the editor hover.
'editorLink.activeForeground' // Color of active links.
'diffEditor.insertedTextBackground' // Background color for text that got inserted.
'diffEditor.removedTextBackground' // Background color for text that got removed.
'diffEditor.insertedTextBorder' // Outline color for the text that got inserted.
'diffEditor.removedTextBorder' // Outline color for text that got removed.
'merge.currentHeaderBackground' // Current header background in inline merge-conflicts.
'merge.currentContentBackground' // Current content background in inline merge-conflicts.
'merge.incomingHeaderBackground' // Incoming header background in inline merge-conflicts.
'merge.incomingContentBackground' // Incoming content background in inline merge-conflicts.
'merge.commonHeaderBackground' // Common ancestor header background in inline merge-conflicts.
'merge.commonContentBackground' // Common ancester content background in inline merge-conflicts.
'merge.border' // Border color on headers and the splitter in inline merge-conflicts.
'editorOverviewRuler.currentContentForeground' // Current overview ruler foreground for inline merge-conflicts.
'editorOverviewRuler.incomingContentForeground' // Incoming overview ruler foreground for inline merge-conflicts.
'editorOverviewRuler.commonContentForeground' // Common ancestor overview ruler foreground for inline merge-conflicts.
'editor.lineHighlightBackground' // Background color for the highlight of line at the cursor position.
'editor.lineHighlightBorder' // Background color for the border around the line at the cursor position.
'editor.rangeHighlightBackground' // Background color of highlighted ranges, like by quick open and find features.
'editorCursor.foreground' // Color of the editor cursor.
'editorWhitespace.foreground' // Color of whitespace characters in the editor.
'editorIndentGuide.background' // Color of the editor indentation guides.
'editorLineNumber.foreground' // Color of editor line numbers.
'editorRuler.foreground' // Color of the editor rulers.
'editorCodeLens.foreground' // Foreground color of editor code lenses
'editorBracketMatch.background' // Background color behind matching brackets
'editorBracketMatch.border' // Color for matching brackets boxes
'editorOverviewRuler.border' // Color of the overview ruler border.
'editorGutter.background' // Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
'editorError.foreground' // Foreground color of error squigglies in the editor.
'editorError.border' // Border color of error squigglies in the editor.
'editorWarning.foreground' // Foreground color of warning squigglies in the editor.
'editorWarning.border' // Border color of warning squigglies in the editor.
'editorMarkerNavigationError.background' // Editor marker navigation widget error color.
'editorMarkerNavigationWarning.background' // Editor marker navigation widget warning color.
'editorMarkerNavigation.background' // Editor marker navigation widget background.
'editorSuggestWidget.background' // Background color of the suggest widget.
'editorSuggestWidget.border' // Border color of the suggest widget.
'editorSuggestWidget.foreground' // Foreground color of the suggest widget.
'editorSuggestWidget.selectedBackground' // Background color of the selected entry in the suggest widget.
'editorSuggestWidget.highlightForeground' // Color of the match highlights in the suggest widget.
'editor.wordHighlightBackground' // Background color of a symbol during read-access, like reading a variable.
'editor.wordHighlightStrongBackground' // Background color of a symbol during write-access, like writing to a variable.
'peekViewTitle.background' // Background color of the peek view title area.
'peekViewTitleLabel.foreground' // Color of the peek view title.
'peekViewTitleDescription.foreground' // Color of the peek view title info.
'peekView.border' // Color of the peek view borders and arrow.
'peekViewResult.background' // Background color of the peek view result list.
'peekViewResult.lineForeground' // Foreground color for line nodes in the peek view result list.
'peekViewResult.fileForeground' // Foreground color for file nodes in the peek view result list.
'peekViewResult.selectionBackground' // Background color of the selected entry in the peek view result list.
'peekViewResult.selectionForeground' // Foreground color of the selected entry in the peek view result list.
'peekViewEditor.background' // Background color of the peek view editor.
'peekViewEditorGutter.background' // Background color of the gutter in the peek view editor.
'peekViewResult.matchHighlightBackground' // Match highlight color in the peek view result list.
'peekViewEditor.matchHighlightBackground' // Match highlight color in the peek view editor.