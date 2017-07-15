const {
  TOOL_NAMES_LIST_CONTEXT,
  WORD_LEXEME,
  NEWLINE_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: TOOL_NAMES_LIST_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'first' },
    { type: WORD_LEXEME, content: 'awesome' },
    { type: WORD_LEXEME, content: 'tool' },
    { type: WORD_LEXEME, content: '(http://link.to/awesome/tool),' },
    { type: WORD_LEXEME, content: 'second' },
    { type: WORD_LEXEME, content: 'awesome' },
    { type: WORD_LEXEME, content: 'tool,' },
    { type: WORD_LEXEME, content: 'third' },
    { type: WORD_LEXEME, content: 'awesome' },
    { type: WORD_LEXEME, content: 'tool' },
    { type: NEWLINE_LEXEME, content: '\n' }
  ]
}
