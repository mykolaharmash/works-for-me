const {
  ROOT_CONTEXT,
  HEAD_CONTEXT,
  HEAD_TITLE_CONTEXT,
  HEAD_DESCRIPTION_CONTEXT,
  BODY_CONTEXT,
  BIO_CONTEXT,
  BIO_LINE_CONTEXT,
  DESCRIPTION_CONTEXT,
  WORD_LEXEME,
  NEWLINE_LEXEME
} = require('../../../lib/constants')

module.exports = {
  metadata: [
    {
      updates: [],
      initial: {
        date: 'Thu Mar 09 2017 10:35:55 GMT+0100 (CET)',
        message: 'new: Initial',
        hash: '000'
      },
      allCommits: [
        {
          date: 'Thu Mar 09 2017 10:35:55 GMT+0100 (CET)',
          message: 'new: Initial',
          hash: '000'
        }
      ]
    },
    {
      updates: [
        {
          date: 'Thu Mar 08 2017 10:35:55 GMT+0100 (CET)',
          message: 'update: Switch to WebStorm',
          hash: '002'
        }
      ],
      initial: {
        date: 'Thu Mar 05 2017 10:35:55 GMT+0100 (CET)',
        message: 'John Switch Initial',
        hash: '001'
      },
      allCommits: [
        {
          date: 'Thu Mar 08 2017 10:35:55 GMT+0100 (CET)',
          message: 'update: Switch to WebStorm',
          hash: '002'
        },
        {
          date: 'Thu Mar 05 2017 10:35:55 GMT+0100 (CET)',
          message: 'new: John Switch Initial',
          hash: '001'
        }
      ]
    }
  ],
  content: [
    {
      name: 'john-doe',
      content: {
        type: ROOT_CONTEXT,
        content: [
          {
            type: HEAD_CONTEXT,
            content: [
              {
                type: HEAD_TITLE_CONTEXT,
                content: 'John Doe'
              },
              {
                type: HEAD_DESCRIPTION_CONTEXT,
                content: 'Designer\'s software setup'
              }
            ]
          },
          {
            type: BODY_CONTEXT,
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
          }
        ]
      }
    },
    {
      name: 'john-smith',
      content: {
        type: ROOT_CONTEXT,
        content: [
          {
            type: HEAD_CONTEXT,
            content: [
              {
                type: HEAD_TITLE_CONTEXT,
                content: 'John Smith'
              },
              {
                type: HEAD_DESCRIPTION_CONTEXT,
                content: 'John Smith\'s software setup'
              }
            ]
          },
          {
            type: BODY_CONTEXT,
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
          }
        ]
      }
    }
  ]
}
