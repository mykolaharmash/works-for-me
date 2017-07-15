const {
  TOOL_NAME_CONTEXT,
  TOOL_TITLE_CONTEXT,
  TOOL_LINK_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: TOOL_NAME_CONTEXT,
  content: [
    {
      type: TOOL_TITLE_CONTEXT,
      content: 'tool title'
    },
    {
      type: TOOL_LINK_CONTEXT,
      content: 'http://tool.url/test'
    }
  ]
}
