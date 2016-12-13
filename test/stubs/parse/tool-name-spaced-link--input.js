const {
  WORD_LEXEME
} = require('../../../lib/constants');

module.exports = [
  { type: WORD_LEXEME, content: 'some' },
  { type: WORD_LEXEME, content: 'awesome' },
  { type: WORD_LEXEME, content: 'tool' },
  { type: WORD_LEXEME, content: '(https://link.to/awesome' },
  { type: WORD_LEXEME, content: 'ness)' }
];
