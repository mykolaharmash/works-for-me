const {
  WORD_LEXEME,
  TOOL_BULLET_LEXEME,
  NEWLINE_LEXEME,
  ENVIRONMENT_CONTEXT,
  ENVIRONMENT_HEADER_CONTEXT,
  TOOLS_LIST_CONTEXT,
  ENV_BULLET_LEXEME,
  COMMENT_BULLET_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: ENVIRONMENT_CONTEXT,
  content: [
    {
      type: ENVIRONMENT_HEADER_CONTEXT,
      content: [
        { type: ENV_BULLET_LEXEME, content: '--' },
        { type: WORD_LEXEME, content: 'desktop' },
        { type: NEWLINE_LEXEME, content: '\n' },
        { type: WORD_LEXEME, content: 'desktop' },
        { type: WORD_LEXEME, content: 'env' },
        { type: WORD_LEXEME, content: 'description' },
        { type: NEWLINE_LEXEME, content: '\n' },
        { type: COMMENT_BULLET_LEXEME, content: '//' },
        { type: WORD_LEXEME, content: 'comment' },
        { type: WORD_LEXEME, content: 'one' },
        { type: NEWLINE_LEXEME, content: '\n' }
      ]
    },
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
}
