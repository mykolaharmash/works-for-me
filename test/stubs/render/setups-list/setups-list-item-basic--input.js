const {
  SETUPS_LIST_ITEM_CONTEXT,
  SETUPS_LIST_ITEM_KEY_CONTEXT
} = require('../../../../lib/constants');

module.exports = {
  type: SETUPS_LIST_ITEM_CONTEXT,
  content: [
    {
      type: SETUPS_LIST_ITEM_KEY_CONTEXT,
      content: 'setup-key'
    }
  ]
};
