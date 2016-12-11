const {
  TOOL_BULLET_LEXEME,
  WORD_LEXEME,
  NEWLINE_LEXEME
} = require('../../../lib/constants');

module.exports = [
  { type: TOOL_BULLET_LEXEME, content: '>' },
  { type: WORD_LEXEME, content: 'purpose:' },
  { type: WORD_LEXEME, content: 'some' },
  { type: WORD_LEXEME, content: 'awesome' },
  { type: WORD_LEXEME, content: 'tool' },
  { type: NEWLINE_LEXEME, content: '\n' }
];
