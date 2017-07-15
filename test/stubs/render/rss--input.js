const {
  RSS_CONTEXT,
  RSS_ITEM_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: RSS_CONTEXT,
  content: [
    {
      type: RSS_ITEM_CONTEXT,
      content: '<item>item 0</item>'
    },
    {
      type: RSS_ITEM_CONTEXT,
      content: '<item>item 1</item>'
    }
  ]
}
