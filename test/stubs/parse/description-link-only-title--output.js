const {
  DESCRIPTION_LINK_CONTEXT,
  DESCRIPTION_LINK_TITLE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_LINK_CONTEXT,
  content: [
    {
      type: DESCRIPTION_LINK_TITLE_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'link' },
        { type: WORD_LEXEME, content: 'title' }
      ]
    }
  ]
}
