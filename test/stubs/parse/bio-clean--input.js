const { BIO_CONTEXT } = require('../../../lib/constants')

module.exports = {
  type: BIO_CONTEXT,
  content: [
    { type: 'word', content: 'name:' },
    { type: 'word', content: 'John' },
    { type: 'word', content: 'Doe' },
    { type: 'newline', content: '\n' },
    { type: 'word', content: 'location:' },
    { type: 'word', content: 'Kiev,' },
    { type: 'word', content: 'Ukraine' },
    { type: 'newline', content: '\n' },
    { type: 'word', content: 'link:' },
    { type: 'word', content: 'some@email.com' }
  ]
}
