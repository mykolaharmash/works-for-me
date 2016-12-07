// as parsers matched against specific contexts
// parser-keys should follow special schema:
// parser-<context name>

module.exports = {
  // parser keys
  GLOBAL_PARSER_KEY: 'parser-global',
  BIO_PARSER_KEY: 'parser-bio',
  SETUP_PARSER_KEY: 'parser-setup',
  ENVIRONMENT_PARSER_KEY: 'parser-environment',
  ENVIRONMENT_HEADER_PARSER_KEY: 'parser-environment-header',
  DESCRIPTION_PARSER_KEY: 'parser-description',
  TOOLS_LIST_PARSER_KEY: 'parser-tools-list',
  TOOL_ITEM_PARSER_KEY: 'parser-tool-item',
  // context names
  BIO_CONTEXT: 'bio',
  SETUP_CONTEXT: 'setup',
  ENVIRONMENT_CONTEXT: 'environment',
  ENVIRONMENT_HEADER_CONTEXT: 'environment-header',
  BIO_LINE_CONTEXT: 'bio-line',
  COMMENT_LINE_CONTEXT: 'comment-line',
  PLAIN_TEXT_CONTEXT: 'plain',
  ENVIRONMENT_TITLE_CONTEXT: 'environment-title',
  DESCRIPTION_CONTEXT: 'description',
  TOOLS_LIST_CONTEXT: 'tools-list',
  TOOL_ITEM_CONTEXT: 'tool-item',
  TOOL_HEAD_CONTEXT: 'tool-head',
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
