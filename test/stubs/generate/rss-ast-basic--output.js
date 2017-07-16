const {
  BASE_URL,
  BIO_CONTEXT,
  RSS_CONTEXT,
  RSS_ITEM_CONTEXT,
  RSS_ITEM_TITLE_CONTEXT,
  RSS_NEW_SETUP_TITLE_CONTEXT,
  RSS_UPDATE_SETUP_TITLE_CONTEXT,
  RSS_ITEM_DESCRIPTION_CONTEXT,
  RSS_ITEM_AUTHOR_CONTEXT,
  RSS_ITEM_PUB_DATE_CONTEXT,
  RSS_ITEM_ID_CONTEXT,
  RSS_ITEM_LINK_CONTEXT,
  DESCRIPTION_CONTEXT,
  NEWLINE_LEXEME,
  BIO_LINE_CONTEXT,
  WORD_LEXEME,
  COMMIT_HASH_CONTEXT,
  COMMIT_DATE_CONTEXT,
  COMMIT_MESSAGE_CONTEXT,
  SETUP_URL_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: RSS_CONTEXT,
  content: [
    {
      type: RSS_ITEM_CONTEXT,
      content: [
        {
          type: RSS_ITEM_TITLE_CONTEXT,
          content: [
            {
              type: RSS_NEW_SETUP_TITLE_CONTEXT,
              content: 'New setup:'
            },
            {
              type: BIO_CONTEXT,
              content: [
                {
                  type: DESCRIPTION_CONTEXT,
                  content: []
                },
                {
                  type: BIO_LINE_CONTEXT,
                  content: [
                    {
                      type: WORD_LEXEME,
                      content: 'name:'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'John'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Doe'
                    },
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
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
                      content: 'Designer'
                    },
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
                    }
                  ]
                },
                {
                  type: DESCRIPTION_CONTEXT,
                  content: []
                }
              ]
            }
          ]
        },
        {
          type: RSS_ITEM_DESCRIPTION_CONTEXT,
          content: [
            {
              type: COMMIT_MESSAGE_CONTEXT,
              content: 'new: Initial'
            }
          ]
        },
        {
          type: RSS_ITEM_AUTHOR_CONTEXT,
          content: [
            {
              type: BIO_CONTEXT,
              content: [
                {
                  type: DESCRIPTION_CONTEXT,
                  content: []
                },
                {
                  type: BIO_LINE_CONTEXT,
                  content: [
                    {
                      type: WORD_LEXEME,
                      content: 'name:'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'John'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Doe'
                    },
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
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
                      content: 'Designer'
                    },
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
                    }
                  ]
                },
                {
                  type: DESCRIPTION_CONTEXT,
                  content: []
                }
              ]
            }
          ]
        },
        {
          type: RSS_ITEM_PUB_DATE_CONTEXT,
          content: [
            {
              type: COMMIT_DATE_CONTEXT,
              content: 'Thu Mar 09 2017 10:35:55 GMT+0100 (CET)'
            }
          ]
        },
        {
          type: RSS_ITEM_ID_CONTEXT,
          content: [
            {
              type: COMMIT_HASH_CONTEXT,
              content: '000'
            }
          ]
        },
        {
          type: RSS_ITEM_LINK_CONTEXT,
          content: [
            {
              type: SETUP_URL_CONTEXT,
              content: `${BASE_URL}/toolkits/john-doe/john-doe.html`
            }
          ]
        }
      ]
    },
    {
      type: RSS_ITEM_CONTEXT,
      content: [
        {
          type: RSS_ITEM_TITLE_CONTEXT,
          content: [
            {
              type: RSS_UPDATE_SETUP_TITLE_CONTEXT,
              content: 'Updated setup:'
            },
            {
              type: BIO_CONTEXT,
              content: [
                {
                  type: DESCRIPTION_CONTEXT,
                  content: []
                },
                {
                  type: BIO_LINE_CONTEXT,
                  content: [
                    {
                      type: WORD_LEXEME,
                      content: 'name:'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'John'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Smith'
                    },
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
                    }
                  ]
                },
                {
                  type: DESCRIPTION_CONTEXT,
                  content: []
                }
              ]
            }
          ]
        },
        {
          type: RSS_ITEM_DESCRIPTION_CONTEXT,
          content: [
            {
              type: COMMIT_MESSAGE_CONTEXT,
              content: 'update: Switch to WebStorm'
            }
          ]
        },
        {
          type: RSS_ITEM_AUTHOR_CONTEXT,
          content: [
            {
              type: BIO_CONTEXT,
              content: [
                {
                  type: DESCRIPTION_CONTEXT,
                  content: []
                },
                {
                  type: BIO_LINE_CONTEXT,
                  content: [
                    {
                      type: WORD_LEXEME,
                      content: 'name:'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'John'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Smith'
                    },
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
                    }
                  ]
                },
                {
                  type: DESCRIPTION_CONTEXT,
                  content: []
                }
              ]
            }
          ]
        },
        {
          type: RSS_ITEM_PUB_DATE_CONTEXT,
          content: [
            {
              type: COMMIT_DATE_CONTEXT,
              content: 'Thu Mar 08 2017 10:35:55 GMT+0100 (CET)'
            }
          ]
        },
        {
          type: RSS_ITEM_ID_CONTEXT,
          content: [
            {
              type: COMMIT_HASH_CONTEXT,
              content: '002'
            }
          ]
        },
        {
          type: RSS_ITEM_LINK_CONTEXT,
          content: [
            {
              type: SETUP_URL_CONTEXT,
              content: `${BASE_URL}/toolkits/john-smith/john-smith.html`
            }
          ]
        }
      ]
    },
    {
      type: RSS_ITEM_CONTEXT,
      content: [
        {
          type: RSS_ITEM_TITLE_CONTEXT,
          content: [
            {
              type: RSS_NEW_SETUP_TITLE_CONTEXT,
              content: 'New setup:'
            },
            {
              type: BIO_CONTEXT,
              content: [
                {
                  type: DESCRIPTION_CONTEXT,
                  content: []
                },
                {
                  type: BIO_LINE_CONTEXT,
                  content: [
                    {
                      type: WORD_LEXEME,
                      content: 'name:'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'John'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Smith'
                    },
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
                    }
                  ]
                },
                {
                  type: DESCRIPTION_CONTEXT,
                  content: []
                }
              ]
            }
          ]
        },
        {
          type: RSS_ITEM_DESCRIPTION_CONTEXT,
          content: [
            {
              type: COMMIT_MESSAGE_CONTEXT,
              content: 'new: John Switch Initial'
            }
          ]
        },
        {
          type: RSS_ITEM_AUTHOR_CONTEXT,
          content: [
            {
              type: BIO_CONTEXT,
              content: [
                {
                  type: DESCRIPTION_CONTEXT,
                  content: []
                },
                {
                  type: BIO_LINE_CONTEXT,
                  content: [
                    {
                      type: WORD_LEXEME,
                      content: 'name:'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'John'
                    },
                    {
                      type: WORD_LEXEME,
                      content: 'Smith'
                    },
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
                    }
                  ]
                },
                {
                  type: DESCRIPTION_CONTEXT,
                  content: []
                }
              ]
            }
          ]
        },
        {
          type: RSS_ITEM_PUB_DATE_CONTEXT,
          content: [
            {
              type: COMMIT_DATE_CONTEXT,
              content: 'Thu Mar 05 2017 10:35:55 GMT+0100 (CET)'
            }
          ]
        },
        {
          type: RSS_ITEM_ID_CONTEXT,
          content: [
            {
              type: COMMIT_HASH_CONTEXT,
              content: '001'
            }
          ]
        },
        {
          type: RSS_ITEM_LINK_CONTEXT,
          content: [
            {
              type: SETUP_URL_CONTEXT,
              content: `${BASE_URL}/toolkits/john-smith/john-smith.html`
            }
          ]
        }
      ]
    }
  ]
}
