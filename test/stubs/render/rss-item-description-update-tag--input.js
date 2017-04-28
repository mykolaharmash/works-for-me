const {
  RSS_ITEM_DESCRIPTION_CONTEXT,
  UPDATE_TAG_TOKEN,
  COMMIT_MESSAGE_CONTEXT
} = require('../../../lib/constants');

module.exports = {
  type: RSS_ITEM_DESCRIPTION_CONTEXT,
  content: [
    {
      type: COMMIT_MESSAGE_CONTEXT,
      content: `${ UPDATE_TAG_TOKEN } John Doe's setup`
    }
  ]
};
