const {
  BIO_CONTEXT,
  BIO_LINE_CONTEXT
} = require('../../../../lib/constants')

module.exports = {
  type: BIO_CONTEXT,
  content: [
    {
      type: BIO_LINE_CONTEXT,
      content: '<div>first line</div>'
    },
    {
      type: BIO_LINE_CONTEXT,
      content: '<div>second line</div>'
    }
  ]

}
