const {
  BIO_LINE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: BIO_LINE_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'name:' },
    { type: WORD_LEXEME, content: 'John' },
    { type: WORD_LEXEME, content: 'Doe' }
  ]
}
