let Immutable = require('immutable');
let fs = require('fs');
let path = require('path');
let tokenize = require('./tokenize');
let lex = require('./lex');
let sanitize = require('./sanitize');
let parse = require('./parse');
let render = require('./render');

let rootParser = require('./parsers/root');
let bioParser = require('./parsers/bio');
let setupParser = require('./parsers/setup');
let environmentParser = require('./parsers/environment');
let environmentHeaderParser = require('./parsers/environment-header');
let descriptionParser = require('./parsers/description');
let toolsListParser = require('./parsers/tools-list');
let toolItemParser = require('./parsers/tool-item');
let toolHeadParser = require('./parsers/tool-head');
let toolNamesListParser = require('./parsers/tool-names-list');
let toolNameParser = require('./parsers/tool-name');

let rootRenderer = require('./renderers/root');
let bioRenderer = require('./renderers/bio');
let bioLineRenderer = require('./renderers/bio-line');
let setupRenderer = require('./renderers/setup');
let environmentRenderer = require('./renderers/environment');
let descriptionRenderer = require('./renderers/description');
let plainRenderer = require('./renderers/plain');
let environmentHeaderRenderer = require('./renderers/environment-header');
let environmentTitleRenderer = require('./renderers/environment-title');
let toolsListRenderer = require('./renderers/tools-list');
let toolItemRenderer = require('./renderers/tool-item');
let toolHeadRenderer = require('./renderers/tool-head');
let toolNamesListRenderer = require('./renderers/tool-names-list');
let toolNameRenderer = require('./renderers/tool-name');
let toolTitleRenderer = require('./renderers/tool-title');
let toolLinkRenderer = require('./renderers/tool-link');

const {
  ROOT_CONTEXT,
  ROOT_PARSER_KEY,
  BIO_PARSER_KEY,
  SETUP_PARSER_KEY,
  ENVIRONMENT_PARSER_KEY,
  ENVIRONMENT_HEADER_PARSER_KEY,
  DESCRIPTION_PARSER_KEY,
  TOOLS_LIST_PARSER_KEY,
  TOOL_ITEM_PARSER_KEY,
  TOOL_HEAD_PARSER_KEY,
  TOOL_NAMES_LIST_PARSER_KEY,
  TOOL_NAME_PARSER_KEY,
  ROOT_RENDERER_KEY,
  BIO_RENDERER_KEY,
  BIO_LINE_RENDERER_KEY,
  SETUP_RENDERER_KEY,
  ENVIRONMENT_RENDERER_KEY,
  DESCRIPTION_RENDERER_KEY,
  PLAIN_TEXT_RENDERER_KEY,
  ENVIRONMENT_HEADER_RENDERER_KEY,
  ENVIRONMENT_TITLE_RENDERER_KEY,
  TOOLS_LIST_RENDERER_KEY,
  TOOL_ITEM_RENDERER_KEY,
  TOOL_HEAD_RENDERER_KEY,
  TOOL_NAMES_LIST_RENDERER_KEY,
  TOOL_NAME_RENDERER_KEY,
  TOOL_TITLE_RENDERER_KEY,
  TOOL_LINK_RENDERER_KEY
} = require('./constants');

let filePath = process.argv[2];
let content = fs.readFileSync(filePath).toString();
let chars = [...content];

const parsersMap = {
  [ROOT_PARSER_KEY]: rootParser,
  [BIO_PARSER_KEY]: bioParser,
  [SETUP_PARSER_KEY]: setupParser,
  [ENVIRONMENT_PARSER_KEY]: environmentParser,
  [ENVIRONMENT_HEADER_PARSER_KEY]: environmentHeaderParser,
  [DESCRIPTION_PARSER_KEY]: descriptionParser,
  [TOOLS_LIST_PARSER_KEY]: toolsListParser,
  [TOOL_ITEM_PARSER_KEY]: toolItemParser,
  [TOOL_HEAD_PARSER_KEY]: toolHeadParser,
  [TOOL_NAMES_LIST_PARSER_KEY]: toolNamesListParser,
  [TOOL_NAME_PARSER_KEY]: toolNameParser
};

const renderersMap = {
  [ROOT_RENDERER_KEY]: rootRenderer,
  [BIO_RENDERER_KEY]: bioRenderer,
  [BIO_LINE_RENDERER_KEY]: bioLineRenderer,
  [SETUP_RENDERER_KEY]: setupRenderer,
  [ENVIRONMENT_RENDERER_KEY]: environmentRenderer,
  [DESCRIPTION_RENDERER_KEY]: descriptionRenderer,
  [PLAIN_TEXT_RENDERER_KEY]: plainRenderer,
  [ENVIRONMENT_HEADER_RENDERER_KEY]: environmentHeaderRenderer,
  [ENVIRONMENT_TITLE_RENDERER_KEY]: environmentTitleRenderer,
  [TOOLS_LIST_RENDERER_KEY]: toolsListRenderer,
  [TOOL_ITEM_RENDERER_KEY]: toolItemRenderer,
  [TOOL_HEAD_RENDERER_KEY]: toolHeadRenderer,
  [TOOL_NAMES_LIST_RENDERER_KEY]: toolNamesListRenderer,
  [TOOL_NAME_RENDERER_KEY]: toolNameRenderer,
  [TOOL_TITLE_RENDERER_KEY]: toolTitleRenderer,
  [TOOL_LINK_RENDERER_KEY]: toolLinkRenderer
};

let tokens = tokenize(chars);
let lexemes = lex(tokens);
let sanitizedlexemes = sanitize(lexemes);
let rootContext = Immutable.fromJS({
  type: ROOT_CONTEXT,
  content: sanitizedlexemes
});
let tree = parse(rootContext, parsersMap);
let html = render(tree, renderersMap);

fs.writeFileSync(
  path.resolve(__dirname, '../tmp/out.json'),
  JSON.stringify(tree, null, 2)
);
fs.writeFileSync(path.resolve(__dirname, '../tmp/out.html'), html);
