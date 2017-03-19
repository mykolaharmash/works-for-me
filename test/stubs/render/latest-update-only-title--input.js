const {
  SETUP_LATEST_UPDATE_CONTEXT,
  SETUP_UPDATE_DATE_CONTEXT,
  SETUP_UPDATE_MESSAGE_CONTEXT
} = require('../../../lib/constants');

module.exports = {
  type: SETUP_LATEST_UPDATE_CONTEXT,
  content: [
    {
      type: SETUP_UPDATE_DATE_CONTEXT,
      content: '2017-01-20T16:46:11+01:00'
    },
    {
      type: SETUP_UPDATE_MESSAGE_CONTEXT,
      content: `
        update: Switch to WebStorm
      `
    }

  ]
};
