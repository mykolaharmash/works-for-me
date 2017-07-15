const {
  BIO_LINE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: BIO_LINE_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'occupation:' },
    { type: WORD_LEXEME, content: 'Some' },
    { type: WORD_LEXEME, content: 'useful' },
    { type: WORD_LEXEME, content: 'info' }
  ]
}
