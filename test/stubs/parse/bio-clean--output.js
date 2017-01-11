const { BIO_CONTEXT } = require('../../../lib/constants');

module.exports = {
  type: BIO_CONTEXT,
  content: [
    {
      type: 'bio-line',
      content: [
        { type: 'word', content: 'name:' },
        { type: 'word', content: 'John' },
        { type: 'word', content: 'Doe' },
        { type: 'newline', content: '\n' }
      ]
    },
    {
      type: 'bio-line',
      content: [
        { type: 'word', content: 'location:' },
        { type: 'word', content: 'Kiev,' },
        { type: 'word', content: 'Ukraine' },
        { type: 'newline', content: '\n' }
      ]
    },
    {
      type: 'bio-line',
      content: [
        { type: 'word', content: 'contact:' },
        { type: 'word', content: 'some@email.com' },
      ]
    }
  ]
};
