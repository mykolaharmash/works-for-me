const {
  WORD_LEXEME,
  TOOL_BULLET_LEXEME,
  NEWLINE_LEXEME,
  ENVIRONMENT_CONTEXT,
  TOOLS_LIST_CONTEXT
} = require('../../../lib/constants');

module.exports = {
  type: ENVIRONMENT_CONTEXT,
  content: [
    {
      type: TOOLS_LIST_CONTEXT,
      content: [
        { type: TOOL_BULLET_LEXEME, content: '>' },
        { type: WORD_LEXEME, content: 'Sublime' },
        { type: WORD_LEXEME, content: 'Text' },
        { type: WORD_LEXEME, content: '3' },
        { type: NEWLINE_LEXEME, content: '\n' },
        { type: WORD_LEXEME, content: 'tool' },
        { type: WORD_LEXEME, content: 'description' },
        { type: NEWLINE_LEXEME, content: '\n' },
        { type: TOOL_BULLET_LEXEME, content: '>' },
        { type: WORD_LEXEME, content: 'iTerm' },
        { type: WORD_LEXEME, content: '2' },
        { type: WORD_LEXEME, content: '(https://www.iterm2.com/)' }
      ]
    }
  ]
};
