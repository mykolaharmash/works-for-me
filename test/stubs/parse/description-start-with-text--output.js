const {
  DESCRIPTION_CONTEXT,
  DESCRIPTION_PARAGRAPH_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_CONTEXT,
  content: [
    {
      type: DESCRIPTION_PARAGRAPH_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'description' },
        { type: WORD_LEXEME, content: 'goes' }
      ]
    },
    {
      type: DESCRIPTION_PARAGRAPH_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'here' }
      ]
    }
  ]
}
