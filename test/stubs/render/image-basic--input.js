const {
  IMAGE_CONTEXT,
  IMAGE_TITLE_CONTEXT,
  IMAGE_URL_CONTEXT
} = require('../../../lib/constants');

module.exports = {
  type: IMAGE_CONTEXT,
  content: [
    {
      type: IMAGE_TITLE_CONTEXT,
      content: 'image title'
    },
    {
      type: IMAGE_URL_CONTEXT,
      content: './some-image.png'
    }
  ]
};
