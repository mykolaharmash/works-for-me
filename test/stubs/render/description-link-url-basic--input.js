const {
  DESCRIPTION_LINK_URL_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_LINK_URL_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'https://some.url/' },
    { type: WORD_LEXEME, content: 'multi/word' }
  ]
}
