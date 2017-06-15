const {
  DESCRIPTION_PARAGRAPH_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_PARAGRAPH_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'some' },
    { type: WORD_LEXEME, content: 'dummy' },
    { type: WORD_LEXEME, content: 'text' },
    { type: WORD_LEXEME, content: '<>' },
    { type: WORD_LEXEME, content: 'another' },
    { type: WORD_LEXEME, content: 'text' }
  ]
}
