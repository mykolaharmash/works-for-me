const {
  RSS_ITEM_AUTHOR_CONTEXT,
  BIO_CONTEXT
} = require('../../../lib/constants');

module.exports = {
  type: RSS_ITEM_AUTHOR_CONTEXT,
  content: [
    {
      type: BIO_CONTEXT,
      content: 'John Doe (Software Developer)'
    }
  ]
};
