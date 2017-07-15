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
        { type: WORD_LEXEME, content: './some-' },
        { type: WORD_LEXEME, content: 'image.jpg' }
      ]
    },
    {
      type: IMAGE_TITLE_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'another' },
        { type: WORD_LEXEME, content: 'one' }
      ]
    },
    {
      type: IMAGE_URL_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'http://some.com/another-image.jpg' }
      ]
    }
  ]
}
