const {
  NEWLINE_LEXEME,
  WORD_LEXEME,
  ENV_BULLET_LEXEME,
  COMMENT_BULLET_LEXEME,
  TOOL_BULLET_LEXEME,
  IMAGE_BULLET_LEXEME
} = require('../../../lib/constants')

module.exports = [
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: WORD_LEXEME, content: 'name:' },
  { type: WORD_LEXEME, content: 'John' },
  { type: WORD_LEXEME, content: 'Doe' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: ENV_BULLET_LEXEME, content: '--' },
  { type: WORD_LEXEME, content: 'desktop' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: COMMENT_BULLET_LEXEME, content: '//' },
  { type: WORD_LEXEME, content: 'comment' },
  { type: WORD_LEXEME, content: 'one' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: TOOL_BULLET_LEXEME, content: '>' },
  { type: WORD_LEXEME, content: 'purpose:' },
  { type: WORD_LEXEME, content: 'tool' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: WORD_LEXEME, content: 'some' },
  { type: WORD_LEXEME, content: 'description' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: IMAGE_BULLET_LEXEME, content: '#' },
  { type: WORD_LEXEME, content: 'some' },
  { type: WORD_LEXEME, content: 'image' },
  { type: WORD_LEXEME, content: '(./some-image.jpg)' },
  { type: COMMENT_BULLET_LEXEME, content: '//' },
  { type: WORD_LEXEME, content: 'comment' },
  { type: WORD_LEXEME, content: 'two' }
];
