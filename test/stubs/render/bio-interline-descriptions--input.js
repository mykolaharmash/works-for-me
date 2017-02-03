const {
  BIO_CONTEXT,
  BIO_LINE_CONTEXT,
  DESCRIPTION_CONTEXT
} = require('../../../lib/constants');

module.exports = {
  type: BIO_CONTEXT,
  content: [
    {
      type: DESCRIPTION_CONTEXT,
      content: '<div class="description">opening description</div>'
    },
    {
      type: BIO_LINE_CONTEXT,
      content: '<div class="bio-line">first</div>'
    },
    {
      type: DESCRIPTION_CONTEXT,
      content: '<div class="description">some interline description</div>'
    },
    {
      type: BIO_LINE_CONTEXT,
      content: '<div class="bio-line">second</div>'
    }
  ]
};
