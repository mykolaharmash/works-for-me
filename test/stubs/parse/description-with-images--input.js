const {
  DESCRIPTION_CONTEXT,
  NEWLINE_TOKEN,
  NEWLINE_LEXEME,
  WORD_LEXEME,
  IMAGE_BULLET_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_CONTEXT,
  content: [
    { type: IMAGE_BULLET_LEXEME, content: '#' },
    { type: WORD_LEXEME, content: 'starting' },
    { type: WORD_LEXEME, content: 'image' },
    { type: WORD_LEXEME, content: '(./start.jpg)' },
    { type: NEWLINE_LEXEME, content: NEWLINE_TOKEN },
    { type: NEWLINE_LEXEME, content: NEWLINE_TOKEN },
    { type: WORD_LEXEME, content: 'description' },
    { type: WORD_LEXEME, content: 'goes' },
    { type: NEWLINE_LEXEME, content: NEWLINE_TOKEN },
    { type: IMAGE_BULLET_LEXEME, content: '#' },
    { type: WORD_LEXEME, content: 'another' },
    { type: WORD_LEXEME, content: 'image' },
    { type: WORD_LEXEME, content: '(./middle.jpg)' },
    { type: NEWLINE_LEXEME, content: NEWLINE_TOKEN },
    { type: WORD_LEXEME, content: 'another' },
    { type: WORD_LEXEME, content: 'description' },
    { type: WORD_LEXEME, content: 'paragraph' },
    { type: NEWLINE_LEXEME, content: NEWLINE_TOKEN },
    { type: NEWLINE_LEXEME, content: NEWLINE_TOKEN },
    { type: IMAGE_BULLET_LEXEME, content: '#' },
    { type: WORD_LEXEME, content: 'also' },
    { type: WORD_LEXEME, content: 'goes' },
    { type: WORD_LEXEME, content: 'here' },
    { type: WORD_LEXEME, content: '(./end.jpg)' }
  ]
}
