const {
  TOOL_NAMES_LIST_CONTEXT,
  TOOL_NAME_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants');

module.exports = {
  type: TOOL_NAMES_LIST_CONTEXT,
  content: [
    {
      type: TOOL_NAME_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'some' },
        { type: WORD_LEXEME, content: 'awesome' },
        { type: WORD_LEXEME, content: 'tool' },
        { type: WORD_LEXEME, content: '(http://link.to/awesome/tool)' }
      ]
    }
  ]
};
