const {
  ROOT_CONTEXT,
  BIO_CONTEXT,
  BIO_LINE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants');

module.exports = {
  setupsMetadata: [
    {
      updates: [
        { date: '2016-11-14T12:23:03+01:00' },
        { date: '2016-10-12T10:21:03+02:00' }
      ]
    },
    {
      updates: [
        { date: '2016-12-29T17:54:01+02:00' }
      ]
    }
  ],
  setupsAst: [
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
  ]
};
