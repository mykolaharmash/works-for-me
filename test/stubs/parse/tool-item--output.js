const {
  TOOL_ITEM_CONTEXT,
  TOOL_BULLET_LEXEME,
  WORD_LEXEME,
  NEWLINE_LEXEME,
  COMMENT_BULLET_LEXEME,
  TOOL_HEAD_CONTEXT,
  DESCRIPTION_CONTEXT
} = require('../../../lib/constants');

module.exports = {
  type: TOOL_ITEM_CONTEXT,
  content: [
    {
      type: TOOL_HEAD_CONTEXT,
      content: [
        { type: TOOL_BULLET_LEXEME, content: '>' },
        { type: WORD_LEXEME, content: 'purpose:' },
        { type: WORD_LEXEME, content: 'some' },
        { type: WORD_LEXEME, content: 'awesome' },
        { type: WORD_LEXEME, content: 'tool' },
        { type: NEWLINE_LEXEME, content: '\n' }
      ]
    },
    {
      type: DESCRIPTION_CONTEXT,
      content: [
        { type: WORD_LEXEME, content: 'tool' },
        { type: WORD_LEXEME, content: 'description' },
        { type: NEWLINE_LEXEME, content: '\n' },
        { type: COMMENT_BULLET_LEXEME, content: '//' },
        { type: WORD_LEXEME, content: 'small' },
        { type: WORD_LEXEME, content: 'comment' },
        { type: NEWLINE_LEXEME, content: '\n' },
        { type: WORD_LEXEME, content: 'more' },
        { type: WORD_LEXEME, content: 'multiline' },
        { type: WORD_LEXEME, content: 'description' },
        { type: NEWLINE_LEXEME, content: '\n' },
        { type: WORD_LEXEME, content: 'here' }
      ]
    }
  ]
};
