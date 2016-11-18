module.exports = {
  // parser keys
  GLOBAL_PARSER_KEY: 'parser-global',
  BIO_PARSER_KEY: 'parser-bio',
  // context names
  BIO_CONTEXT: 'bio',
  SETUP_CONTEXT: 'setup',
  ENVIRONMENT_CONTEXT: 'environment',
  ENV_HEADER_CONTEXT: 'environment-header',
  TOOLS_LIST_CONTEXT: 'tools-list',
  BIO_LINE_CONTEXT: 'bio-line',
  COMMENT_LINE_CONTEXT: 'comment-line',
  PLAIN_TEXT_CONTEXT: 'plain',
  // lexeme types
  ENV_BULLET_LEXEME: 'env-bullet',
  TOOL_BULLET_LEXEME: 'tool-bullet',
  NEWLINE_LEXEME: 'newline',
  WORD_LEXEME: 'word',
  COMMENT_BULLET_LEXEME: 'comment-bullet',
  // special tokens
  TOOL_BULLET_TOKEN: '>',
  ENV_BULLET_TOKEN: '--',
  COMMENT_BULLET_TOKEN: '//',
  NEWLINE_TOKEN: '\n',
  RETURN_NEWLINE_TOKEN: '\r\n',
  SPACE_TOKEN: ' ',
  TAB_TOKEN: '\t'
};
