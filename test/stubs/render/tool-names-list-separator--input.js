const {
  TOOL_NAMES_LIST_CONTEXT,
  TOOL_NAME_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: TOOL_NAMES_LIST_CONTEXT,
  content: [
    {
      type: TOOL_NAME_CONTEXT,
      content: '<span>First</span>'
    },
    {
      type: TOOL_NAME_CONTEXT,
      content: '<span>Second</span>'
    },
    {
      type: TOOL_NAME_CONTEXT,
      content: '<span>Third</span>'
    }
  ]
}
