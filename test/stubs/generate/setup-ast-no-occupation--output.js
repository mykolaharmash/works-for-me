const {
  ROOT_CONTEXT,
  HEAD_CONTEXT,
  HEAD_TITLE_CONTEXT,
  HEAD_DESCRIPTION_CONTEXT,
  BODY_CONTEXT,
  BIO_CONTEXT,
  BIO_LINE_CONTEXT,
  SETUP_CONTEXT,
  ENVIRONMENT_CONTEXT,
  ENVIRONMENT_HEADER_CONTEXT,
  ENVIRONMENT_TITLE_CONTEXT,
  TOOLS_LIST_CONTEXT,
  TOOL_ITEM_CONTEXT,
  TOOL_HEAD_CONTEXT,
  TOOL_NAMES_LIST_CONTEXT,
  TOOL_NAME_CONTEXT,
  TOOL_TITLE_CONTEXT,
  TOOL_LINK_CONTEXT,
  DESCRIPTION_CONTEXT,
  DESCRIPTION_PARAGRAPH_CONTEXT,
  ENV_BULLET_LEXEME,
  WORD_LEXEME,
  NEWLINE_LEXEME
} = require('../../../lib/constants');

module.exports = {
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
          content: 'John Doe\'s software setup'
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
              type: DESCRIPTION_CONTEXT,
              content: []
            },
          ]
        },

        {
          type: SETUP_CONTEXT,
          content: [
            {
              type: ENVIRONMENT_CONTEXT,
              content: [
                {
                  type: TOOLS_LIST_CONTEXT,
                  content: [
                    {
                      type: TOOL_ITEM_CONTEXT,
                      content: [
                        {
                          type: TOOL_HEAD_CONTEXT,
                          content: [
                            {
                              type: TOOL_NAMES_LIST_CONTEXT,
                              content: [
                                {
                                  type: TOOL_NAME_CONTEXT,
                                  content: [
                                    {
                                      type: TOOL_TITLE_CONTEXT,
                                      content: [
                                        {
                                          type: WORD_LEXEME,
                                          content: 'Awesome'
                                        },
                                        {
                                          type: WORD_LEXEME,
                                          content: 'Tool'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: DESCRIPTION_CONTEXT,
                          content: [
                            {
                              type: DESCRIPTION_PARAGRAPH_CONTEXT,
                              content: [
                                {
                                  type: WORD_LEXEME,
                                  content: 'some'
                                },
                                {
                                  type: WORD_LEXEME,
                                  content: 'description'
                                }
                              ]
                            },
                            {
                              type: DESCRIPTION_PARAGRAPH_CONTEXT,
                              content: [
                                {
                                  type: WORD_LEXEME,
                                  content: 'even'
                                }
                              ]
                            },
                            {
                              type: DESCRIPTION_PARAGRAPH_CONTEXT,
                              content: [
                                {
                                  type: WORD_LEXEME,
                                  content: 'multiline'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: TOOL_ITEM_CONTEXT,
                      content: [
                        {
                          type: TOOL_HEAD_CONTEXT,
                          content: [
                            {
                              type: TOOL_NAMES_LIST_CONTEXT,
                              content: [
                                {
                                  type: TOOL_NAME_CONTEXT,
                                  content: [
                                    {
                                      type: TOOL_TITLE_CONTEXT,
                                      content: [
                                        {
                                          type: WORD_LEXEME,
                                          content: 'Another'
                                        },
                                        {
                                          type: WORD_LEXEME,
                                          content: 'Tool'
                                        }
                                      ]
                                    },
                                    {
                                      type: TOOL_LINK_CONTEXT,
                                      content: [
                                        {
                                          type: WORD_LEXEME,
                                          content: 'https://some.com'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
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
            },
            {
              type: ENVIRONMENT_CONTEXT,
              content: [
                {
                  type: ENVIRONMENT_HEADER_CONTEXT,
                  content: [
                    {
                      type: ENVIRONMENT_TITLE_CONTEXT,
                      content: [
                        {
                          type: ENV_BULLET_LEXEME,
                          content: '--'
                        },
                        {
                          type: WORD_LEXEME,
                          content: 'Work'
                        },
                        {
                          type: NEWLINE_LEXEME,
                          content: '\n'
                        },
                      ]
                    },
                    {
                      type: DESCRIPTION_CONTEXT,
                      content: [
                        {
                          type: DESCRIPTION_PARAGRAPH_CONTEXT,
                          content: [
                            {
                              type: WORD_LEXEME,
                              content: 'Context'
                            },
                            {
                              type: WORD_LEXEME,
                              content: 'description'
                            }
                          ]
                        },
                        {
                          type: DESCRIPTION_PARAGRAPH_CONTEXT,
                          content: [
                            {
                              type: WORD_LEXEME,
                              content: 'goes'
                            },
                            {
                              type: WORD_LEXEME,
                              content: 'here'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: TOOLS_LIST_CONTEXT,
                  content: [
                    {
                      type: TOOL_ITEM_CONTEXT,
                      content: [
                        {
                          type: TOOL_HEAD_CONTEXT,
                          content: [
                            {
                              type: TOOL_NAMES_LIST_CONTEXT,
                              content: [
                                {
                                  type: TOOL_NAME_CONTEXT,
                                  content: [
                                    {
                                      type: TOOL_TITLE_CONTEXT,
                                      content: [
                                        {
                                          type: WORD_LEXEME,
                                          content: 'Tool'
                                        },
                                        {
                                          type: WORD_LEXEME,
                                          content: 'within'
                                        },
                                        {
                                          type: WORD_LEXEME,
                                          content: 'context'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: DESCRIPTION_CONTEXT,
                          content: [
                            {
                              type: DESCRIPTION_PARAGRAPH_CONTEXT,
                              content: [
                                {
                                  type: WORD_LEXEME,
                                  content: 'another'
                                },
                                {
                                  type: WORD_LEXEME,
                                  content: 'description'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: TOOL_ITEM_CONTEXT,
                      content: [
                        {
                          type: TOOL_HEAD_CONTEXT,
                          content: [
                            {
                              type: TOOL_NAMES_LIST_CONTEXT,
                              content: [
                                {
                                  type: TOOL_NAME_CONTEXT,
                                  content: [
                                    {
                                      type: TOOL_TITLE_CONTEXT,
                                      content: [
                                        {
                                          type: WORD_LEXEME,
                                          content: 'One'
                                        },
                                        {
                                          type: WORD_LEXEME,
                                          content: 'more'
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
