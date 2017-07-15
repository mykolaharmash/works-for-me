const {
  DESCRIPTION_LINK_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_LINK_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'link' },
    { type: WORD_LEXEME, content: 'title' },
    { type: WORD_LEXEME, content: '(https://some.url)' },
    { type: WORD_LEXEME, content: 'another' },
    { type: WORD_LEXEME, content: 'title' }
  ]
}
