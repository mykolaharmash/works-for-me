const {
  TOOL_NAMES_LIST_CONTEXT,
  TOOL_HEAD_CONTEXT,
  WORD_LEXEME,
  NEWLINE_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: TOOL_HEAD_CONTEXT,
  content: [
    {
      type: TOOL_NAMES_LIST_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'some' },
        { type: WORD_LEXEME, content: 'awesome' },
        { type: WORD_LEXEME, content: 'tool' },
        { type: NEWLINE_LEXEME, content: '\n' }
      ]
    }
  ]
}
