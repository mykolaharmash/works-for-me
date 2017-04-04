const {
  BIO_CONTEXT,
  RSS_CONTEXT,
  RSS_ITEM_CONTEXT,
  RSS_ITEM_TITLE_CONTEXT,
  RSS_NEW_SETUP_TITLE_CONTEXT,
  RSS_UPDATE_SETUP_TITLE_CONTEXT,
  RSS_ITEM_METADATA_CONTEXT,
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
          type: RSS_ITEM_METADATA_CONTEXT,
          content: 'new: Initial'
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
          type: RSS_ITEM_METADATA_CONTEXT,
          content: 'update: Switch to WebStorm'
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
          type: RSS_ITEM_METADATA_CONTEXT,
          content: 'new: John Switch Initial'
        }
      ]
    }
  ]
};
