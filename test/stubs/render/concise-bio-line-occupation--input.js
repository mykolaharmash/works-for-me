const {
  BIO_LINE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants');

module.exports = {
  type: BIO_LINE_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'occupation:' },
    { type: WORD_LEXEME, content: 'Software' },
    { type: WORD_LEXEME, content: 'Developer' }
  ]
};
