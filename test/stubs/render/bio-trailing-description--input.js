const {
  BIO_CONTEXT,
  BIO_LINE_CONTEXT,
  DESCRIPTION_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: BIO_CONTEXT,
  content: [
    {
      type: BIO_LINE_CONTEXT,
      content: '<div class="bio-line">first</div>'
    },
    {
      type: BIO_LINE_CONTEXT,
      content: '<div class="bio-line">second</div>'
    },
    {
      type: DESCRIPTION_CONTEXT,
      content: '<div class="description">trailing description\nmultiline</div>'
    }
  ]
}
