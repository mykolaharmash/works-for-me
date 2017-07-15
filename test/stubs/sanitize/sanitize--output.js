const {
  NEWLINE_LEXEME,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = [
  { type: WORD_LEXEME, content: 'name:' },
  { type: WORD_LEXEME, content: 'John' },
  { type: WORD_LEXEME, content: 'Doe' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: WORD_LEXEME, content: 'desktop' },
  { type: NEWLINE_LEXEME, content: '\n' },
  { type: WORD_LEXEME, content: 'desktop' },
  { type: WORD_LEXEME, content: 'env' },
  { type: WORD_LEXEME, content: 'description' },
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
