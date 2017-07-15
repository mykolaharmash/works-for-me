const {
  RSS_ITEM_DESCRIPTION_CONTEXT,
  COMMIT_MESSAGE_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: RSS_ITEM_DESCRIPTION_CONTEXT,
  content: [
    {
      type: COMMIT_MESSAGE_CONTEXT,
      content: `John Doe's setup`
    }
  ]
}
