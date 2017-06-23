const {
  IMAGE_CONTEXT,
  IMAGE_TITLE_CONTEXT,
  IMAGE_URL_CONTEXT,
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
    },
    {
      type: IMAGE_URL_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'https://some.site/image.jpg' }
      ]
    }
  ]
}
