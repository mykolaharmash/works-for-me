const { SETUP_CONTEXT } = require('../../../lib/constants');

module.exports = {
  type: SETUP_CONTEXT,
  content: [
    { type: 'tool-bullet', content: '>' },
    { type: 'word', content: 'Sublime' },
    { type: 'word', content: 'Text' },
    { type: 'word', content: '3' },
    { type: 'newline', content: '\n' },
    { type: 'word', content: 'tool' },
    { type: 'word', content: 'description' },
    { type: 'newline', content: '\n' },
    { type: 'env-bullet', content: '--' },
    { type: 'word', content: 'mobile' },
    { type: 'newline', content: '\n' },
    { type: 'tool-bullet', content: '>' },
    { type: 'word', content: 'Safari' }
  ]
};
