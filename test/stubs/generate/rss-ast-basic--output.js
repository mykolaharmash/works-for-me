const {
  BIO_CONTEXT,
  RSS_CONTEXT,
  RSS_ITEM_CONTEXT,
  RSS_ITEM_TITLE_CONTEXT,
  RSS_NEW_SETUP_TITLE_CONTEXT,
  RSS_UPDATE_SETUP_TITLE_CONTEXT,
  RSS_ITEM_DESCRIPTION,
  RSS_ITEM_AUTHOR,
  RSS_ITEM_PUB_DATE,
  RSS_ITEM_ID,
  DESCRIPTION_CONTEXT,
  NEWLINE_LEXEME,
  BIO_LINE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants');

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
                  content: [
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
                  content: [
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
                    }
                  ]
                },
              ]
            }
          ]
        },
        {
          type: RSS_ITEM_DESCRIPTION,
          content: 'new: Initial'
        },
        {
          type: RSS_ITEM_AUTHOR,
          content: [
            {
              type: BIO_CONTEXT,
              content: [
                {
                  type: DESCRIPTION_CONTEXT,
                  content: [
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
                  content: [
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
                    }
                  ]
                },
              ]
            }
          ]
        },
        {
          type: RSS_ITEM_PUB_DATE,
          content: 'Thu Mar 09 2017 10:35:55 GMT+0100 (CET)'
        },
        {
          type: RSS_ITEM_ID,
          content: '000'
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
                  content: [
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
                  content: [
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: RSS_ITEM_DESCRIPTION,
          content: 'update: Switch to WebStorm'
        },
        {
          type: RSS_ITEM_AUTHOR,
          content: [
            {
              type: BIO_CONTEXT,
              content: [
                {
                  type: DESCRIPTION_CONTEXT,
                  content: [
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
                  content: [
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: RSS_ITEM_PUB_DATE,
          content: 'Thu Mar 08 2017 10:35:55 GMT+0100 (CET)'
        },
        {
          type: RSS_ITEM_ID,
          content: '002'
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
                  content: [
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
                  content: [
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: RSS_ITEM_DESCRIPTION,
          content: 'new: John Switch Initial'
        },
        {
          type: RSS_ITEM_AUTHOR,
          content: [
            {
              type: BIO_CONTEXT,
              content: [
                {
                  type: DESCRIPTION_CONTEXT,
                  content: [
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
                  content: [
                    {
                      type: NEWLINE_LEXEME,
                      content: '\n'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: RSS_ITEM_PUB_DATE,
          content: 'Thu Mar 05 2017 10:35:55 GMT+0100 (CET)'
        },
        {
          type: RSS_ITEM_ID,
          content: '001'
        }
      ]
    }
  ]
};
