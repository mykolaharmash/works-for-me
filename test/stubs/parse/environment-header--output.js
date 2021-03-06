const { ENVIRONMENT_HEADER_CONTEXT } = require('../../../lib/constants')

module.exports = {
  type: ENVIRONMENT_HEADER_CONTEXT,
  content: [
    {
      type: 'environment-title',
      content: [
        { type: 'env-bullet', content: '--' },
        { type: 'word', content: 'desktop' },
        { type: 'newline', content: '\n' }
      ]
    },
    {
      type: 'description',
      content: [
        { type: 'word', content: 'desktop' },
        { type: 'word', content: 'env' },
        { type: 'word', content: 'description' },
        { type: 'newline', content: '\n' },
        { type: 'comment-bullet', content: '//' },
        { type: 'word', content: 'comment' },
        { type: 'word', content: 'one' },
        { type: 'newline', content: '\n' }
      ]
    }
  ]
}
