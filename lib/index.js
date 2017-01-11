let Immutable = require('immutable');
let fs = require('fs');
let tokenize = require('./tokenize');
let lex = require('./lex');
let parse = require('./parse');
let render = require('./render');

let rootParser = require('./parsers/root');
let bio = require('./parsers/bio');
let setup = require('./parsers/setup');
let environment = require('./parsers/environment');
let environmentHeader = require('./parsers/environment-header');
let description = require('./parsers/description');
let toolsList = require('./parsers/tools-list');
let toolItem = require('./parsers/tool-item');
let toolHead = require('./parsers/tool-head');
let toolNamesList = require('./parsers/tool-names-list');
let toolName = require('./parsers/tool-name');

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
  TOOL_NAME_PARSER_KEY
} = require('./constants');

let filePath = process.argv[2];
let content = fs.readFileSync(filePath).toString();
let chars = [...content];

const parsersMap = {
  [ROOT_PARSER_KEY]: rootParser,
  [BIO_PARSER_KEY]: bio,
  [SETUP_PARSER_KEY]: setup,
  [ENVIRONMENT_PARSER_KEY]: environment,
  [ENVIRONMENT_HEADER_PARSER_KEY]: environmentHeader,
  [DESCRIPTION_PARSER_KEY]: description,
  [TOOLS_LIST_PARSER_KEY]: toolsList,
  [TOOL_ITEM_PARSER_KEY]: toolItem,
  [TOOL_HEAD_PARSER_KEY]: toolHead,
  [TOOL_NAMES_LIST_PARSER_KEY]: toolNamesList,
  [TOOL_NAME_PARSER_KEY]: toolName
};

const renderersMap = {
  'root': rootRenderer,
  'bio': bioRenderer,
  'bio-line': bioLineRenderer
};

let tokens = tokenize(chars);
let lexemes = lex(tokens);

let rootContext = Immutable.fromJS({
  type: ROOT_CONTEXT,
  content: lexemes
});
let tree = parse(rootContext, parsersMap);
let html = render(tree, renderersMap);

console.log(html);
