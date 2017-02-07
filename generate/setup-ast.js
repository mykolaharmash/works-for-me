let Immutable = require('immutable');
let fs = require('fs');
let tokenize = require('./../lib/tokenize');
let lex = require('./../lib/lex');
let sanitize = require('./../lib/sanitize');
let parse = require('./../lib/parse');

let rootParser = require('./../lib/parsers/root');
let bioParser = require('./../lib/parsers/bio');
let setupParser = require('./../lib/parsers/setup');
let environmentParser = require('./../lib/parsers/environment');
let environmentHeaderParser = require('./../lib/parsers/environment-header');
let toolsListParser = require('./../lib/parsers/tools-list');
let toolItemParser = require('./../lib/parsers/tool-item');
let toolHeadParser = require('./../lib/parsers/tool-head');
let toolNamesListParser = require('./../lib/parsers/tool-names-list');
let toolNameParser = require('./../lib/parsers/tool-name');

const {
  ROOT_CONTEXT,
  ROOT_PARSER_KEY,
  BIO_PARSER_KEY,
  SETUP_PARSER_KEY,
  ENVIRONMENT_PARSER_KEY,
  ENVIRONMENT_HEADER_PARSER_KEY,
  TOOLS_LIST_PARSER_KEY,
  TOOL_ITEM_PARSER_KEY,
  TOOL_HEAD_PARSER_KEY,
  TOOL_NAMES_LIST_PARSER_KEY,
  TOOL_NAME_PARSER_KEY,
} = require('./../lib/constants');

const parsersMap = {
  [ROOT_PARSER_KEY]: rootParser,
  [BIO_PARSER_KEY]: bioParser,
  [SETUP_PARSER_KEY]: setupParser,
  [ENVIRONMENT_PARSER_KEY]: environmentParser,
  [ENVIRONMENT_HEADER_PARSER_KEY]: environmentHeaderParser,
  [TOOLS_LIST_PARSER_KEY]: toolsListParser,
  [TOOL_ITEM_PARSER_KEY]: toolItemParser,
  [TOOL_HEAD_PARSER_KEY]: toolHeadParser,
  [TOOL_NAMES_LIST_PARSER_KEY]: toolNamesListParser,
  [TOOL_NAME_PARSER_KEY]: toolNameParser
};

module.exports = function (content = '') {
  let chars = [...content];
  let tokens = tokenize(chars);
  let lexemes = lex(tokens);
  let sanitizedLexemes = sanitize(lexemes);
  let rootContext = Immutable.fromJS({
    type: ROOT_CONTEXT,
    content: sanitizedLexemes
  });

  return parse(rootContext, parsersMap);
};
