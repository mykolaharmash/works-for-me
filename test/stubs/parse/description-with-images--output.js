const {
  DESCRIPTION_CONTEXT,
  DESCRIPTION_PARAGRAPH_CONTEXT,
  WORD_LEXEME,
  IMAGE_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_CONTEXT,
  content: [
    {
      type: IMAGE_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'starting' },
        { type: WORD_LEXEME, content: 'image' },
        { type: WORD_LEXEME, content: '(./start.jpg)' }
      ]
    },
    {
      type: DESCRIPTION_PARAGRAPH_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'description' },
        { type: WORD_LEXEME, content: 'goes' }
      ]
    },
    {
      type: IMAGE_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'another' },
        { type: WORD_LEXEME, content: 'image' },
        { type: WORD_LEXEME, content: '(./middle.jpg)' }
      ]
    },
    {
      type: DESCRIPTION_PARAGRAPH_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'another' },
        { type: WORD_LEXEME, content: 'description' },
        { type: WORD_LEXEME, content: 'paragraph' }
      ]
    },
    {
      type: IMAGE_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'also' },
        { type: WORD_LEXEME, content: 'goes' },
        { type: WORD_LEXEME, content: 'here' },
        { type: WORD_LEXEME, content: '(./end.jpg)' }
      ]
    }
  ]
}
