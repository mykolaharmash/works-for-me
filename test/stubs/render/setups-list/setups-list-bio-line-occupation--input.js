const {
  BIO_LINE_CONTEXT,
  SETUPS_LIST_ITEM_KEY_CONTEXT,
  WORD_LEXEME
} = require('../../../../lib/constants')

module.exports = {
  type: BIO_LINE_CONTEXT,
  content: [
    {
      type: WORD_LEXEME,
      content: 'occupation:'
    },
    {
      type: WORD_LEXEME,
      content: 'Software'
    },
    {
      type: WORD_LEXEME,
      content: 'Developer'
    },
    {
      type: SETUPS_LIST_ITEM_KEY_CONTEXT,
      content: 'john-doe'
    }
  ]
}
