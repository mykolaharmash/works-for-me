const {
  SETUPS_LIST_ROOT_CONTEXT,
  SETUPS_LIST_CONTEXT,
  SETUPS_LIST_ITEM_CONTEXT,
  SETUPS_LIST_ITEM_KEY_CONTEXT,
  BIO_CONTEXT,
  BIO_LINE_CONTEXT,
  WORD_LEXEME,
  SETUP_LATEST_COMMIT_DATE_CONTEXT
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
              type: SETUPS_LIST_ITEM_KEY_CONTEXT,
              content: 'first-guy'
            },
            {
              type:  SETUP_LATEST_COMMIT_DATE_CONTEXT,
              content: '2017-02-02T08:28:53Z'
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
                      content: 'First'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Guy'
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
              type: SETUPS_LIST_ITEM_KEY_CONTEXT,
              content: 'second-guy'
            },
            {
              type:  SETUP_LATEST_COMMIT_DATE_CONTEXT,
              content: '2016-12-29T17:54:01Z'
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
                      content: 'Second'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Guy'
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
