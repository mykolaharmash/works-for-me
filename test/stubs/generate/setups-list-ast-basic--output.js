const {
  SETUPS_LIST_ROOT_CONTEXT,
  SETUPS_LIST_CONTEXT,
  SETUPS_LIST_ITEM_CONTEXT,
  SETUPS_LIST_ITEM_KEY_CONTEXT,
  BIO_CONTEXT,
  BIO_LINE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: SETUPS_LIST_ROOT_CONTEXT,
  content: [
    {
      type: SETUPS_LIST_CONTEXT,
      content: [
        {
          type: SETUPS_LIST_ITEM_CONTEXT,
          content: [
            {
              type: BIO_CONTEXT,
              content: [
                {
                  type: BIO_LINE_CONTEXT,
                  content: [
                    {
                      type: WORD_LEXEME,
                      content: 'name:'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'First'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Guy'
                    },
                    {
                      type: SETUPS_LIST_ITEM_KEY_CONTEXT,
                      content: 'first-guy'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: SETUPS_LIST_ITEM_CONTEXT,
          content: [
            {
              type: BIO_CONTEXT,
              content: [
                {
                  type: BIO_LINE_CONTEXT,
                  content: [
                    {
                      type: WORD_LEXEME,
                      content: 'name:'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Second'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Guy'
                    },
                    {
                      type: SETUPS_LIST_ITEM_KEY_CONTEXT,
                      content: 'second-guy'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
