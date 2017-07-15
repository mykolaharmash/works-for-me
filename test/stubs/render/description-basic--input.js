const {
  DESCRIPTION_CONTEXT,
  DESCRIPTION_PARAGRAPH_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_CONTEXT,
  content: [
    {
      type: DESCRIPTION_PARAGRAPH_CONTEXT,
      content: 'test description'
    }
  ]
}
