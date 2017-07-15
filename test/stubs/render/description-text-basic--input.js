const {
  DESCRIPTION_TEXT_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_TEXT_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'some' },
    { type: WORD_LEXEME, content: 'text' },
    { type: WORD_LEXEME, content: 'here' }
  ]
}
