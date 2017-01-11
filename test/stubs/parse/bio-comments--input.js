const { BIO_CONTEXT } = require('../../../lib/constants');

module.exports = {
  type: BIO_CONTEXT,
  content: [
    { type: 'comment-bullet', content: '//' },
    { type: 'word', content: 'some' },
    { type: 'word', content: 'comment' },
    { type: 'newline', content: '\n' },
    { type: 'word', content: 'name:' },
    { type: 'word', content: 'John' },
    { type: 'word', content: 'Doe' },
    { type: 'newline', content: '\n' },
    { type: 'word', content: 'location:' },
    { type: 'word', content: 'Kiev,' },
    { type: 'word', content: 'Ukraine' },
    { type: 'newline', content: '\n' },
    { type: 'comment-bullet', content: '//' },
    { type: 'word', content: 'another' },
    { type: 'word', content: 'comment' },
    { type: 'newline', content: '\n' },
    { type: 'word', content: 'contact:' },
    { type: 'word', content: 'some@email.com' }
  ]
};
