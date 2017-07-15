const {
  RSS_ITEM_PUB_DATE_CONTEXT,
  COMMIT_DATE_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: RSS_ITEM_PUB_DATE_CONTEXT,
  content: [
    {
      type: COMMIT_DATE_CONTEXT,
      content: '2017-03-16T17:15:20+01:00'
    }
  ]
}
