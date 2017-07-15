const {
  DESCRIPTION_LINK_CONTEXT,
  DESCRIPTION_LINK_TITLE_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_LINK_CONTEXT,
  content: [
    {
      type: DESCRIPTION_LINK_TITLE_CONTEXT,
      content: 'link title'
    }
  ]
}
