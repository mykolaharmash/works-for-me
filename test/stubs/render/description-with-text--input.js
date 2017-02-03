const {
  DESCRIPTION_CONTEXT,
  WORD_LEXEME,
  NEWLINE_LEXEME
} = require('../../../lib/constants');

module.exports = {
  type: DESCRIPTION_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'some' },
    { type: WORD_LEXEME, content: 'text' },
    { type: NEWLINE_LEXEME, content: '\n' },
    { type: WORD_LEXEME, content: 'and' },
    { type: WORD_LEXEME, content: 'little' },
    { type: WORD_LEXEME, content: 'more' },
    { type: NEWLINE_LEXEME, content: '\n' }
  ]
};
