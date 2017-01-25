const {
  TOOL_NAMES_LIST_CONTEXT,
  TOOL_NAME_CONTEXT
} = require('../../../lib/constants');

module.exports = {
  type: TOOL_NAMES_LIST_CONTEXT,
  content: [
    {
      type: TOOL_NAME_CONTEXT,
      content: 'First'
    },
    {
      type: TOOL_NAME_CONTEXT,
      content: 'Second'
    },
    {
      type: TOOL_NAME_CONTEXT,
      content: 'Third'
    }
  ]
};
