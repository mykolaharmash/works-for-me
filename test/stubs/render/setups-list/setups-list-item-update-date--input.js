const {
  BIO_CONTEXT,
  SETUPS_LIST_ITEM_CONTEXT,
  SETUP_UPDATE_DATE_CONTEXT
} = require('../../../../lib/constants');

module.exports = {
  type: SETUPS_LIST_ITEM_CONTEXT,
  content: [
    {
      type: SETUP_UPDATE_DATE_CONTEXT,
      content: '2017-02-02T08:28:53+02:00'
    },
    {
      type: BIO_CONTEXT,
      content: 'some guy'
    }
  ]
};
