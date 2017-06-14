const {
  DESCRIPTION_TEXT,
  DESCRIPTION_LINK,
  DESCRIPTION_PARAGRAPH_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_PARAGRAPH_CONTEXT,
  content: [
    {
      type: DESCRIPTION_TEXT,
      content: [
        { type: WORD_LEXEME, content: 'some' },
        { type: WORD_LEXEME, content: 'dummy' },
        { type: WORD_LEXEME, content: 'text' },
      ]
    },
    {
      type: DESCRIPTION_LINK,
      content: [
        { type: WORD_LEXEME, content: '<with' },
        { type: WORD_LEXEME, content: 'link' },
        { type: WORD_LEXEME, content: '(https://some.link)>' },
      ]
    },
    {
      type: DESCRIPTION_TEXT,
      content: [
        { type: WORD_LEXEME, content: 'another' },
        { type: WORD_LEXEME, content: 'text' },
      ]
    }
  ]
}
