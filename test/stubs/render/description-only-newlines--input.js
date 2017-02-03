const {
  DESCRIPTION_CONTEXT,
  NEWLINE_LEXEME
} = require('../../../lib/constants');

module.exports = {
  type: DESCRIPTION_CONTEXT,
  content: [
    { type: NEWLINE_LEXEME, content: '\n' },
    { type: NEWLINE_LEXEME, content: '\n' }
  ]
};
