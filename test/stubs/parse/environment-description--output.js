const {
  PLAIN_TEXT_CONTEXT,
  COMMENT_LINE_CONTEXT
} = require('../../../lib/constants');

module.exports = [
  {
    type: PLAIN_TEXT_CONTEXT,
    content: [
      { type: 'word', content: 'description' },
      { type: 'word', content: 'line' },
      { type: 'word', content: 'one' },
      { type: 'newline', content: '\n' },
      { type: 'word', content: 'line' },
      { type: 'word', content: 'two' },
      { type: 'newline', content: '\n' }
    ]
  },
  {
    type: COMMENT_LINE_CONTEXT,
    content: [
      { type: 'comment-bullet', content: '//' },
      { type: 'word', content: 'comment' },
      { type: 'word', content: 'one' },
      { type: 'newline', content: '\n' }
    ]
  },
  {
    type: PLAIN_TEXT_CONTEXT,
    content: [
      { type: 'word', content: 'another' },
      { type: 'word', content: 'description' },
      { type: 'word', content: 'line' }
    ]
  }
];
