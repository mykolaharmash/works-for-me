const {
  RSS_ITEM_LINK_CONTEXT,
  SETUP_URL_CONTEXT
} = require('../../../lib/constants');

module.exports = {
  type: RSS_ITEM_LINK_CONTEXT,
  content: [
    {
      type: SETUP_URL_CONTEXT,
      content: 'https://test.html'
    }
  ]
};
