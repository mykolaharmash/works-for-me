let Immutable = require('immutable');
let tokenize = require('./../lib/tokenize');
let lex = require('./../lib/lex');
let sanitize = require('./../lib/sanitize');
let parse = require('./../lib/parse');

let bodyParser = require('./../lib/parsers/body');
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
  HEAD_CONTEXT,
  BODY_CONTEXT,
  HEAD_TITLE_CONTEXT,
  HEAD_DESCRIPTION_CONTEXT,
  BIO_LINE_TYPE_NAME_TOKEN,
  BIO_LINE_TYPE_OCCUPATION_TOKEN,
  BIO_CONTEXT,
  BIO_LINE_CONTEXT,
  SETUP_CONTEXT,
  SETUP_LATEST_UPDATE_CONTEXT,
  SETUP_UPDATE_DATE_CONTEXT,
  SETUP_UPDATE_MESSAGE_CONTEXT,
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
  NEWLINE_LEXEME
} = require('./../lib/constants');

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
  [TOOL_NAME_PARSER_KEY]: toolNameParser
};

function findBioLine (bioContext, lineTypeToken) {
  let bioLineContexts = bioContext.get('content')
    .filter(context => context.get('type') === BIO_LINE_CONTEXT);

  return bioLineContexts
    .find(context => {
      let firstLexeme = context.get('content').get(0).get('content');

      return firstLexeme === lineTypeToken;
    });
}

function generateLatestUpdateContext (latestUpdate) {
  return Immutable.fromJS({
    type: SETUP_LATEST_UPDATE_CONTEXT,
    content: [
      {
        type: SETUP_UPDATE_DATE_CONTEXT,
        content: latestUpdate.date
      },
      {
        type: SETUP_UPDATE_MESSAGE_CONTEXT,
        content: latestUpdate.message
      }
    ]
  });
}

function getBioLineContentString (bioLineContext) {
  return bioLineContext
    .get('content')
    .slice(1)
    .filter(lexeme => lexeme.get('type') !== NEWLINE_LEXEME)
    .map(lexeme => lexeme.get('content'))
    .join(' ');
}

function generateHeadTitleContext (nameBioLineContext) {
  let name = getBioLineContentString(nameBioLineContext);

  return Immutable.fromJS({
    type: HEAD_TITLE_CONTEXT,
    content: name
  });
}

function generateHeadDescriptionContext (nameBioLineContext, occupationBioLineContext) {
  let name = getBioLineContentString(nameBioLineContext);
  let occupation;

  if (occupationBioLineContext) {
    occupation = getBioLineContentString(occupationBioLineContext);
  }

  return Immutable.fromJS({
    type: HEAD_DESCRIPTION_CONTEXT,
    content: `${ occupation ? occupation : name }'s software setup`
  });
}

/**
 * Generates header setup context based on bio context.
 * Context includes title and description which will end up
 * in <header> of the page.
 * @param bodyAst - setup's body AST
 * @returns updated setup AST
 */
function generateHeadAst (bodyAst) {
  let bioContext = bodyAst.get('content')
    .find(context => context.get('type') === BIO_CONTEXT);
  let nameBioLineContext = findBioLine(bioContext, BIO_LINE_TYPE_NAME_TOKEN);
  let occupationBioLineContext = findBioLine(bioContext, BIO_LINE_TYPE_OCCUPATION_TOKEN);

  let titleContext = generateHeadTitleContext(nameBioLineContext);
  let descriptionContext = generateHeadDescriptionContext(
    nameBioLineContext,
    occupationBioLineContext
  );

  return Immutable.fromJS({
    type: HEAD_CONTEXT,
    content: [
      titleContext.toJS(),
      descriptionContext.toJS()
    ]
  });
}

/**
 * Inserts context with latest update into setup context
 * and updates resulting ast with new sup context
 * @param ast — setup's AST
 * @param metadata — should contain updates list
 * @returns updated setup AST
 */
function insertLatestUpdateContext (ast, metadata) {
  if (!metadata.updates.length) {
    return ast;
  }

  let setupContextIndex = ast.get('content')
    .findIndex(context => context.get('type') === SETUP_CONTEXT);

  let setupContext = ast.get('content').get(setupContextIndex);

  let updatedSetupContext = setupContext.update('content', content => {
    let latestUpdateContext = generateLatestUpdateContext(metadata.updates[0]);

    return content.insert(0, latestUpdateContext);
  });

  return ast.update('content', content => {
    return content.splice(setupContextIndex, 1, updatedSetupContext);
  });
}

module.exports = function (content = '', metadata) {
  let chars = [...content];
  let tokens = tokenize(chars);
  let lexemes = lex(tokens);
  let sanitizedLexemes = sanitize(lexemes);
  let bodyContext = Immutable.fromJS({
    type: BODY_CONTEXT,
    content: sanitizedLexemes
  });

  let bodyAst = Immutable.fromJS(
    parse(bodyContext, parsersMap)
  );
  bodyAst = insertLatestUpdateContext(bodyAst, metadata);

  let headAst = generateHeadAst(bodyAst);

  return {
    type: ROOT_CONTEXT,
    content: [
      headAst.toJS(),
      bodyAst.toJS()
    ]
  };
};
