// as parsers matched against specific contexts
// parser-keys should follow special schema:
// parser-<context name>
// same thing for renderers:
// renderer-<context-name>

module.exports = {
  // parser keys
  ROOT_PARSER_KEY: 'parser-root',
  BIO_PARSER_KEY: 'parser-bio',
  SETUP_PARSER_KEY: 'parser-setup',
  ENVIRONMENT_PARSER_KEY: 'parser-environment',
  ENVIRONMENT_HEADER_PARSER_KEY: 'parser-environment-header',
  TOOLS_LIST_PARSER_KEY: 'parser-tools-list',
  TOOL_ITEM_PARSER_KEY: 'parser-tool-item',
  TOOL_HEAD_PARSER_KEY: 'parser-tool-head',
  TOOL_NAMES_LIST_PARSER_KEY: 'parser-tool-names-list',
  TOOL_NAME_PARSER_KEY: 'parser-tool-name',
  // renderer keys
  ROOT_RENDERER_KEY: 'renderer-root',
  BIO_RENDERER_KEY: 'renderer-bio',
  BIO_LINE_RENDERER_KEY: 'renderer-bio-line',
  SETUP_RENDERER_KEY: 'renderer-setup',
  ENVIRONMENT_RENDERER_KEY: 'renderer-environment',
  DESCRIPTION_RENDERER_KEY: 'renderer-description',
  ENVIRONMENT_HEADER_RENDERER_KEY: 'renderer-environment-header',
  ENVIRONMENT_TITLE_RENDERER_KEY: 'renderer-environment-title',
  TOOLS_LIST_RENDERER_KEY: 'renderer-tools-list',
  TOOL_ITEM_RENDERER_KEY: 'renderer-tool-item',
  TOOL_HEAD_RENDERER_KEY: 'renderer-tool-head',
  TOOL_NAMES_LIST_RENDERER_KEY: 'renderer-tool-names-list',
  TOOL_NAME_RENDERER_KEY: 'renderer-tool-name',
  TOOL_TITLE_RENDERER_KEY: 'renderer-tool-title',
  TOOL_LINK_RENDERER_KEY: 'renderer-tool-link',
  SETUPS_LIST_ITEM_RENDERER_KEY: 'renderer-setups-list-item',
  SETUPS_LIST_RENDERER_KEY: 'renderer-setups-list',
  SETUPS_LIST_ROOT_RENDERER_KEY: 'renderer-setups-list-root',
  // context names
  ROOT_CONTEXT: 'root',
  BIO_CONTEXT: 'bio',
  SETUP_CONTEXT: 'setup',
  ENVIRONMENT_CONTEXT: 'environment',
  ENVIRONMENT_HEADER_CONTEXT: 'environment-header',
  BIO_LINE_CONTEXT: 'bio-line',
  ENVIRONMENT_TITLE_CONTEXT: 'environment-title',
  DESCRIPTION_CONTEXT: 'description',
  TOOLS_LIST_CONTEXT: 'tools-list',
  TOOL_ITEM_CONTEXT: 'tool-item',
  TOOL_HEAD_CONTEXT: 'tool-head',
  TOOL_NAMES_LIST_CONTEXT: 'tool-names-list',
  TOOL_NAME_CONTEXT: 'tool-name',
  TOOL_TITLE_CONTEXT: 'tool-title',
  TOOL_LINK_CONTEXT: 'tool-link',
  SETUPS_LIST_ROOT_CONTEXT: 'setups-list-root',
  SETUPS_LIST_CONTEXT: 'setups-list',
  SETUPS_LIST_ITEM_CONTEXT: 'setups-list-item',
  SETUPS_LIST_ITEM_KEY_CONTEXT: 'setups-list-item-key',
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
  TAB_TOKEN: '\t',
  TOOL_NAMES_SEPARATOR_TOKEN: ','
};
