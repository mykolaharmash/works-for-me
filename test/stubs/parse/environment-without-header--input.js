const { ENVIRONMENT_CONTEXT } = require('../../../lib/constants');

module.exports = {
  type: ENVIRONMENT_CONTEXT,
  content: [
    { type: 'tool-bullet', content: '>' },
    { type: 'word', content: 'Sublime' },
    { type: 'word', content: 'Text' },
    { type: 'word', content: '3' },
    { type: 'newline', content: '\n' },
    { type: 'word', content: 'tool' },
    { type: 'word', content: 'description' },
    { type: 'newline', content: '\n' },
    { type: 'tool-bullet', content: '>' },
    { type: 'word', content: 'iTerm' },
    { type: 'word', content: '2' },
    { type: 'word', content: '(https://www.iterm2.com/)' }
  ]
};
