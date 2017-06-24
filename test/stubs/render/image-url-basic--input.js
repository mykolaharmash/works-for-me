const {
  IMAGE_URL_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: IMAGE_URL_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'https://some.url/' },
    { type: WORD_LEXEME, content: 'multi/word' }
  ]
}
