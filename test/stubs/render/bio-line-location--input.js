const {
  BIO_LINE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants');

module.exports = {
  type: BIO_LINE_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'location:' },
    { type: WORD_LEXEME, content: 'Someplace' },
    { type: WORD_LEXEME, content: 'else' }
  ]
};
