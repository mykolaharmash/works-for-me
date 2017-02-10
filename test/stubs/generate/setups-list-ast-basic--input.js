const {
  ROOT_CONTEXT,
  BIO_CONTEXT,
  BIO_LINE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants');

module.exports = [
  {
    name: 'first-guy',
    content: {
      type: ROOT_CONTEXT,
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
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    name: 'second-guy',
    content: {
      type: ROOT_CONTEXT,
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
  }
];
