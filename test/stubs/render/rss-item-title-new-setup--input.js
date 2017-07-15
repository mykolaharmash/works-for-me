const {
  RSS_ITEM_TITLE_CONTEXT,
  RSS_NEW_SETUP_TITLE_CONTEXT,
  BIO_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: RSS_ITEM_TITLE_CONTEXT,
  content: [
    {
      type: RSS_NEW_SETUP_TITLE_CONTEXT,
      content: 'New setup:'
    },
    {
      type: BIO_CONTEXT,
      content: 'John Doe (Software Engineer)'
    }
  ]
}
