const {
  IMAGE_TITLE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: IMAGE_TITLE_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'some' },
    { type: WORD_LEXEME, content: 'title' }
  ]
}
