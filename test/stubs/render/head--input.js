const {
  HEAD_CONTEXT,
  HEAD_TITLE_CONTEXT,
  HEAD_DESCRIPTION_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: HEAD_CONTEXT,
  content: [
    {
      type: HEAD_TITLE_CONTEXT,
      content: 'John Doe'
    },
    {
      type: HEAD_DESCRIPTION_CONTEXT,
      content: 'John Doe\'s software setup'
    }
  ]
}
