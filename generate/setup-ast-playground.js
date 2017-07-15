let Immutable = require('immutable')

let tokenize = require('../lib/tokenize')
let lex = require('../lib/lex')
let sanitize = require('../lib/sanitize')
let parse = require('../lib/parse')

let bodyParser = require('../lib/parsers/body')
let bioParser = require('../lib/parsers/bio')
let setupParser = require('../lib/parsers/setup')
let environmentParser = require('../lib/parsers/environment')
let environmentHeaderParser = require('../lib/parsers/environment-header')
let toolsListParser = require('../lib/parsers/tools-list')
let toolItemParser = require('../lib/parsers/tool-item')
let toolHeadParser = require('../lib/parsers/tool-head')
let toolNamesListParser = require('../lib/parsers/tool-names-list')
let toolNameParser = require('../lib/parsers/tool-name')
let descriptionParser = require('../lib/parsers/description')
let descriptionParagraphParser = require('../lib/parsers/description-paragraph')
let descriptionLinkParser = require('../lib/parsers/description-link')
let imageParser = require('../lib/parsers/image')

const {
  BODY_CONTEXT,
  BODY_PARSER_KEY,
  BIO_PARSER_KEY,
  SETUP_PARSER_KEY,
  ENVIRONMENT_PARSER_KEY,
  ENVIRONMENT_HEADER_PARSER_KEY,
  TOOLS_LIST_PARSER_KEY,
  TOOL_ITEM_PARSER_KEY,
  TOOL_HEAD_PARSER_KEY,
  TOOL_NAMES_LIST_PARSER_KEY,
  TOOL_NAME_PARSER_KEY,
  DESCRIPTION_PARSER_KEY,
  DESCRIPTION_PARAGRAPH_PARSER_KEY,
  DESCRIPTION_LINK_PARSER_KEY,
  IMAGE_PARSER_KEY
} = require('../lib/constants')

const parsersMap = {
  [BODY_PARSER_KEY]: bodyParser,
  [BIO_PARSER_KEY]: bioParser,
  [SETUP_PARSER_KEY]: setupParser,
  [ENVIRONMENT_PARSER_KEY]: environmentParser,
  [ENVIRONMENT_HEADER_PARSER_KEY]: environmentHeaderParser,
  [TOOLS_LIST_PARSER_KEY]: toolsListParser,
  [TOOL_ITEM_PARSER_KEY]: toolItemParser,
  [TOOL_HEAD_PARSER_KEY]: toolHeadParser,
  [TOOL_NAMES_LIST_PARSER_KEY]: toolNamesListParser,
  [TOOL_NAME_PARSER_KEY]: toolNameParser,
  [DESCRIPTION_PARSER_KEY]: descriptionParser,
  [DESCRIPTION_PARAGRAPH_PARSER_KEY]: descriptionParagraphParser,
  [DESCRIPTION_LINK_PARSER_KEY]: descriptionLinkParser,
  [IMAGE_PARSER_KEY]: imageParser
}

module.exports = function (content = '') {
  let chars = [...content]
  let tokens = tokenize(chars)
  let lexemes = lex(tokens)
  let sanitizedLexemes = sanitize(lexemes)
  let bodyContext = Immutable.fromJS({
    type: BODY_CONTEXT,
    content: sanitizedLexemes
  })

  let bodyAst = Immutable.fromJS(
    parse(bodyContext, parsersMap)
  )

  return bodyAst
}
