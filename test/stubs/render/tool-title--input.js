const {
  TOOL_TITLE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants');

module.exports = {
  type: TOOL_TITLE_CONTEXT,
  content: [
    {
      type: WORD_LEXEME,
      content: 'Tool'
    },
    {
      type: WORD_LEXEME,
      content: 'title'
    },
    {
      type: WORD_LEXEME,
      content: 'test'
    }
  ]
};
