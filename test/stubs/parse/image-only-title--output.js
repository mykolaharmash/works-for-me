const {
  IMAGE_CONTEXT,
  IMAGE_TITLE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: IMAGE_CONTEXT,
  content: [
    {
      type: IMAGE_TITLE_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'some' },
        { type: WORD_LEXEME, content: 'image' }
      ]
    }
  ]
}
