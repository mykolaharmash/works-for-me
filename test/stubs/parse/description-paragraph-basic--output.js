const {
  DESCRIPTION_TEXT_CONTEXT,
  DESCRIPTION_LINK_CONTEXT,
  DESCRIPTION_PARAGRAPH_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_PARAGRAPH_CONTEXT,
  content: [
    {
      type: DESCRIPTION_TEXT_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'some' },
        { type: WORD_LEXEME, content: 'dummy' },
        { type: WORD_LEXEME, content: 'text' },
      ]
    },
    {
      type: DESCRIPTION_LINK_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'with' },
        { type: WORD_LEXEME, content: 'link' },
        { type: WORD_LEXEME, content: '(https://some.link)' },
      ]
    },
    {
      type: DESCRIPTION_TEXT_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'another' },
        { type: WORD_LEXEME, content: 'text' },
      ]
    }
  ]
}
