const {
  BIO_LINE_CONTEXT,
  WORD_LEXEME
} = require('../../../../lib/constants');

module.exports = {
  type: BIO_LINE_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'location:' },
    { type: WORD_LEXEME, content: 'Berlin' },
    { type: WORD_LEXEME, content: 'Germany' }
  ]
};
