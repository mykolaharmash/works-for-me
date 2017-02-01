const { DESCRIPTION_CONTEXT } = require('../../../lib/constants');

module.exports = {
  type: DESCRIPTION_CONTEXT,
  content: [
    { type: 'word', content: 'description' },
    { type: 'word', content: 'line' },
    { type: 'word', content: 'one' },
    { type: 'newline', content: '\n' },
    { type: 'word', content: 'line' },
    { type: 'word', content: 'two' },
    { type: 'newline', content: '\n' },
    { type: 'word', content: 'another' },
    { type: 'word', content: 'description' },
    { type: 'word', content: 'line' }
  ]
};
