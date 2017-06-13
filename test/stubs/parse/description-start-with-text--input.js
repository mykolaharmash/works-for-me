const {
  DESCRIPTION_CONTEXT,
  NEWLINE_TOKEN,
  NEWLINE_LEXEME,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'description' },
    { type: WORD_LEXEME, content: 'goes' },
    { type: NEWLINE_LEXEME, content: NEWLINE_TOKEN },
    { type: WORD_LEXEME, content: 'here' },
    { type: NEWLINE_LEXEME, content: NEWLINE_TOKEN }
  ]
}
