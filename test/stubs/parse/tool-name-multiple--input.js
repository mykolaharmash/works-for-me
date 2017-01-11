const {
  TOOL_NAME_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants');

module.exports = {
  type: TOOL_NAME_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'some' },
    { type: WORD_LEXEME, content: 'awesome' },
    { type: WORD_LEXEME, content: 'tool' },
    { type: WORD_LEXEME, content: '(https://link.to/awesomeness)' },
    { type: WORD_LEXEME, content: 'second' },
    { type: WORD_LEXEME, content: 'part' },
    { type: WORD_LEXEME, content: '(https://link.to/another/awesomeness)' },
    { type: WORD_LEXEME, content: 'third' }
  ]
};
