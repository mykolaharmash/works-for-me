const {
  NEWLINE_LEXEME,
  WORD_LEXEME,
  COMMENT_BULLET_LEXEME
} = require('../../../lib/constants')

module.exports = [
  { type: COMMENT_BULLET_LEXEME, content: '//' },
  { type: WORD_LEXEME, content: 'firstline' },
  { type: WORD_LEXEME, content: 'comment' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: WORD_LEXEME, content: 'name:' },
  { type: WORD_LEXEME, content: 'John' },
  { type: WORD_LEXEME, content: 'Doe' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: COMMENT_BULLET_LEXEME, content: '//' },
  { type: WORD_LEXEME, content: 'some' },
  { type: WORD_LEXEME, content: 'comment' },
  { type: WORD_LEXEME, content: 'test' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: WORD_LEXEME, content: 'desktop' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: WORD_LEXEME, content: 'desktop' },
  { type: WORD_LEXEME, content: 'env' },
  { type: WORD_LEXEME, content: 'description' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: COMMENT_BULLET_LEXEME, content: '//' },
  { type: WORD_LEXEME, content: 'comment' },
  { type: WORD_LEXEME, content: 'one' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: WORD_LEXEME, content: 'Sublime' },
  { type: WORD_LEXEME, content: 'Text' },
  { type: WORD_LEXEME, content: '3' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: WORD_LEXEME, content: 'tool' },
  { type: WORD_LEXEME, content: 'description' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: WORD_LEXEME, content: 'mobile' }
]
