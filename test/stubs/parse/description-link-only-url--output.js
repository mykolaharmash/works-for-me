const {
  DESCRIPTION_LINK_CONTEXT,
  DESCRIPTION_LINK_URL_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_LINK_CONTEXT,
  content: [
    {
      type: DESCRIPTION_LINK_URL_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'https://some.url' }
      ]
    }
  ]
}
