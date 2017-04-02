const {
  ROOT_CONTEXT,
  HEAD_CONTEXT,
  BODY_CONTEXT,
  HEAD_TITLE_CONTEXT,
  HEAD_DESCRIPTION_CONTEXT,
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
  SETUP_LATEST_UPDATE_CONTEXT,
  SETUP_UPDATE_DATE_CONTEXT,
  SETUP_UPDATE_MESSAGE_CONTEXT,
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
        },
        {
          type: SETUP_CONTEXT,
          content: [
            {
              type: SETUP_LATEST_UPDATE_CONTEXT,
              content: [
                {
                  type: SETUP_UPDATE_DATE_CONTEXT,
                  content: '2017-02-03T09:55:27+01:00'
                },
                {
                  type: SETUP_UPDATE_MESSAGE_CONTEXT,
                  content: 'update: Changed IDE'
                }
              ]
            },
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
                              type: NEWLINE_LEXEME,
                              content: '\n'
                            },
                            {
                              type: WORD_LEXEME,
                              content: 'some'
                            },
                            {
                              type: WORD_LEXEME,
                              content: 'description'
                            },
                            {
                              type: NEWLINE_LEXEME,
                              content: '\n'
                            },
                            {
                              type: WORD_LEXEME,
                              content: 'even'
                            },
                            {
                              type: NEWLINE_LEXEME,
                              content: '\n'
                            },
                            {
                              type: WORD_LEXEME,
                              content: 'multiline'
                            },
                            {
                              type: NEWLINE_LEXEME,
                              content: '\n'
                            },
                            {
                              type: NEWLINE_LEXEME,
                              content: '\n'
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
                          type: NEWLINE_LEXEME,
                          content: '\n'
                        },
                        {
                          type: WORD_LEXEME,
                          content: 'Context'
                        },
                        {
                          type: WORD_LEXEME,
                          content: 'description'
                        },
                        {
                          type: NEWLINE_LEXEME,
                          content: '\n'
                        },
                        {
                          type: WORD_LEXEME,
                          content: 'goes'
                        },
                        {
                          type: WORD_LEXEME,
                          content: 'here'
                        },
                        {
                          type: NEWLINE_LEXEME,
                          content: '\n'
                        },
                        {
                          type: NEWLINE_LEXEME,
                          content: '\n'
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
                              type: NEWLINE_LEXEME,
                              content: '\n'
                            },
                            {
                              type: WORD_LEXEME,
                              content: 'another'
                            },
                            {
                              type: WORD_LEXEME,
                              content: 'description'
                            },
                            {
                              type: NEWLINE_LEXEME,
                              content: '\n'
                            },
                            {
                              type: NEWLINE_LEXEME,
                              content: '\n'
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
