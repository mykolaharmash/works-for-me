const {
  ROOT_CONTEXT,
  HEAD_CONTEXT,
  BODY_CONTEXT,
  HEAD_TITLE_CONTEXT,
  HEAD_DESCRIPTION_CONTEXT,
  BIO_CONTEXT,
  BIO_LINE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants');

module.exports = [
  {
    name: 'first-guy',
    content: {
      type: ROOT_CONTEXT,
      content: []
    }
  },
  {
    name: 'second-guy',
    content: {
      type: ROOT_CONTEXT,
      content: [
        {
          type: HEAD_CONTEXT,
          content: [
            {
              type: HEAD_TITLE_CONTEXT,
              content: 'Second Guy'
            },
            {
              type: HEAD_DESCRIPTION_CONTEXT,
              content: 'Second Guy\'s software setup'
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
  }
];
