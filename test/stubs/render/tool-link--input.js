const {
  TOOL_LINK_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: TOOL_LINK_CONTEXT,
  content: [
    {
      type: WORD_LEXEME,
      content: 'http://some.url/test'
    }
  ]
}
