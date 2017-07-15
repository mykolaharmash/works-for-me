const {
  DESCRIPTION_LINK_CONTEXT,
  DESCRIPTION_LINK_URL_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: DESCRIPTION_LINK_CONTEXT,
  content: [
    {
      type: DESCRIPTION_LINK_URL_CONTEXT,
      content: 'https://some.url/test'
    }
  ]
}
