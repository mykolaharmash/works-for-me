let fs = require('fs');
let tokenize = require('./tokenize');
let lex = require('./lex');
let parse = require('./parse');

let globalSplitter = require('./parsers/global-splitter');
let bio = require('./parsers/bio');
let setup = require('./parsers/setup');
let environment = require('./parsers/environment');
let environmentHeader = require('./parsers/environment-header');
let description = require('./parsers/description');
let toolsList = require('./parsers/tools-list');
let toolItem = require('./parsers/tool-item');
let toolHead = require('./parsers/tool-head');
let toolNamesList = require('./parsers/tool-names-list');

const {
  GLOBAL_PARSER_KEY,
  BIO_PARSER_KEY,
  SETUP_PARSER_KEY,
  ENVIRONMENT_PARSER_KEY,
  ENVIRONMENT_HEADER_PARSER_KEY,
  DESCRIPTION_PARSER_KEY,
  TOOLS_LIST_PARSER_KEY,
  TOOL_ITEM_PARSER_KEY,
  TOOL_HEAD_PARSER_KEY,
  TOOL_NAMES_LIST_PARSER_KEY
} = require('./constants');

let filePath = process.argv[2];
let content = fs.readFileSync(filePath).toString();
let chars = [...content];

const parsersMap = {
  [GLOBAL_PARSER_KEY]: globalSplitter,
  [BIO_PARSER_KEY]: bio,
  [SETUP_PARSER_KEY]: setup,
  [ENVIRONMENT_PARSER_KEY]: environment,
  [ENVIRONMENT_HEADER_PARSER_KEY]: environmentHeader,
  [DESCRIPTION_PARSER_KEY]: description,
  [TOOLS_LIST_PARSER_KEY]: toolsList,
  [TOOL_ITEM_PARSER_KEY]: toolItem,
  [TOOL_HEAD_PARSER_KEY]: toolHead,
  [TOOL_NAMES_LIST_PARSER_KEY]: toolNamesList
};

let tokens = tokenize(chars);
let lexemes = lex(tokens);
let tree = parse(lexemes, parsersMap);

console.log(JSON.stringify(tree, null, 2));
