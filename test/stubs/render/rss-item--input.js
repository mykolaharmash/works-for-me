const {
  RSS_ITEM_CONTEXT,
  RSS_ITEM_TITLE_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: RSS_ITEM_CONTEXT,
  content: [
    {
      type: RSS_ITEM_TITLE_CONTEXT,
      content: '<title>item title</title>'
    }
  ]
}
