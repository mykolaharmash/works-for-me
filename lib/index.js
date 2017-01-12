let Immutable = require('immutable');
let fs = require('fs');
let tokenize = require('./tokenize');
let lex = require('./lex');
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
  BIO_LINE_RENDERER_KEY
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
  [BIO_LINE_RENDERER_KEY]: bioLineRenderer
};

let tokens = tokenize(chars);
let lexemes = lex(tokens);

let rootContext = Immutable.fromJS({
  type: ROOT_CONTEXT,
  content: lexemes
});
let tree = parse(rootContext, parsersMap);
let html = render(tree, renderersMap);

//console.log(JSON.stringify(tree, null, 2));
console.log(html);
