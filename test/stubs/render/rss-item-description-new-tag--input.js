const {
  RSS_ITEM_DESCRIPTION_CONTEXT,
  NEW_SETUP_TAG_TOKEN,
  COMMIT_MESSAGE_CONTEXT
} = require('../../../lib/constants');

module.exports = {
  type: RSS_ITEM_DESCRIPTION_CONTEXT,
  content: [
    {
      type: COMMIT_MESSAGE_CONTEXT,
      content: `${ NEW_SETUP_TAG_TOKEN } John Doe's setup`
    }
  ]
};
