const {
  DESCRIPTION_PARAGRAPH_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants');

module.exports = {
  type: DESCRIPTION_PARAGRAPH_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'test' },
    { type: WORD_LEXEME, content: 'paragraph' }
  ]
};
