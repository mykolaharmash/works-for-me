const { ROOT_CONTEXT } = require('../../../lib/constants');

module.exports = {
  type: ROOT_CONTEXT,
  content: [
    { type: 'newline', content: '\n' },
    { type: 'word', content: 'name:' },
    { type: 'word', content: 'John' },
    { type: 'word', content: 'Doe' },
    { type: 'newline', content: '\n' },
    { type: 'newline', content: '\n' },
    { type: 'env-bullet', content: '--' },
    { type: 'word', content: 'desktop' },
    { type: 'newline', content: '\n' },
    { type: 'word', content: 'desktop' },
    { type: 'word', content: 'env' },
    { type: 'word', content: 'description' },
    { type: 'newline', content: '\n' },
    { type: 'comment-bullet', content: '//' },
    { type: 'word', content: 'comment' },
    { type: 'word', content: 'one' },
    { type: 'newline', content: '\n' },
    { type: 'tool-bullet', content: '>' },
    { type: 'word', content: 'editor:' },
    { type: 'word', content: 'Sublime' },
    { type: 'word', content: 'Text' },
    { type: 'word', content: '3' },
    { type: 'newline', content: '\n' },
    { type: 'word', content: 'tool' },
    { type: 'word', content: 'description' },
    { type: 'newline', content: '\n' },
    { type: 'env-bullet', content: '--' },
    { type: 'word', content: 'mobile' }
  ]
};
