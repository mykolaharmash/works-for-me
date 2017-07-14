const {
  SETUPS_LIST_ROOT_CONTEXT,
  SETUPS_LIST_CONTEXT,
  SETUPS_LIST_ITEM_CONTEXT,
  SETUPS_LIST_ITEM_KEY_CONTEXT,
  SETUP_CREATE_DATE_CONTEXT,
  SETUP_UPDATE_DATE_CONTEXT,
  BIO_CONTEXT,
  BIO_LINE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants');

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
              type: SETUP_CREATE_DATE_CONTEXT,
              content: '2017-01-02T08:28:53+02:00'
            },
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
                      content: 'Some'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Guy'
                    },
                    {
                      type: SETUPS_LIST_ITEM_KEY_CONTEXT,
                      content: 'some-guy'
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
              type: SETUP_UPDATE_DATE_CONTEXT,
              content: '2017-03-07T10:32:51+02:00'
            },
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
                      content: 'Some'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Other'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Guy'
                    },
                    {
                      type: SETUPS_LIST_ITEM_KEY_CONTEXT,
                      content: 'some-other-guy'
                    }
                  ]
                },
                {
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
                      content: 'developer'
                    },
                    {
                      type: SETUPS_LIST_ITEM_KEY_CONTEXT,
                      content: 'some-other-guy'
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
};
