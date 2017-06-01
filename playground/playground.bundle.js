(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  TOOL_NAME_PARSER_KEY
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

module.exports = function (content = '') {
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

  return bodyAst;
};

},{"./../lib/constants":3,"./../lib/lex":5,"./../lib/parse":6,"./../lib/parsers/bio":7,"./../lib/parsers/body":8,"./../lib/parsers/environment":10,"./../lib/parsers/environment-header":9,"./../lib/parsers/setup":11,"./../lib/parsers/tool-head":12,"./../lib/parsers/tool-item":13,"./../lib/parsers/tool-name":14,"./../lib/parsers/tool-names-list":15,"./../lib/parsers/tools-list":16,"./../lib/sanitize":33,"./../lib/tokenize":34,"immutable":35}],2:[function(require,module,exports){
let render = require('./../lib/render');

let playgroundBodyRenderer = require('./../lib/renderers/playgrount-setup-body');
let bioRenderer = require('./../lib/renderers/bio');
let bioLineRenderer = require('./../lib/renderers/bio-line');
let setupRenderer = require('./../lib/renderers/setup');
let environmentRenderer = require('./../lib/renderers/environment');
let descriptionRenderer = require('./../lib/renderers/description');
let environmentHeaderRenderer = require('./../lib/renderers/environment-header');
let environmentTitleRenderer = require('./../lib/renderers/environment-title');
let toolsListRenderer = require('./../lib/renderers/tools-list');
let toolItemRenderer = require('./../lib/renderers/tool-item');
let toolHeadRenderer = require('./../lib/renderers/tool-head');
let toolNamesListRenderer = require('./../lib/renderers/tool-names-list');
let toolNameRenderer = require('./../lib/renderers/tool-name');
let toolTitleRenderer = require('./../lib/renderers/tool-title');
let toolLinkRenderer = require('./../lib/renderers/tool-link');

const {
  BODY_RENDERER_KEY,
  BIO_RENDERER_KEY,
  BIO_LINE_RENDERER_KEY,
  SETUP_RENDERER_KEY,
  ENVIRONMENT_RENDERER_KEY,
  DESCRIPTION_RENDERER_KEY,
  ENVIRONMENT_HEADER_RENDERER_KEY,
  ENVIRONMENT_TITLE_RENDERER_KEY,
  TOOLS_LIST_RENDERER_KEY,
  TOOL_ITEM_RENDERER_KEY,
  TOOL_HEAD_RENDERER_KEY,
  TOOL_NAMES_LIST_RENDERER_KEY,
  TOOL_NAME_RENDERER_KEY,
  TOOL_TITLE_RENDERER_KEY,
  TOOL_LINK_RENDERER_KEY
} = require('./../lib/constants');

const renderersMap = {
  [BODY_RENDERER_KEY]: playgroundBodyRenderer,
  [BIO_RENDERER_KEY]: bioRenderer,
  [BIO_LINE_RENDERER_KEY]: bioLineRenderer,
  [SETUP_RENDERER_KEY]: setupRenderer,
  [ENVIRONMENT_RENDERER_KEY]: environmentRenderer,
  [DESCRIPTION_RENDERER_KEY]: descriptionRenderer,
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

module.exports = function (tree = {}) {
  return render(tree, renderersMap);
};

},{"./../lib/constants":3,"./../lib/render":17,"./../lib/renderers/bio":19,"./../lib/renderers/bio-line":18,"./../lib/renderers/description":20,"./../lib/renderers/environment":23,"./../lib/renderers/environment-header":21,"./../lib/renderers/environment-title":22,"./../lib/renderers/playgrount-setup-body":24,"./../lib/renderers/setup":25,"./../lib/renderers/tool-head":26,"./../lib/renderers/tool-item":27,"./../lib/renderers/tool-link":28,"./../lib/renderers/tool-name":29,"./../lib/renderers/tool-names-list":30,"./../lib/renderers/tool-title":31,"./../lib/renderers/tools-list":32}],3:[function(require,module,exports){
// as parsers matched against specific contexts
// parser-keys should follow special schema:
// parser-<context name>
// same thing for renderers:
// renderer-<context-name>

module.exports = {
  TITLE: 'Works For Me',
  DESCRIPTION: 'Collection of setups from people who cares about tools they use',
  BASE_URL: 'https://works-for-me.github.io',
  // parser keys
  BODY_PARSER_KEY: 'parser-body',
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
  HEAD_RENDERER_KEY: 'renderer-head',
  BODY_RENDERER_KEY: 'renderer-body',
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
  SETUP_LATEST_UPDATE_RENDERER_KEY: 'renderer-setup-latest-update',
  RSS_ITEM_TITLE_RENDERER_KEY: 'renderer-rss-item-title',
  RSS_ITEM_DESCRIPTION_RENDERER_KEY: 'renderer-rss-item-description',
  RSS_ITEM_RENDERER_KEY: 'renderer-rss-item',
  RSS_RENDERER_KEY: 'renderer-rss',
  RSS_ITEM_LINK_RENDERER_KEY: 'renderer-rss-item-link',
  RSS_ITEM_AUTHOR_RENDERER_KEY: 'renderer-rss-item-author',
  RSS_ITEM_PUB_DATE_RENDERER_KEY: 'renderer-rss-item-pub-date',
  RSS_ITEM_ID_RENDERER_KEY: 'renderer-rss-item-id',
  // context names
  ROOT_CONTEXT: 'root',
  HEAD_CONTEXT: 'head',
  HEAD_TITLE_CONTEXT: 'head-title',
  HEAD_DESCRIPTION_CONTEXT: 'head-description',
  BODY_CONTEXT: 'body',
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
  SETUP_UPDATE_DATE_CONTEXT: 'setup-update-date',
  SETUP_CREATE_DATE_CONTEXT: 'setup-create-date',
  SETUP_LATEST_UPDATE_CONTEXT: 'setup-latest-update',
  SETUP_UPDATE_MESSAGE_CONTEXT: 'setup-update-message',
  COMMIT_MESSAGE_CONTEXT: 'commit-message-context',
  COMMIT_DATE_CONTEXT: 'commit-date-context',
  COMMIT_HASH_CONTEXT: 'commit-hash-context',
  SETUP_URL_CONTEXT: 'setup-url-context',
  RSS_CONTEXT: 'rss',
  RSS_ITEM_CONTEXT: 'rss-item',
  RSS_ITEM_TITLE_CONTEXT: 'rss-item-title',
  RSS_NEW_SETUP_TITLE_CONTEXT: 'rss-new-setup-title',
  RSS_UPDATE_SETUP_TITLE_CONTEXT: 'rss-update-setup-title',
  RSS_ITEM_DESCRIPTION_CONTEXT: 'rss-item-description',
  RSS_ITEM_AUTHOR_CONTEXT: 'rss-item-author',
  RSS_ITEM_PUB_DATE_CONTEXT: 'rss-item-pub-date',
  RSS_ITEM_ID_CONTEXT: 'rss-item-id',
  RSS_ITEM_LINK_CONTEXT: 'rss-item-link',
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
  TOOL_NAMES_SEPARATOR_TOKEN: ',',
  UPDATE_TAG_TOKEN: 'update:',
  NEW_SETUP_TAG_TOKEN: 'new:',
  FIX_TAG_TOKEN: 'fix:',
  BIO_LINE_TYPE_NAME_TOKEN: 'name:',
  BIO_LINE_TYPE_OCCUPATION_TOKEN: 'occupation:',
  BIO_LINE_TYPE_LOCATION_TOKEN: 'location:',
  BIO_LINE_TYPE_LINK_TOKEN: 'link:'
};

},{}],4:[function(require,module,exports){
//const minify = require('html-minifier').minify;
const htmlBeautify = require('js-beautify').html;

module.exports = function beautify (content = '') {
  //let minified = minify(content.trim(), {
  //  caseSensitive: true, // XML required (e.g. pubDate)
  //  collapseWhitespace: true,
  //  collapseInlineTagWhitespace: true,
  //  keepClosingSlash: true
  //});
  //let minified = content;

  let beautified = htmlBeautify(content, {
    'indent_char': ' ',
    'indent_size': 2,
    'max_preserve_newlines': 1,
    'preserve_newlines': true,
    'unformatted': ['sub', 'sup', 'b', 'i', 'u'],
    'content_unformatted': ['span', 'a', 'title', 'description'],
    'wrap_line_length': 0,
    'end_with_newline': true,
    'extra_liners': ['html', '/html', 'head', 'body']
  });

  if (beautified === '\n') {
    return ''
  }

  return beautified;
};

},{"js-beautify":36}],5:[function(require,module,exports){
const {
  TOOL_BULLET_TOKEN,
  ENV_BULLET_TOKEN,
  COMMENT_BULLET_TOKEN,
  NEWLINE_TOKEN,
  RETURN_NEWLINE_TOKEN,
  TOOL_BULLET_LEXEME,
  ENV_BULLET_LEXEME,
  COMMENT_BULLET_LEXEME,
  NEWLINE_LEXEME,
  WORD_LEXEME
} = require('./constants');

let toolBullet = content => ({ type: TOOL_BULLET_LEXEME, content });
let envBullet = content => ({ type: ENV_BULLET_LEXEME, content });
let commentBullet = content => ({ type: COMMENT_BULLET_LEXEME, content });
let newline = content => ({ type: NEWLINE_LEXEME, content });
let word = content => ({ type: WORD_LEXEME, content });

let lexemesMap = {
  [TOOL_BULLET_TOKEN]: toolBullet,
  [ENV_BULLET_TOKEN]: envBullet,
  [COMMENT_BULLET_TOKEN]: commentBullet,
  [NEWLINE_TOKEN]: newline,
  [RETURN_NEWLINE_TOKEN]: newline,
  word,
};

module.exports = function lex (tokens) {
  let lexemes = tokens.map(token => {
    if (lexemesMap[token]) {
      return lexemesMap[token](token);
    }

    return lexemesMap.word(token);
  });

  return lexemes;
};

},{"./constants":3}],6:[function(require,module,exports){
let Immutable = require('immutable');

function parseContextContent (lexemes, parser) {
  let tree = Immutable.List([]);

  lexemes.forEach((lexeme, index) => {
    let contextStart = parser.isContextStart(tree, lexemes, lexeme, index);

    if (contextStart) {
      let context = parser.createContext(tree, lexemes, lexeme, index);
      tree = tree.push(context);
    }

    if (tree.size > 0) {
      tree = parser.appendTree(tree, lexeme);
    }
  });

  return tree;
}

function parse (context, parsersMap) {
  let parser = parsersMap[`parser-${context.get('type')}`];

  if (!parser) {
    return context;
  }

  let parsedContext = context.update('content', content => {
    return parseContextContent(content, parser);
  });

  return parsedContext.update('content', content => {
    return content.map(context => {
      return parse(context, parsersMap);
    });
  });
}

module.exports = function (context = {}, parsersMap = {}) {
  let tree = parse(context, parsersMap);

  return tree.toJS();
};

},{"immutable":35}],7:[function(require,module,exports){
let Immutable = require('immutable');
const {
  BIO_LINE_CONTEXT,
  NEWLINE_LEXEME,
  DESCRIPTION_CONTEXT,
  BIO_LINE_TYPE_NAME_TOKEN,
  BIO_LINE_TYPE_OCCUPATION_TOKEN,
  BIO_LINE_TYPE_LOCATION_TOKEN,
  BIO_LINE_TYPE_LINK_TOKEN
} = require('../constants');

const BIO_LINE_TYPES = [
  BIO_LINE_TYPE_NAME_TOKEN,
  BIO_LINE_TYPE_OCCUPATION_TOKEN,
  BIO_LINE_TYPE_LOCATION_TOKEN,
  BIO_LINE_TYPE_LINK_TOKEN
];

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let currentContext = tree.get(tree.size - 1);
  let prevLexeme = lexemeList.get(index - 1);

  if (prevLexeme.get('type') !== NEWLINE_LEXEME) {
    return false;
  }

  if (BIO_LINE_TYPES.includes(lexeme.get('content'))) {
    return true;
  }

  return currentContext.get('type') !== DESCRIPTION_CONTEXT;
}

function createContext (tree, lexemeList, lexeme, index) {
  if (BIO_LINE_TYPES.includes(lexeme.get('content'))) {
    return Immutable.fromJS({
      type: BIO_LINE_CONTEXT,
      content: []
    });
  }

  return Immutable.fromJS({
    type: DESCRIPTION_CONTEXT,
    content: []
  });
}

function appendTree (tree, lexeme) {
  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(lexeme));
  });
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
};

},{"../constants":3,"immutable":35}],8:[function(require,module,exports){
let Immutable = require('immutable');
const {
  BIO_CONTEXT,
  SETUP_CONTEXT,
  ENV_BULLET_LEXEME,
  TOOL_BULLET_LEXEME,
  NEWLINE_LEXEME
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let setupContextIndex = tree.findIndex(context => {
    return context.get('type') === SETUP_CONTEXT;
  });

  if (setupContextIndex !== -1) {
    return false;
  }

  let prevLexeme = lexemeList.get(index - 1);

  return prevLexeme.get('type') === NEWLINE_LEXEME &&
    (lexeme.get('type') === ENV_BULLET_LEXEME ||
    lexeme.get('type') === TOOL_BULLET_LEXEME);
}

function createContext (tree, lexemeList, lexeme, index) {
  let bioContextIndex = tree.findIndex(context => {
    return context.get('type') === BIO_CONTEXT;
  });

  if (bioContextIndex === -1) {
    return Immutable.fromJS({
      type: BIO_CONTEXT,
      content: []
    });
  }

  return Immutable.fromJS({
    type: SETUP_CONTEXT,
    content: []
  });
}

function appendTree (tree, lexeme) {
  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(lexeme));
  });
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
};

},{"../constants":3,"immutable":35}],9:[function(require,module,exports){
let Immutable = require('immutable');
let {
  ENVIRONMENT_TITLE_CONTEXT,
  DESCRIPTION_CONTEXT,
  NEWLINE_LEXEME
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let descriptionContextIndex = tree.findIndex(context => {
    return context.get('type') === DESCRIPTION_CONTEXT;
  });

  if (descriptionContextIndex !== -1) {
    return false;
  }

  let prevLexeme = lexemeList.get(index - 1);

  return prevLexeme.get('type') === NEWLINE_LEXEME;
}

function createContext (tree, lexemeList, lexeme, index) {
  let titleContextIndex = tree.findIndex(context => {
    return context.get('type') === ENVIRONMENT_TITLE_CONTEXT;
  });

  if (titleContextIndex === -1) {
    return Immutable.fromJS({
      type: ENVIRONMENT_TITLE_CONTEXT,
      content: []
    });
  }

  return Immutable.fromJS({
    type: DESCRIPTION_CONTEXT,
    content: []
  });
}

function appendTree (tree, lexeme) {
  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(lexeme));
  });
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
}

},{"../constants":3,"immutable":35}],10:[function(require,module,exports){
let Immutable = require('immutable');
let {
  ENVIRONMENT_HEADER_CONTEXT,
  TOOLS_LIST_CONTEXT,
  ENV_BULLET_LEXEME,
  TOOL_BULLET_LEXEME,
  NEWLINE_LEXEME
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let toolsContextIndex = tree.findIndex(context => {
    return context.get('type') === TOOLS_LIST_CONTEXT;
  });

  if (toolsContextIndex !== -1) {
    return false;
  }

  let prevLexeme = lexemeList.get(index - 1);

  return prevLexeme.get('type') === NEWLINE_LEXEME &&
    lexeme.get('type') === TOOL_BULLET_LEXEME;
}

function createContext (tree, lexemeList, lexeme, index) {
  if (lexeme.get('type') === ENV_BULLET_LEXEME) {
    return Immutable.fromJS({
      type: ENVIRONMENT_HEADER_CONTEXT,
      content: []
    });
 }

  return Immutable.fromJS({
    type: TOOLS_LIST_CONTEXT,
    content: []
  });
}

function appendTree (tree, lexeme) {
  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(lexeme));
  });
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
};

},{"../constants":3,"immutable":35}],11:[function(require,module,exports){
let Immutable = require('immutable');
const {
  ENVIRONMENT_CONTEXT,
  ENV_BULLET_LEXEME,
  NEWLINE_LEXEME
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let prevLexeme = lexemeList.get(index - 1);

  return prevLexeme.get('type') === NEWLINE_LEXEME &&
    lexeme.get('type') === ENV_BULLET_LEXEME;
}

function createContext (tree, lexemeList, lexeme, index) {
  return Immutable.fromJS({
    type: ENVIRONMENT_CONTEXT,
    content: []
  });
}

function appendTree (tree, lexeme) {
  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(lexeme));
  });
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
};

},{"../constants":3,"immutable":35}],12:[function(require,module,exports){
let Immutable = require('immutable');
let {
  TOOL_BULLET_LEXEME,
  TOOL_NAMES_LIST_CONTEXT
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }
}

function createContext (tree, lexemeList, lexeme, index) {
  return Immutable.fromJS({
    type: TOOL_NAMES_LIST_CONTEXT,
    content: []
  });
}

function appendTree (tree, lexeme) {
  let currentContext = tree.get(tree.size - 1);

  if (
    currentContext.get('content').size === 0 &&
    lexeme.get('type') === TOOL_BULLET_LEXEME
  ) {
    return tree;
  }

  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(lexeme));
  });
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
}

},{"../constants":3,"immutable":35}],13:[function(require,module,exports){
let Immutable = require('immutable');
let {
  TOOL_HEAD_CONTEXT,
  DESCRIPTION_CONTEXT,
  NEWLINE_LEXEME
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let descriptionContextIndex = tree.findIndex(context => {
    return context.get('type') === DESCRIPTION_CONTEXT;
  });

  if (descriptionContextIndex !== -1) {
    return false;
  }

  let prevLexeme = lexemeList.get(index - 1);

  return prevLexeme.get('type') === NEWLINE_LEXEME;
}

function createContext (tree, lexemeList, lexeme, index) {
  let titleContextIndex = tree.findIndex(context => {
    return context.get('type') === TOOL_HEAD_CONTEXT;
  });

  if (titleContextIndex === -1) {
    return Immutable.fromJS({
      type: TOOL_HEAD_CONTEXT,
      content: []
    });
  }

  return Immutable.fromJS({
    type: DESCRIPTION_CONTEXT,
    content: []
  });
}

function appendTree (tree, lexeme) {
  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(lexeme));
  });
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
}

},{"../constants":3,"immutable":35}],14:[function(require,module,exports){
let Immutable = require('immutable');
let {
  TOOL_LINK_CONTEXT,
  TOOL_TITLE_CONTEXT
} = require('../constants');

function isLinkStart (content) {
  const PATTERN = /^\(https?:\/\/.+/;

  return PATTERN.test(content);
}

function isLinkEnd (content) {
  const PATTERN = /\)$/;

  return PATTERN.test(content);
}

function stripParentheses (content) {
  const PATTERN = /(^\()|(\)$)/g;

  return content.replace(PATTERN, '');
}

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let prevLexeme = lexemeList.get(index - 1);
  let currentContext = tree.get(tree.size - 1);

  if (currentContext.get('type') === TOOL_LINK_CONTEXT) {
    return isLinkEnd(prevLexeme.get('content'));
  } else {
    return isLinkStart(lexeme.get('content'));
  }
}

function createContext (tree, lexemeList, lexeme, index) {
  if (isLinkStart(lexeme.get('content'))) {
    return Immutable.fromJS({
      type: TOOL_LINK_CONTEXT,
      content: []
    });
  }

  return Immutable.fromJS({
    type: TOOL_TITLE_CONTEXT,
    content: []
  });
}

function appendTree (tree, lexeme) {
  let currentContext = tree.get(tree.size - 1);
  let strippedLexeme = lexeme;

  if (currentContext.get('type') === TOOL_LINK_CONTEXT) {
    strippedLexeme = lexeme.update('content', content => {
      return stripParentheses(content);
    });
  }

  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(strippedLexeme));
  });
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
};

},{"../constants":3,"immutable":35}],15:[function(require,module,exports){
let Immutable = require('immutable');
let {
  TOOL_NAME_CONTEXT,
  TOOL_NAMES_SEPARATOR_TOKEN,
  NEWLINE_LEXEME
} = require('../constants');

function hasSeparator(content) {
  return content[content.length - 1] === TOOL_NAMES_SEPARATOR_TOKEN;
}

function stripSeparator(content) {
  if (!hasSeparator(content)) {
    return content;
  }

  return content.split('').slice(0, -1).join('');
}

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let prevLexeme = lexemeList.get(index - 1);
  let prevContent = prevLexeme.get('content');

  return hasSeparator(prevContent);
}

function createContext () {
  return Immutable.fromJS({
    type: TOOL_NAME_CONTEXT,
    content: []
  });
}

function appendTree (tree, lexeme) {
  if (lexeme.get('type') === NEWLINE_LEXEME) {
    return tree;
  }

  let strippedLexeme = lexeme.update('content', content => {
    return stripSeparator(content);
  });

  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(strippedLexeme));
  });
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
};

},{"../constants":3,"immutable":35}],16:[function(require,module,exports){
let Immutable = require('immutable');
const {
  TOOL_ITEM_CONTEXT,
  TOOL_BULLET_LEXEME,
  NEWLINE_LEXEME
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let prevLexeme = lexemeList.get(index - 1);

  return prevLexeme.get('type') === NEWLINE_LEXEME &&
    lexeme.get('type') === TOOL_BULLET_LEXEME;
}

function createContext (tree, lexemeList, lexeme, index) {
  return Immutable.fromJS({
    type: TOOL_ITEM_CONTEXT,
    content: []
  });
}

function appendTree (tree, lexeme) {
  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(lexeme));
  });
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
};

},{"../constants":3,"immutable":35}],17:[function(require,module,exports){
const Immutable = require('immutable');
const htmlBeautify = require('./html-beautify');

function renderContextContent (content, type, renderersMap) {
  let renderer = renderersMap[`renderer-${type}`];

  if (!renderer) {
    return '';
  }

  return renderer.render(content);
}

function render (tree, renderersMap) {
  let content = tree.get('content');
  let type = tree.get('type');

  if (!Immutable.List.isList(content)) {
    return tree;
  }

  let renderedTree = tree.update('content', content => {
    return content.map(context => {
      return render(context, renderersMap);
    });
  });

  return renderedTree.update('content', content => {
    return renderContextContent(content, type, renderersMap);
  });
}

module.exports = function (tree, renderersMap) {
  let content = render(Immutable.fromJS(tree), renderersMap).get('content');

  return htmlBeautify(content);
};

},{"./html-beautify":4,"immutable":35}],18:[function(require,module,exports){
const { NEWLINE_LEXEME } = require('../constants');

let typeRenderersMap = {
  'name:': renderName,
  'occupation:': renderOccupation,
  'location:': renderLocation,
  'link:': renderLink
};

function renderName (name) {
  return `
    <h1 class="name">${name}</h1>
  `;
}

function renderOccupation (occupation) {
  return `
    <div class="occupation">${occupation}</div>
  `;
}

function renderLocation (location) {
  return `
    <div class="location">${location}</div>
  `;
}

function renderLink (url) {
  let linkTitle = generateLinkTitle(url);
  let linkHref = generateLinkHref(url);

  return `
    <a class="link" href="${linkHref}">${linkTitle}</a>
  `;
}

function sanitize (content) {
  return content.filter(lexeme => {
    return lexeme.get('type') !== NEWLINE_LEXEME;
  });
}

function generateLinkTitle (url = '') {
  const TWITTER_PATTERN = /^https?:\/\/twitter\.com\/(@?.+)/;

  let twitterLink = url.match(TWITTER_PATTERN);

  if (twitterLink) {
    return `@${twitterLink[1].replace(/^@/, '')}`;
  }

  return url;
}

function generateLinkHref (url = '') {
  const EMAIL_PATTERN = /^[^/]+@.*\.\w*/;

  let emailLink = url.match(EMAIL_PATTERN);

  if (emailLink)  {
    return `mailto:${emailLink[0]}`;
  }

  return url;
}


function render (content) {
  if (!content || !content.size) {
    return '';
  }

  let sanitizedContent = sanitize(content);
  let lineType =  sanitizedContent.first().get('content');
  let typeRenderer = typeRenderersMap[lineType];

  if (!typeRenderer || content.size < 2) {
    return '';
  }

  let contentString = sanitizedContent
    .slice(1)
    .map(lexeme => lexeme.get('content'))
    .join(' ');

  return typeRenderer(contentString);
}

module.exports = {
  render
};

},{"../constants":3}],19:[function(require,module,exports){
const {
  DESCRIPTION_CONTEXT
} = require('../constants');

function filterInterlineDescriptions (tree, context, index) {
  return context.get('type') !== DESCRIPTION_CONTEXT ||
    index === tree.size - 1;
}

function render (tree = []) {
  let contentString = tree
    .filter((context, index) => filterInterlineDescriptions(tree, context, index))
    .map(context => context.get('content'))
    .join('');

  return `
    <section class="bio">
      ${contentString}
    </section>
  `;
}

module.exports = {
  render
};

},{"../constants":3}],20:[function(require,module,exports){
const {
  NEWLINE_TOKEN
} = require('../constants.js');

function renderNewlines (contentString) {
  return contentString.replace(new RegExp(`${ NEWLINE_TOKEN }`, 'g'), '<br>');
}

function renderInternals (contentString) {
  let newlines = renderNewlines(contentString);

  return newlines;
}

function getContentString (tree) {
  let contentString = tree
    .map(lexeme => lexeme.get('content'))
    .join(' ')
    .trim();

  return renderInternals(contentString);
}

function render (tree = []) {
  let contentString = getContentString(tree);

  if (!contentString) {
    return '';
  }

  return `
    <div class="description">
      ${ contentString }
    </div>
  `;
}

module.exports = {
  render
};

},{"../constants.js":3}],21:[function(require,module,exports){
function render (tree = []) {
  let contentString = tree
    .map(context => context.get('content'))
    .join('');

  return `
    <section class="environment-header">
      ${contentString}
    </section>
  `;
}

module.exports = {
  render
};

},{}],22:[function(require,module,exports){
function render (tree = []) {
  let contentString = tree
    .slice(1)
    .map(context => context.get('content'))
    .join('');

  return `
    <h2 class="environment-title">${contentString}</h2>
  `;
}

module.exports = {
  render
};

},{}],23:[function(require,module,exports){
function render (tree = []) {
  let contentString = tree
    .map(context => context.get('content'))
    .join('');

  return `
    <article class="environment">
      ${contentString}
    </article>
  `;
}

module.exports = {
  render
};

},{}],24:[function(require,module,exports){
function render (content) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n');

  return `
    <div class="setup-root">
      ${ contentString } 
    </div>
  `;
}

module.exports = {
  render
};

},{}],25:[function(require,module,exports){
function render (tree = []) {
  let contentString = tree
    .map(context => context.get('content'))
    .join('');

  return `
    <section class="setup">
      ${contentString}
    </section>
  `;
}

module.exports = {
  render
};

},{}],26:[function(require,module,exports){
function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n');

  return `
    <div class="tool-head">
      ${contentString}
    </div>
  `;
}

module.exports = {
  render
};

},{}],27:[function(require,module,exports){
function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n');

  return `
    <div class="tool-item">
      ${contentString}
    </div>
  `;
}

module.exports = {
  render
};

},{}],28:[function(require,module,exports){
function render (content = []) {
  return content
    .map(context => context.get('content'))
    .join('');
}

module.exports = {
  render
};

},{}],29:[function(require,module,exports){
const {
  TOOL_TITLE_CONTEXT,
  TOOL_LINK_CONTEXT
} = require('../constants');

function render (content = []) {
  let toolTitle = getToolTitle(content);
  let toolUrl = getToolUrl(content);

  if (toolUrl) {
    return renderAsLink(toolTitle, toolUrl);
  } else {
    return renderAsBlock(toolTitle);
  }
}

function getToolTitle (content) {
  let titleContext = content.find(context => {
    return context.get('type') === TOOL_TITLE_CONTEXT;
  });

  if (!titleContext) {
    return '';
  }

  return titleContext.get('content');
}

function getToolUrl (content) {
  let linkContext = content.find(context => {
    return context.get('type') === TOOL_LINK_CONTEXT;
  });

  if (!linkContext) {
    return;
  }

  return linkContext.get('content');
}

function renderAsLink (title, url) {
  return `
    <a class="tool-name" href="${url}">${title}</a>
  `;
}

function renderAsBlock (title) {
  return `
    <span class="tool-name" tabindex="0">${title}</span>
  `;
}

module.exports = {
  render
};

},{"../constants":3}],30:[function(require,module,exports){
function render (content = []) {
  const separator = '<span class="tool-names-list-separator">,</span>';

  let contentString = content
    .map(context => context.get('content'))
    .join(separator);

  return `
    <div class="tool-names-list">
      ${contentString}
    </div>
  `;
}

module.exports = {
  render
};

},{}],31:[function(require,module,exports){
function render (content = []) {
  return content
    .map(context => context.get('content'))
    .join(' ');
}

module.exports = {
  render
};

},{}],32:[function(require,module,exports){
function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('');

  return `
    <section class="tools-list">
      ${contentString}
    </section>
  `;
}

module.exports = {
  render
};

},{}],33:[function(require,module,exports){
const {
  COMMENT_BULLET_LEXEME,
  NEWLINE_LEXEME
} = require('./constants');

function isCommentStart (lexemes, lexeme, index) {
  return (index === 0 || lexemes[index - 1].type === NEWLINE_LEXEME) &&
    lexeme.type === COMMENT_BULLET_LEXEME;
}

function isCommentEnd (lexemes, index) {
  return index !== 0 && lexemes[index - 1].type === NEWLINE_LEXEME;
}

function clearComments (lexemes) {
  let withinComment = false;

  return lexemes.reduce((clearedLexemes, lexeme, index) => {
    withinComment = withinComment && !isCommentEnd(lexemes, index) ||
      isCommentStart(lexemes, lexeme, index);

    if (!withinComment) {
      clearedLexemes.push(lexeme);
    }

    return clearedLexemes;
  }, []);
}

module.exports = function sanitize (lexemes) {
  return clearComments(lexemes);
};


},{"./constants":3}],34:[function(require,module,exports){
const {
  SPACE_TOKEN,
  TAB_TOKEN,
  NEWLINE_TOKEN,
  RETURN_NEWLINE_TOKEN
} = require('./constants');

const TOKEN_SEPARATORS = [SPACE_TOKEN, TAB_TOKEN];
const LINE_SEPARATORS = [NEWLINE_TOKEN, RETURN_NEWLINE_TOKEN];

function tokenize (chars) {
  let tokens = [];
  let token = '';

  chars.forEach((char, index) => {
    if (
      !TOKEN_SEPARATORS.includes(char) &&
      !LINE_SEPARATORS.includes(char)
    ) {
      token += char;
    }

    if (
      (TOKEN_SEPARATORS.includes(char) ||
      LINE_SEPARATORS.includes(char) ||
      index === chars.length - 1) &&
      token
    ) {
      tokens.push(token);
      token = '';
    }

    if (LINE_SEPARATORS.includes(char)) {
      tokens.push(char);
    }
  });

  return tokens;
}

module.exports = tokenize;

},{"./constants":3}],35:[function(require,module,exports){
/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Immutable = factory());
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
      return emptyMap().withMutations(function(map ) {
        for (var i = 0; i < keyValues.length; i += 2) {
          if (i + 1 >= keyValues.length) {
            throw new Error('Missing value for key: ' + keyValues[i]);
          }
          map.set(keyValues[i], keyValues[i + 1]);
        }
      });
    };

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      if (this._map && !this._map.has(k)) {
        var defaultVal = this._defaultValues[k];
        if (v === defaultVal) {
          return this;
        }
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findEntry: function(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    findLastEntry: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },

    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    lastKeyOf: function(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    keySeq: function() {
      return Range(0, this.size);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));
},{}],36:[function(require,module,exports){
/*
  The MIT License (MIT)

  Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

*/

/**
The following batches are equivalent:

var beautify_js = require('js-beautify');
var beautify_js = require('js-beautify').js;
var beautify_js = require('js-beautify').js_beautify;

var beautify_css = require('js-beautify').css;
var beautify_css = require('js-beautify').css_beautify;

var beautify_html = require('js-beautify').html;
var beautify_html = require('js-beautify').html_beautify;

All methods returned accept two arguments, the source string and an options object.
**/

function get_beautify(js_beautify, css_beautify, html_beautify) {
    // the default is js
    var beautify = function(src, config) {
        return js_beautify.js_beautify(src, config);
    };

    // short aliases
    beautify.js = js_beautify.js_beautify;
    beautify.css = css_beautify.css_beautify;
    beautify.html = html_beautify.html_beautify;

    // legacy aliases
    beautify.js_beautify = js_beautify.js_beautify;
    beautify.css_beautify = css_beautify.css_beautify;
    beautify.html_beautify = html_beautify.html_beautify;

    return beautify;
}

if (typeof define === "function" && define.amd) {
    // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
    define([
        "./lib/beautify",
        "./lib/beautify-css",
        "./lib/beautify-html"
    ], function(js_beautify, css_beautify, html_beautify) {
        return get_beautify(js_beautify, css_beautify, html_beautify);
    });
} else {
    (function(mod) {
        var js_beautify = require('./lib/beautify');
        var css_beautify = require('./lib/beautify-css');
        var html_beautify = require('./lib/beautify-html');

        mod.exports = get_beautify(js_beautify, css_beautify, html_beautify);

    })(module);
}
},{"./lib/beautify":39,"./lib/beautify-css":37,"./lib/beautify-html":38}],37:[function(require,module,exports){
(function (global){
/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


 CSS Beautifier
---------------

    Written by Harutyun Amirjanyan, (amirjanyan@gmail.com)

    Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
        http://jsbeautifier.org/

    Usage:
        css_beautify(source_text);
        css_beautify(source_text, options);

    The options are (default in brackets):
        indent_size (4)                         — indentation size,
        indent_char (space)                     — character to indent with,
        preserve_newlines (default false)       - whether existing line breaks should be preserved,
        selector_separator_newline (true)       - separate selectors with newline or
                                                  not (e.g. "a,\nbr" or "a, br")
        end_with_newline (false)                - end with a newline
        newline_between_rules (true)            - add a new line after every css rule
        space_around_selector_separator (false) - ensure space around selector separators:
                                                  '>', '+', '~' (e.g. "a>b" -> "a > b")
    e.g

    css_beautify(css_source_text, {
      'indent_size': 1,
      'indent_char': '\t',
      'selector_separator': ' ',
      'end_with_newline': false,
      'newline_between_rules': true,
      'space_around_selector_separator': true
    });
*/

// http://www.w3.org/TR/CSS21/syndata.html#tokenization
// http://www.w3.org/TR/css3-syntax/

(function() {

    function mergeOpts(allOptions, targetType) {
        var finalOpts = {};
        var name;

        for (name in allOptions) {
            if (name !== targetType) {
                finalOpts[name] = allOptions[name];
            }
        }


        //merge in the per type settings for the targetType
        if (targetType in allOptions) {
            for (name in allOptions[targetType]) {
                finalOpts[name] = allOptions[targetType][name];
            }
        }
        return finalOpts;
    }

    var lineBreak = /\r\n|[\n\r\u2028\u2029]/;
    var allLineBreaks = new RegExp(lineBreak.source, 'g');

    function css_beautify(source_text, options) {
        options = options || {};

        // Allow the setting of language/file-type specific options
        // with inheritance of overall settings
        options = mergeOpts(options, 'css');

        source_text = source_text || '';

        var newlinesFromLastWSEat = 0;
        var indentSize = options.indent_size ? parseInt(options.indent_size, 10) : 4;
        var indentCharacter = options.indent_char || ' ';
        var preserve_newlines = (options.preserve_newlines === undefined) ? false : options.preserve_newlines;
        var selectorSeparatorNewline = (options.selector_separator_newline === undefined) ? true : options.selector_separator_newline;
        var end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
        var newline_between_rules = (options.newline_between_rules === undefined) ? true : options.newline_between_rules;
        var space_around_combinator = (options.space_around_combinator === undefined) ? false : options.space_around_combinator;
        space_around_combinator = space_around_combinator || ((options.space_around_selector_separator === undefined) ? false : options.space_around_selector_separator);
        var eol = options.eol ? options.eol : 'auto';

        if (options.indent_with_tabs) {
            indentCharacter = '\t';
            indentSize = 1;
        }

        if (eol === 'auto') {
            eol = '\n';
            if (source_text && lineBreak.test(source_text || '')) {
                eol = source_text.match(lineBreak)[0];
            }
        }

        eol = eol.replace(/\\r/, '\r').replace(/\\n/, '\n');

        // HACK: newline parsing inconsistent. This brute force normalizes the input.
        source_text = source_text.replace(allLineBreaks, '\n');

        // tokenizer
        var whiteRe = /^\s+$/;

        var pos = -1,
            ch;
        var parenLevel = 0;

        function next() {
            ch = source_text.charAt(++pos);
            return ch || '';
        }

        function peek(skipWhitespace) {
            var result = '';
            var prev_pos = pos;
            if (skipWhitespace) {
                eatWhitespace();
            }
            result = source_text.charAt(pos + 1) || '';
            pos = prev_pos - 1;
            next();
            return result;
        }

        function eatString(endChars) {
            var start = pos;
            while (next()) {
                if (ch === "\\") {
                    next();
                } else if (endChars.indexOf(ch) !== -1) {
                    break;
                } else if (ch === "\n") {
                    break;
                }
            }
            return source_text.substring(start, pos + 1);
        }

        function peekString(endChar) {
            var prev_pos = pos;
            var str = eatString(endChar);
            pos = prev_pos - 1;
            next();
            return str;
        }

        function eatWhitespace(preserve_newlines_local) {
            var result = 0;
            while (whiteRe.test(peek())) {
                next();
                if (ch === '\n' && preserve_newlines_local && preserve_newlines) {
                    print.newLine(true);
                    result++;
                }
            }
            newlinesFromLastWSEat = result;
            return result;
        }

        function skipWhitespace() {
            var result = '';
            if (ch && whiteRe.test(ch)) {
                result = ch;
            }
            while (whiteRe.test(next())) {
                result += ch;
            }
            return result;
        }

        function eatComment(singleLine) {
            var start = pos;
            singleLine = peek() === "/";
            next();
            while (next()) {
                if (!singleLine && ch === "*" && peek() === "/") {
                    next();
                    break;
                } else if (singleLine && ch === "\n") {
                    return source_text.substring(start, pos);
                }
            }

            return source_text.substring(start, pos) + ch;
        }


        function lookBack(str) {
            return source_text.substring(pos - str.length, pos).toLowerCase() ===
                str;
        }

        // Nested pseudo-class if we are insideRule
        // and the next special character found opens
        // a new block
        function foundNestedPseudoClass() {
            var openParen = 0;
            for (var i = pos + 1; i < source_text.length; i++) {
                var ch = source_text.charAt(i);
                if (ch === "{") {
                    return true;
                } else if (ch === '(') {
                    // pseudoclasses can contain ()
                    openParen += 1;
                } else if (ch === ')') {
                    if (openParen === 0) {
                        return false;
                    }
                    openParen -= 1;
                } else if (ch === ";" || ch === "}") {
                    return false;
                }
            }
            return false;
        }

        // printer
        var basebaseIndentString = source_text.match(/^[\t ]*/)[0];
        var singleIndent = new Array(indentSize + 1).join(indentCharacter);
        var indentLevel = 0;
        var nestedLevel = 0;

        function indent() {
            indentLevel++;
            basebaseIndentString += singleIndent;
        }

        function outdent() {
            indentLevel--;
            basebaseIndentString = basebaseIndentString.slice(0, -indentSize);
        }

        var print = {};
        print["{"] = function(ch) {
            print.singleSpace();
            output.push(ch);
            if (!eatWhitespace(true)) {
                print.newLine();
            }
        };
        print["}"] = function(newline) {
            if (newline) {
                print.newLine();
            }
            output.push('}');
            if (!eatWhitespace(true)) {
                print.newLine();
            }
        };

        print._lastCharWhitespace = function() {
            return whiteRe.test(output[output.length - 1]);
        };

        print.newLine = function(keepWhitespace) {
            if (output.length) {
                if (!keepWhitespace && output[output.length - 1] !== '\n') {
                    print.trim();
                } else if (output[output.length - 1] === basebaseIndentString) {
                    output.pop();
                }
                output.push('\n');

                if (basebaseIndentString) {
                    output.push(basebaseIndentString);
                }
            }
        };
        print.singleSpace = function() {
            if (output.length && !print._lastCharWhitespace()) {
                output.push(' ');
            }
        };

        print.preserveSingleSpace = function() {
            if (isAfterSpace) {
                print.singleSpace();
            }
        };

        print.trim = function() {
            while (print._lastCharWhitespace()) {
                output.pop();
            }
        };


        var output = [];
        /*_____________________--------------------_____________________*/

        var insideRule = false;
        var insidePropertyValue = false;
        var enteringConditionalGroup = false;
        var top_ch = '';
        var last_top_ch = '';

        while (true) {
            var whitespace = skipWhitespace();
            var isAfterSpace = whitespace !== '';
            var isAfterNewline = whitespace.indexOf('\n') !== -1;
            last_top_ch = top_ch;
            top_ch = ch;

            if (!ch) {
                break;
            } else if (ch === '/' && peek() === '*') { /* css comment */
                var header = indentLevel === 0;

                if (isAfterNewline || header) {
                    print.newLine();
                }

                output.push(eatComment());
                print.newLine();
                if (header) {
                    print.newLine(true);
                }
            } else if (ch === '/' && peek() === '/') { // single line comment
                if (!isAfterNewline && last_top_ch !== '{') {
                    print.trim();
                }
                print.singleSpace();
                output.push(eatComment());
                print.newLine();
            } else if (ch === '@') {
                print.preserveSingleSpace();

                // deal with less propery mixins @{...}
                if (peek() === '{') {
                    output.push(eatString('}'));
                } else {
                    output.push(ch);

                    // strip trailing space, if present, for hash property checks
                    var variableOrRule = peekString(": ,;{}()[]/='\"");

                    if (variableOrRule.match(/[ :]$/)) {
                        // we have a variable or pseudo-class, add it and insert one space before continuing
                        next();
                        variableOrRule = eatString(": ").replace(/\s$/, '');
                        output.push(variableOrRule);
                        print.singleSpace();
                    }

                    variableOrRule = variableOrRule.replace(/\s$/, '');

                    // might be a nesting at-rule
                    if (variableOrRule in css_beautify.NESTED_AT_RULE) {
                        nestedLevel += 1;
                        if (variableOrRule in css_beautify.CONDITIONAL_GROUP_RULE) {
                            enteringConditionalGroup = true;
                        }
                    }
                }
            } else if (ch === '#' && peek() === '{') {
                print.preserveSingleSpace();
                output.push(eatString('}'));
            } else if (ch === '{') {
                if (peek(true) === '}') {
                    eatWhitespace();
                    next();
                    print.singleSpace();
                    output.push("{");
                    print['}'](false);
                    if (newlinesFromLastWSEat < 2 && newline_between_rules && indentLevel === 0) {
                        print.newLine(true);
                    }
                } else {
                    indent();
                    print["{"](ch);
                    // when entering conditional groups, only rulesets are allowed
                    if (enteringConditionalGroup) {
                        enteringConditionalGroup = false;
                        insideRule = (indentLevel > nestedLevel);
                    } else {
                        // otherwise, declarations are also allowed
                        insideRule = (indentLevel >= nestedLevel);
                    }
                }
            } else if (ch === '}') {
                outdent();
                print["}"](true);
                insideRule = false;
                insidePropertyValue = false;
                if (nestedLevel) {
                    nestedLevel--;
                }
                if (newlinesFromLastWSEat < 2 && newline_between_rules && indentLevel === 0) {
                    print.newLine(true);
                }
            } else if (ch === ":") {
                eatWhitespace();
                if ((insideRule || enteringConditionalGroup) &&
                    !(lookBack("&") || foundNestedPseudoClass()) &&
                    !lookBack("(")) {
                    // 'property: value' delimiter
                    // which could be in a conditional group query
                    output.push(':');
                    if (!insidePropertyValue) {
                        insidePropertyValue = true;
                        print.singleSpace();
                    }
                } else {
                    // sass/less parent reference don't use a space
                    // sass nested pseudo-class don't use a space

                    // preserve space before pseudoclasses/pseudoelements, as it means "in any child"
                    if (lookBack(" ") && output[output.length - 1] !== " ") {
                        output.push(" ");
                    }
                    if (peek() === ":") {
                        // pseudo-element
                        next();
                        output.push("::");
                    } else {
                        // pseudo-class
                        output.push(':');
                    }
                }
            } else if (ch === '"' || ch === '\'') {
                print.preserveSingleSpace();
                output.push(eatString(ch));
            } else if (ch === ';') {
                insidePropertyValue = false;
                output.push(ch);
                if (!eatWhitespace(true)) {
                    print.newLine();
                }
            } else if (ch === '(') { // may be a url
                if (lookBack("url")) {
                    output.push(ch);
                    eatWhitespace();
                    if (next()) {
                        if (ch !== ')' && ch !== '"' && ch !== '\'') {
                            output.push(eatString(')'));
                        } else {
                            pos--;
                        }
                    }
                } else {
                    parenLevel++;
                    print.preserveSingleSpace();
                    output.push(ch);
                    eatWhitespace();
                }
            } else if (ch === ')') {
                output.push(ch);
                parenLevel--;
            } else if (ch === ',') {
                output.push(ch);
                if (!eatWhitespace(true) && selectorSeparatorNewline && !insidePropertyValue && parenLevel < 1) {
                    print.newLine();
                } else {
                    print.singleSpace();
                }
            } else if ((ch === '>' || ch === '+' || ch === '~') &&
                !insidePropertyValue && parenLevel < 1) {
                //handle combinator spacing
                if (space_around_combinator) {
                    print.singleSpace();
                    output.push(ch);
                    print.singleSpace();
                } else {
                    output.push(ch);
                    eatWhitespace();
                    // squash extra whitespace
                    if (ch && whiteRe.test(ch)) {
                        ch = '';
                    }
                }
            } else if (ch === ']') {
                output.push(ch);
            } else if (ch === '[') {
                print.preserveSingleSpace();
                output.push(ch);
            } else if (ch === '=') { // no whitespace before or after
                eatWhitespace();
                output.push('=');
                if (whiteRe.test(ch)) {
                    ch = '';
                }
            } else {
                print.preserveSingleSpace();
                output.push(ch);
            }
        }


        var sweetCode = '';
        if (basebaseIndentString) {
            sweetCode += basebaseIndentString;
        }

        sweetCode += output.join('').replace(/[\r\n\t ]+$/, '');

        // establish end_with_newline
        if (end_with_newline) {
            sweetCode += '\n';
        }

        if (eol !== '\n') {
            sweetCode = sweetCode.replace(/[\n]/g, eol);
        }

        return sweetCode;
    }

    // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
    css_beautify.NESTED_AT_RULE = {
        "@page": true,
        "@font-face": true,
        "@keyframes": true,
        // also in CONDITIONAL_GROUP_RULE below
        "@media": true,
        "@supports": true,
        "@document": true
    };
    css_beautify.CONDITIONAL_GROUP_RULE = {
        "@media": true,
        "@supports": true,
        "@document": true
    };

    /*global define */
    if (typeof define === "function" && define.amd) {
        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
        define([], function() {
            return {
                css_beautify: css_beautify
            };
        });
    } else if (typeof exports !== "undefined") {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var html_beautify = require("beautify").html_beautify`.
        exports.css_beautify = css_beautify;
    } else if (typeof window !== "undefined") {
        // If we're running a web page and don't have either of the above, add our one global
        window.css_beautify = css_beautify;
    } else if (typeof global !== "undefined") {
        // If we don't even have window, try global.
        global.css_beautify = css_beautify;
    }

}());
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],38:[function(require,module,exports){
(function (global){
/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


 Style HTML
---------------

  Written by Nochum Sossonko, (nsossonko@hotmail.com)

  Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
    http://jsbeautifier.org/

  Usage:
    style_html(html_source);

    style_html(html_source, options);

  The options are:
    indent_inner_html (default false)  — indent <head> and <body> sections,
    indent_size (default 4)          — indentation size,
    indent_char (default space)      — character to indent with,
    wrap_line_length (default 250)            -  maximum amount of characters per line (0 = disable)
    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
    unformatted (defaults to inline tags) - list of tags, that shouldn't be reformatted
    content_unformatted (defaults to pre tag) - list of tags, that its content shouldn't be reformatted
    indent_scripts (default normal)  - "keep"|"separate"|"normal"
    preserve_newlines (default true) - whether existing line breaks before elements should be preserved
                                        Only works before elements, not inside tags or for text.
    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk
    indent_handlebars (default false) - format and indent {{#foo}} and {{/foo}}
    end_with_newline (false)          - end with a newline
    extra_liners (default [head,body,/html]) -List of tags that should have an extra newline before them.

    e.g.

    style_html(html_source, {
      'indent_inner_html': false,
      'indent_size': 2,
      'indent_char': ' ',
      'wrap_line_length': 78,
      'brace_style': 'expand',
      'preserve_newlines': true,
      'max_preserve_newlines': 5,
      'indent_handlebars': false,
      'extra_liners': ['/html']
    });
*/

(function() {

    // function trim(s) {
    //     return s.replace(/^\s+|\s+$/g, '');
    // }

    function ltrim(s) {
        return s.replace(/^\s+/g, '');
    }

    function rtrim(s) {
        return s.replace(/\s+$/g, '');
    }

    function mergeOpts(allOptions, targetType) {
        var finalOpts = {};
        var name;

        for (name in allOptions) {
            if (name !== targetType) {
                finalOpts[name] = allOptions[name];
            }
        }

        //merge in the per type settings for the targetType
        if (targetType in allOptions) {
            for (name in allOptions[targetType]) {
                finalOpts[name] = allOptions[targetType][name];
            }
        }
        return finalOpts;
    }

    var lineBreak = /\r\n|[\n\r\u2028\u2029]/;
    var allLineBreaks = new RegExp(lineBreak.source, 'g');

    function style_html(html_source, options, js_beautify, css_beautify) {
        //Wrapper function to invoke all the necessary constructors and deal with the output.

        var multi_parser,
            indent_inner_html,
            indent_body_inner_html,
            indent_head_inner_html,
            indent_size,
            indent_character,
            wrap_line_length,
            brace_style,
            unformatted,
            content_unformatted,
            preserve_newlines,
            max_preserve_newlines,
            indent_handlebars,
            wrap_attributes,
            wrap_attributes_indent_size,
            is_wrap_attributes_force,
            is_wrap_attributes_force_expand_multiline,
            is_wrap_attributes_force_aligned,
            end_with_newline,
            extra_liners,
            eol;

        options = options || {};

        // Allow the setting of language/file-type specific options
        // with inheritance of overall settings
        options = mergeOpts(options, 'html');

        // backwards compatibility to 1.3.4
        if ((options.wrap_line_length === undefined || parseInt(options.wrap_line_length, 10) === 0) &&
            (options.max_char !== undefined && parseInt(options.max_char, 10) !== 0)) {
            options.wrap_line_length = options.max_char;
        }

        indent_inner_html = (options.indent_inner_html === undefined) ? false : options.indent_inner_html;
        indent_body_inner_html = (options.indent_body_inner_html === undefined) ? true : options.indent_body_inner_html;
        indent_head_inner_html = (options.indent_head_inner_html === undefined) ? true : options.indent_head_inner_html;
        indent_size = (options.indent_size === undefined) ? 4 : parseInt(options.indent_size, 10);
        indent_character = (options.indent_char === undefined) ? ' ' : options.indent_char;
        brace_style = (options.brace_style === undefined) ? 'collapse' : options.brace_style;
        wrap_line_length = parseInt(options.wrap_line_length, 10) === 0 ? 32786 : parseInt(options.wrap_line_length || 250, 10);
        unformatted = options.unformatted || [
            // https://www.w3.org/TR/html5/dom.html#phrasing-content
            'a', 'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite',
            'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img',
            'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript',
            'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', /* 'script', */ 'select', 'small',
            'span', 'strong', 'sub', 'sup', 'svg', 'template', 'textarea', 'time', 'u', 'var',
            'video', 'wbr', 'text',
            // prexisting - not sure of full effect of removing, leaving in
            'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt',
        ];
        content_unformatted = options.content_unformatted || [
            'pre',
        ];
        preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
        max_preserve_newlines = preserve_newlines ?
            (isNaN(parseInt(options.max_preserve_newlines, 10)) ? 32786 : parseInt(options.max_preserve_newlines, 10)) :
            0;
        indent_handlebars = (options.indent_handlebars === undefined) ? false : options.indent_handlebars;
        wrap_attributes = (options.wrap_attributes === undefined) ? 'auto' : options.wrap_attributes;
        wrap_attributes_indent_size = (isNaN(parseInt(options.wrap_attributes_indent_size, 10))) ? indent_size : parseInt(options.wrap_attributes_indent_size, 10);
        is_wrap_attributes_force = wrap_attributes.substr(0, 'force'.length) === 'force';
        is_wrap_attributes_force_expand_multiline = (wrap_attributes === 'force-expand-multiline');
        is_wrap_attributes_force_aligned = (wrap_attributes === 'force-aligned');
        end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
        extra_liners = (typeof options.extra_liners === 'object') && options.extra_liners ?
            options.extra_liners.concat() : (typeof options.extra_liners === 'string') ?
            options.extra_liners.split(',') : 'head,body,/html'.split(',');
        eol = options.eol ? options.eol : 'auto';

        if (options.indent_with_tabs) {
            indent_character = '\t';
            indent_size = 1;
        }

        if (eol === 'auto') {
            eol = '\n';
            if (html_source && lineBreak.test(html_source || '')) {
                eol = html_source.match(lineBreak)[0];
            }
        }

        eol = eol.replace(/\\r/, '\r').replace(/\\n/, '\n');

        // HACK: newline parsing inconsistent. This brute force normalizes the input.
        html_source = html_source.replace(allLineBreaks, '\n');

        function Parser() {

            this.pos = 0; //Parser position
            this.token = '';
            this.current_mode = 'CONTENT'; //reflects the current Parser mode: TAG/CONTENT
            this.tags = { //An object to hold tags, their position, and their parent-tags, initiated with default values
                parent: 'parent1',
                parentcount: 1,
                parent1: ''
            };
            this.tag_type = '';
            this.token_text = this.last_token = this.last_text = this.token_type = '';
            this.newlines = 0;
            this.indent_content = indent_inner_html;
            this.indent_body_inner_html = indent_body_inner_html;
            this.indent_head_inner_html = indent_head_inner_html;

            this.Utils = { //Uilities made available to the various functions
                whitespace: "\n\r\t ".split(''),

                single_token: options.void_elements || [
                    // HTLM void elements - aka self-closing tags - aka singletons
                    // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
                    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen',
                    'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr',
                    // NOTE: Optional tags - are not understood.
                    // https://www.w3.org/TR/html5/syntax.html#optional-tags
                    // The rules for optional tags are too complex for a simple list
                    // Also, the content of these tags should still be indented in many cases.
                    // 'li' is a good exmple.

                    // Doctype and xml elements
                    '!doctype', '?xml',
                    // ?php tag
                    '?php',
                    // other tags that were in this list, keeping just in case
                    'basefont', 'isindex'
                ],
                extra_liners: extra_liners, //for tags that need a line of whitespace before them
                in_array: function(what, arr) {
                    for (var i = 0; i < arr.length; i++) {
                        if (what === arr[i]) {
                            return true;
                        }
                    }
                    return false;
                }
            };

            // Return true if the given text is composed entirely of whitespace.
            this.is_whitespace = function(text) {
                for (var n = 0; n < text.length; n++) {
                    if (!this.Utils.in_array(text.charAt(n), this.Utils.whitespace)) {
                        return false;
                    }
                }
                return true;
            };

            this.traverse_whitespace = function() {
                var input_char = '';

                input_char = this.input.charAt(this.pos);
                if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
                    this.newlines = 0;
                    while (this.Utils.in_array(input_char, this.Utils.whitespace)) {
                        if (preserve_newlines && input_char === '\n' && this.newlines <= max_preserve_newlines) {
                            this.newlines += 1;
                        }

                        this.pos++;
                        input_char = this.input.charAt(this.pos);
                    }
                    return true;
                }
                return false;
            };

            // Append a space to the given content (string array) or, if we are
            // at the wrap_line_length, append a newline/indentation.
            // return true if a newline was added, false if a space was added
            this.space_or_wrap = function(content) {
                if (this.line_char_count >= this.wrap_line_length) { //insert a line when the wrap_line_length is reached
                    this.print_newline(false, content);
                    this.print_indentation(content);
                    return true;
                } else {
                    this.line_char_count++;
                    content.push(' ');
                    return false;
                }
            };

            this.get_content = function() { //function to capture regular content between tags
                var input_char = '',
                    content = [],
                    handlebarsStarted = 0;

                while (this.input.charAt(this.pos) !== '<' || handlebarsStarted === 2) {
                    if (this.pos >= this.input.length) {
                        return content.length ? content.join('') : ['', 'TK_EOF'];
                    }

                    if (handlebarsStarted < 2 && this.traverse_whitespace()) {
                        this.space_or_wrap(content);
                        continue;
                    }

                    input_char = this.input.charAt(this.pos);

                    if (indent_handlebars) {
                        if (input_char === '{') {
                            handlebarsStarted += 1;
                        } else if (handlebarsStarted < 2) {
                            handlebarsStarted = 0;
                        }

                        if (input_char === '}' && handlebarsStarted > 0) {
                            if (handlebarsStarted-- === 0) {
                                break;
                            }
                        }
                        // Handlebars parsing is complicated.
                        // {{#foo}} and {{/foo}} are formatted tags.
                        // {{something}} should get treated as content, except:
                        // {{else}} specifically behaves like {{#if}} and {{/if}}
                        var peek3 = this.input.substr(this.pos, 3);
                        if (peek3 === '{{#' || peek3 === '{{/') {
                            // These are tags and not content.
                            break;
                        } else if (peek3 === '{{!') {
                            return [this.get_tag(), 'TK_TAG_HANDLEBARS_COMMENT'];
                        } else if (this.input.substr(this.pos, 2) === '{{') {
                            if (this.get_tag(true) === '{{else}}') {
                                break;
                            }
                        }
                    }

                    this.pos++;
                    this.line_char_count++;
                    content.push(input_char); //letter at-a-time (or string) inserted to an array
                }
                return content.length ? content.join('') : '';
            };

            this.get_contents_to = function(name) { //get the full content of a script or style to pass to js_beautify
                if (this.pos === this.input.length) {
                    return ['', 'TK_EOF'];
                }
                var content = '';
                var reg_match = new RegExp('</' + name + '\\s*>', 'igm');
                reg_match.lastIndex = this.pos;
                var reg_array = reg_match.exec(this.input);
                var end_script = reg_array ? reg_array.index : this.input.length; //absolute end of script
                if (this.pos < end_script) { //get everything in between the script tags
                    content = this.input.substring(this.pos, end_script);
                    this.pos = end_script;
                }
                return content;
            };

            this.record_tag = function(tag) { //function to record a tag and its parent in this.tags Object
                if (this.tags[tag + 'count']) { //check for the existence of this tag type
                    this.tags[tag + 'count']++;
                    this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
                } else { //otherwise initialize this tag type
                    this.tags[tag + 'count'] = 1;
                    this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
                }
                this.tags[tag + this.tags[tag + 'count'] + 'parent'] = this.tags.parent; //set the parent (i.e. in the case of a div this.tags.div1parent)
                this.tags.parent = tag + this.tags[tag + 'count']; //and make this the current parent (i.e. in the case of a div 'div1')
            };

            this.retrieve_tag = function(tag) { //function to retrieve the opening tag to the corresponding closer
                if (this.tags[tag + 'count']) { //if the openener is not in the Object we ignore it
                    var temp_parent = this.tags.parent; //check to see if it's a closable tag.
                    while (temp_parent) { //till we reach '' (the initial value);
                        if (tag + this.tags[tag + 'count'] === temp_parent) { //if this is it use it
                            break;
                        }
                        temp_parent = this.tags[temp_parent + 'parent']; //otherwise keep on climbing up the DOM Tree
                    }
                    if (temp_parent) { //if we caught something
                        this.indent_level = this.tags[tag + this.tags[tag + 'count']]; //set the indent_level accordingly
                        this.tags.parent = this.tags[temp_parent + 'parent']; //and set the current parent
                    }
                    delete this.tags[tag + this.tags[tag + 'count'] + 'parent']; //delete the closed tags parent reference...
                    delete this.tags[tag + this.tags[tag + 'count']]; //...and the tag itself
                    if (this.tags[tag + 'count'] === 1) {
                        delete this.tags[tag + 'count'];
                    } else {
                        this.tags[tag + 'count']--;
                    }
                }
            };

            this.indent_to_tag = function(tag) {
                // Match the indentation level to the last use of this tag, but don't remove it.
                if (!this.tags[tag + 'count']) {
                    return;
                }
                var temp_parent = this.tags.parent;
                while (temp_parent) {
                    if (tag + this.tags[tag + 'count'] === temp_parent) {
                        break;
                    }
                    temp_parent = this.tags[temp_parent + 'parent'];
                }
                if (temp_parent) {
                    this.indent_level = this.tags[tag + this.tags[tag + 'count']];
                }
            };

            this.get_tag = function(peek) { //function to get a full tag and parse its type
                var input_char = '',
                    content = [],
                    comment = '',
                    space = false,
                    first_attr = true,
                    has_wrapped_attrs = false,
                    tag_start, tag_end,
                    tag_start_char,
                    orig_pos = this.pos,
                    orig_line_char_count = this.line_char_count,
                    is_tag_closed = false,
                    tail;

                peek = peek !== undefined ? peek : false;

                do {
                    if (this.pos >= this.input.length) {
                        if (peek) {
                            this.pos = orig_pos;
                            this.line_char_count = orig_line_char_count;
                        }
                        return content.length ? content.join('') : ['', 'TK_EOF'];
                    }

                    input_char = this.input.charAt(this.pos);
                    this.pos++;

                    if (this.Utils.in_array(input_char, this.Utils.whitespace)) { //don't want to insert unnecessary space
                        space = true;
                        continue;
                    }

                    if (input_char === "'" || input_char === '"') {
                        input_char += this.get_unformatted(input_char);
                        space = true;
                    }

                    if (input_char === '=') { //no space before =
                        space = false;
                    }
                    tail = this.input.substr(this.pos - 1);
                    if (is_wrap_attributes_force_expand_multiline && has_wrapped_attrs && !is_tag_closed && (input_char === '>' || input_char === '/')) {
                        if (tail.match(/^\/?\s*>/)) {
                            space = false;
                            is_tag_closed = true;
                            this.print_newline(false, content);
                            this.print_indentation(content);
                        }
                    }
                    if (content.length && content[content.length - 1] !== '=' && input_char !== '>' && space) {
                        //no space after = or before >
                        var wrapped = this.space_or_wrap(content);
                        var indentAttrs = wrapped && input_char !== '/' && !is_wrap_attributes_force;
                        space = false;

                        if (is_wrap_attributes_force && input_char !== '/') {
                            var force_first_attr_wrap = false;
                            if (is_wrap_attributes_force_expand_multiline && first_attr) {
                                var is_only_attribute = tail.match(/^\S*(="([^"]|\\")*")?\s*\/?\s*>/) !== null;
                                force_first_attr_wrap = !is_only_attribute;
                            }
                            if (!first_attr || force_first_attr_wrap) {
                                this.print_newline(false, content);
                                this.print_indentation(content);
                                indentAttrs = true;
                            }
                        }
                        if (indentAttrs) {
                            has_wrapped_attrs = true;

                            //indent attributes an auto, forced, or forced-align line-wrap
                            var alignment_size = wrap_attributes_indent_size;
                            if (is_wrap_attributes_force_aligned) {
                                alignment_size = content.indexOf(' ') + 1;
                            }

                            for (var count = 0; count < alignment_size; count++) {
                                // only ever further indent with spaces since we're trying to align characters
                                content.push(' ');
                            }
                        }
                        if (first_attr) {
                            for (var i = 0; i < content.length; i++) {
                                if (content[i] === ' ') {
                                    first_attr = false;
                                    break;
                                }
                            }
                        }
                    }

                    if (indent_handlebars && tag_start_char === '<') {
                        // When inside an angle-bracket tag, put spaces around
                        // handlebars not inside of strings.
                        if ((input_char + this.input.charAt(this.pos)) === '{{') {
                            input_char += this.get_unformatted('}}');
                            if (content.length && content[content.length - 1] !== ' ' && content[content.length - 1] !== '<') {
                                input_char = ' ' + input_char;
                            }
                            space = true;
                        }
                    }

                    if (input_char === '<' && !tag_start_char) {
                        tag_start = this.pos - 1;
                        tag_start_char = '<';
                    }

                    if (indent_handlebars && !tag_start_char) {
                        if (content.length >= 2 && content[content.length - 1] === '{' && content[content.length - 2] === '{') {
                            if (input_char === '#' || input_char === '/' || input_char === '!') {
                                tag_start = this.pos - 3;
                            } else {
                                tag_start = this.pos - 2;
                            }
                            tag_start_char = '{';
                        }
                    }

                    this.line_char_count++;
                    content.push(input_char); //inserts character at-a-time (or string)

                    if (content[1] && (content[1] === '!' || content[1] === '?' || content[1] === '%')) { //if we're in a comment, do something special
                        // We treat all comments as literals, even more than preformatted tags
                        // we just look for the appropriate close tag
                        content = [this.get_comment(tag_start)];
                        break;
                    }

                    if (indent_handlebars && content[1] && content[1] === '{' && content[2] && content[2] === '!') { //if we're in a comment, do something special
                        // We treat all comments as literals, even more than preformatted tags
                        // we just look for the appropriate close tag
                        content = [this.get_comment(tag_start)];
                        break;
                    }

                    if (indent_handlebars && tag_start_char === '{' && content.length > 2 && content[content.length - 2] === '}' && content[content.length - 1] === '}') {
                        break;
                    }
                } while (input_char !== '>');

                var tag_complete = content.join('');
                var tag_index;
                var tag_offset;

                // must check for space first otherwise the tag could have the first attribute included, and
                // then not un-indent correctly
                if (tag_complete.indexOf(' ') !== -1) { //if there's whitespace, thats where the tag name ends
                    tag_index = tag_complete.indexOf(' ');
                } else if (tag_complete.indexOf('\n') !== -1) { //if there's a line break, thats where the tag name ends
                    tag_index = tag_complete.indexOf('\n');
                } else if (tag_complete.charAt(0) === '{') {
                    tag_index = tag_complete.indexOf('}');
                } else { //otherwise go with the tag ending
                    tag_index = tag_complete.indexOf('>');
                }
                if (tag_complete.charAt(0) === '<' || !indent_handlebars) {
                    tag_offset = 1;
                } else {
                    tag_offset = tag_complete.charAt(2) === '#' ? 3 : 2;
                }
                var tag_check = tag_complete.substring(tag_offset, tag_index).toLowerCase();
                if (tag_complete.charAt(tag_complete.length - 2) === '/' ||
                    this.Utils.in_array(tag_check, this.Utils.single_token)) { //if this tag name is a single tag type (either in the list or has a closing /)
                    if (!peek) {
                        this.tag_type = 'SINGLE';
                    }
                } else if (indent_handlebars && tag_complete.charAt(0) === '{' && tag_check === 'else') {
                    if (!peek) {
                        this.indent_to_tag('if');
                        this.tag_type = 'HANDLEBARS_ELSE';
                        this.indent_content = true;
                        this.traverse_whitespace();
                    }
                } else if (this.is_unformatted(tag_check, unformatted) ||
                    this.is_unformatted(tag_check, content_unformatted)) {
                    // do not reformat the "unformatted" or "content_unformatted" tags
                    comment = this.get_unformatted('</' + tag_check + '>', tag_complete); //...delegate to get_unformatted function
                    content.push(comment);
                    tag_end = this.pos - 1;
                    this.tag_type = 'SINGLE';
                } else if (tag_check === 'script' &&
                    (tag_complete.search('type') === -1 ||
                        (tag_complete.search('type') > -1 &&
                            tag_complete.search(/\b(text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect)/) > -1))) {
                    if (!peek) {
                        this.record_tag(tag_check);
                        this.tag_type = 'SCRIPT';
                    }
                } else if (tag_check === 'style' &&
                    (tag_complete.search('type') === -1 ||
                        (tag_complete.search('type') > -1 && tag_complete.search('text/css') > -1))) {
                    if (!peek) {
                        this.record_tag(tag_check);
                        this.tag_type = 'STYLE';
                    }
                } else if (tag_check.charAt(0) === '!') { //peek for <! comment
                    // for comments content is already correct.
                    if (!peek) {
                        this.tag_type = 'SINGLE';
                        this.traverse_whitespace();
                    }
                } else if (!peek) {
                    if (tag_check.charAt(0) === '/') { //this tag is a double tag so check for tag-ending
                        this.retrieve_tag(tag_check.substring(1)); //remove it and all ancestors
                        this.tag_type = 'END';
                    } else { //otherwise it's a start-tag
                        this.record_tag(tag_check); //push it on the tag stack
                        if (tag_check.toLowerCase() !== 'html') {
                            this.indent_content = true;
                        }
                        this.tag_type = 'START';
                    }

                    // Allow preserving of newlines after a start or end tag
                    if (this.traverse_whitespace()) {
                        this.space_or_wrap(content);
                    }

                    if (this.Utils.in_array(tag_check, this.Utils.extra_liners)) { //check if this double needs an extra line
                        this.print_newline(false, this.output);
                        if (this.output.length && this.output[this.output.length - 2] !== '\n') {
                            this.print_newline(true, this.output);
                        }
                    }
                }

                if (peek) {
                    this.pos = orig_pos;
                    this.line_char_count = orig_line_char_count;
                }

                return content.join(''); //returns fully formatted tag
            };

            this.get_comment = function(start_pos) { //function to return comment content in its entirety
                // this is will have very poor perf, but will work for now.
                var comment = '',
                    delimiter = '>',
                    matched = false;

                this.pos = start_pos;
                var input_char = this.input.charAt(this.pos);
                this.pos++;

                while (this.pos <= this.input.length) {
                    comment += input_char;

                    // only need to check for the delimiter if the last chars match
                    if (comment.charAt(comment.length - 1) === delimiter.charAt(delimiter.length - 1) &&
                        comment.indexOf(delimiter) !== -1) {
                        break;
                    }

                    // only need to search for custom delimiter for the first few characters
                    if (!matched && comment.length < 10) {
                        if (comment.indexOf('<![if') === 0) { //peek for <![if conditional comment
                            delimiter = '<![endif]>';
                            matched = true;
                        } else if (comment.indexOf('<![cdata[') === 0) { //if it's a <[cdata[ comment...
                            delimiter = ']]>';
                            matched = true;
                        } else if (comment.indexOf('<![') === 0) { // some other ![ comment? ...
                            delimiter = ']>';
                            matched = true;
                        } else if (comment.indexOf('<!--') === 0) { // <!-- comment ...
                            delimiter = '-->';
                            matched = true;
                        } else if (comment.indexOf('{{!--') === 0) { // {{!-- handlebars comment
                            delimiter = '--}}';
                            matched = true;
                        } else if (comment.indexOf('{{!') === 0) { // {{! handlebars comment
                            if (comment.length === 5 && comment.indexOf('{{!--') === -1) {
                                delimiter = '}}';
                                matched = true;
                            }
                        } else if (comment.indexOf('<?') === 0) { // {{! handlebars comment
                            delimiter = '?>';
                            matched = true;
                        } else if (comment.indexOf('<%') === 0) { // {{! handlebars comment
                            delimiter = '%>';
                            matched = true;
                        }
                    }

                    input_char = this.input.charAt(this.pos);
                    this.pos++;
                }

                return comment;
            };

            function tokenMatcher(delimiter) {
                var token = '';

                var add = function(str) {
                    var newToken = token + str.toLowerCase();
                    token = newToken.length <= delimiter.length ? newToken : newToken.substr(newToken.length - delimiter.length, delimiter.length);
                };

                var doesNotMatch = function() {
                    return token.indexOf(delimiter) === -1;
                };

                return {
                    add: add,
                    doesNotMatch: doesNotMatch
                };
            }

            this.get_unformatted = function(delimiter, orig_tag) { //function to return unformatted content in its entirety
                if (orig_tag && orig_tag.toLowerCase().indexOf(delimiter) !== -1) {
                    return '';
                }
                var input_char = '';
                var content = '';
                var space = true;

                var delimiterMatcher = tokenMatcher(delimiter);

                do {

                    if (this.pos >= this.input.length) {
                        return content;
                    }

                    input_char = this.input.charAt(this.pos);
                    this.pos++;

                    if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
                        if (!space) {
                            this.line_char_count--;
                            continue;
                        }
                        if (input_char === '\n' || input_char === '\r') {
                            content += '\n';
                            /*  Don't change tab indention for unformatted blocks.  If using code for html editing, this will greatly affect <pre> tags if they are specified in the 'unformatted array'
                for (var i=0; i<this.indent_level; i++) {
                  content += this.indent_string;
                }
                space = false; //...and make sure other indentation is erased
                */
                            this.line_char_count = 0;
                            continue;
                        }
                    }
                    content += input_char;
                    delimiterMatcher.add(input_char);
                    this.line_char_count++;
                    space = true;

                    if (indent_handlebars && input_char === '{' && content.length && content.charAt(content.length - 2) === '{') {
                        // Handlebars expressions in strings should also be unformatted.
                        content += this.get_unformatted('}}');
                        // Don't consider when stopping for delimiters.
                    }
                } while (delimiterMatcher.doesNotMatch());

                return content;
            };

            this.get_token = function() { //initial handler for token-retrieval
                var token;

                if (this.last_token === 'TK_TAG_SCRIPT' || this.last_token === 'TK_TAG_STYLE') { //check if we need to format javascript
                    var type = this.last_token.substr(7);
                    token = this.get_contents_to(type);
                    if (typeof token !== 'string') {
                        return token;
                    }
                    return [token, 'TK_' + type];
                }
                if (this.current_mode === 'CONTENT') {
                    token = this.get_content();
                    if (typeof token !== 'string') {
                        return token;
                    } else {
                        return [token, 'TK_CONTENT'];
                    }
                }

                if (this.current_mode === 'TAG') {
                    token = this.get_tag();
                    if (typeof token !== 'string') {
                        return token;
                    } else {
                        var tag_name_type = 'TK_TAG_' + this.tag_type;
                        return [token, tag_name_type];
                    }
                }
            };

            this.get_full_indent = function(level) {
                level = this.indent_level + level || 0;
                if (level < 1) {
                    return '';
                }

                return Array(level + 1).join(this.indent_string);
            };

            this.is_unformatted = function(tag_check, unformatted) {
                //is this an HTML5 block-level link?
                if (!this.Utils.in_array(tag_check, unformatted)) {
                    return false;
                }

                if (tag_check.toLowerCase() !== 'a' || !this.Utils.in_array('a', unformatted)) {
                    return true;
                }

                //at this point we have an  tag; is its first child something we want to remain
                //unformatted?
                var next_tag = this.get_tag(true /* peek. */ );

                // test next_tag to see if it is just html tag (no external content)
                var tag = (next_tag || "").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);

                // if next_tag comes back but is not an isolated tag, then
                // let's treat the 'a' tag as having content
                // and respect the unformatted option
                if (!tag || this.Utils.in_array(tag[1], unformatted)) {
                    return true;
                } else {
                    return false;
                }
            };

            this.printer = function(js_source, indent_character, indent_size, wrap_line_length, brace_style) { //handles input/output and some other printing functions

                this.input = js_source || ''; //gets the input for the Parser

                // HACK: newline parsing inconsistent. This brute force normalizes the input.
                this.input = this.input.replace(/\r\n|[\r\u2028\u2029]/g, '\n');

                this.output = [];
                this.indent_character = indent_character;
                this.indent_string = '';
                this.indent_size = indent_size;
                this.brace_style = brace_style;
                this.indent_level = 0;
                this.wrap_line_length = wrap_line_length;
                this.line_char_count = 0; //count to see if wrap_line_length was exceeded

                for (var i = 0; i < this.indent_size; i++) {
                    this.indent_string += this.indent_character;
                }

                this.print_newline = function(force, arr) {
                    this.line_char_count = 0;
                    if (!arr || !arr.length) {
                        return;
                    }
                    if (force || (arr[arr.length - 1] !== '\n')) { //we might want the extra line
                        if ((arr[arr.length - 1] !== '\n')) {
                            arr[arr.length - 1] = rtrim(arr[arr.length - 1]);
                        }
                        arr.push('\n');
                    }
                };

                this.print_indentation = function(arr) {
                    for (var i = 0; i < this.indent_level; i++) {
                        arr.push(this.indent_string);
                        this.line_char_count += this.indent_string.length;
                    }
                };

                this.print_token = function(text) {
                    // Avoid printing initial whitespace.
                    if (this.is_whitespace(text) && !this.output.length) {
                        return;
                    }
                    if (text || text !== '') {
                        if (this.output.length && this.output[this.output.length - 1] === '\n') {
                            this.print_indentation(this.output);
                            text = ltrim(text);
                        }
                    }
                    this.print_token_raw(text);
                };

                this.print_token_raw = function(text) {
                    // If we are going to print newlines, truncate trailing
                    // whitespace, as the newlines will represent the space.
                    if (this.newlines > 0) {
                        text = rtrim(text);
                    }

                    if (text && text !== '') {
                        if (text.length > 1 && text.charAt(text.length - 1) === '\n') {
                            // unformatted tags can grab newlines as their last character
                            this.output.push(text.slice(0, -1));
                            this.print_newline(false, this.output);
                        } else {
                            this.output.push(text);
                        }
                    }

                    for (var n = 0; n < this.newlines; n++) {
                        this.print_newline(n > 0, this.output);
                    }
                    this.newlines = 0;
                };

                this.indent = function() {
                    this.indent_level++;
                };

                this.unindent = function() {
                    if (this.indent_level > 0) {
                        this.indent_level--;
                    }
                };
            };
            return this;
        }

        /*_____________________--------------------_____________________*/

        multi_parser = new Parser(); //wrapping functions Parser
        multi_parser.printer(html_source, indent_character, indent_size, wrap_line_length, brace_style); //initialize starting values

        while (true) {
            var t = multi_parser.get_token();
            multi_parser.token_text = t[0];
            multi_parser.token_type = t[1];

            if (multi_parser.token_type === 'TK_EOF') {
                break;
            }

            switch (multi_parser.token_type) {
                case 'TK_TAG_START':
                    multi_parser.print_newline(false, multi_parser.output);
                    multi_parser.print_token(multi_parser.token_text);
                    if (multi_parser.indent_content) {
                        if ((multi_parser.indent_body_inner_html || !multi_parser.token_text.match(/<body(?:.*)>/)) &&
                            (multi_parser.indent_head_inner_html || !multi_parser.token_text.match(/<head(?:.*)>/))) {

                            multi_parser.indent();
                        }

                        multi_parser.indent_content = false;
                    }
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_STYLE':
                case 'TK_TAG_SCRIPT':
                    multi_parser.print_newline(false, multi_parser.output);
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_END':
                    //Print new line only if the tag has no content and has child
                    if (multi_parser.last_token === 'TK_CONTENT' && multi_parser.last_text === '') {
                        var tag_name = (multi_parser.token_text.match(/\w+/) || [])[0];
                        var tag_extracted_from_last_output = null;
                        if (multi_parser.output.length) {
                            tag_extracted_from_last_output = multi_parser.output[multi_parser.output.length - 1].match(/(?:<|{{#)\s*(\w+)/);
                        }
                        if (tag_extracted_from_last_output === null ||
                            (tag_extracted_from_last_output[1] !== tag_name && !multi_parser.Utils.in_array(tag_extracted_from_last_output[1], unformatted))) {
                            multi_parser.print_newline(false, multi_parser.output);
                        }
                    }
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_SINGLE':
                    // Don't add a newline before elements that should remain unformatted.
                    var tag_check = multi_parser.token_text.match(/^\s*<([a-z-]+)/i);
                    if (!tag_check || !multi_parser.Utils.in_array(tag_check[1], unformatted)) {
                        multi_parser.print_newline(false, multi_parser.output);
                    }
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_HANDLEBARS_ELSE':
                    // Don't add a newline if opening {{#if}} tag is on the current line
                    var foundIfOnCurrentLine = false;
                    for (var lastCheckedOutput = multi_parser.output.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
                        if (multi_parser.output[lastCheckedOutput] === '\n') {
                            break;
                        } else {
                            if (multi_parser.output[lastCheckedOutput].match(/{{#if/)) {
                                foundIfOnCurrentLine = true;
                                break;
                            }
                        }
                    }
                    if (!foundIfOnCurrentLine) {
                        multi_parser.print_newline(false, multi_parser.output);
                    }
                    multi_parser.print_token(multi_parser.token_text);
                    if (multi_parser.indent_content) {
                        multi_parser.indent();
                        multi_parser.indent_content = false;
                    }
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_HANDLEBARS_COMMENT':
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'TAG';
                    break;
                case 'TK_CONTENT':
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'TAG';
                    break;
                case 'TK_STYLE':
                case 'TK_SCRIPT':
                    if (multi_parser.token_text !== '') {
                        multi_parser.print_newline(false, multi_parser.output);
                        var text = multi_parser.token_text,
                            _beautifier,
                            script_indent_level = 1;
                        if (multi_parser.token_type === 'TK_SCRIPT') {
                            _beautifier = typeof js_beautify === 'function' && js_beautify;
                        } else if (multi_parser.token_type === 'TK_STYLE') {
                            _beautifier = typeof css_beautify === 'function' && css_beautify;
                        }

                        if (options.indent_scripts === "keep") {
                            script_indent_level = 0;
                        } else if (options.indent_scripts === "separate") {
                            script_indent_level = -multi_parser.indent_level;
                        }

                        var indentation = multi_parser.get_full_indent(script_indent_level);
                        if (_beautifier) {

                            // call the Beautifier if avaliable
                            var Child_options = function() {
                                this.eol = '\n';
                            };
                            Child_options.prototype = options;
                            var child_options = new Child_options();
                            text = _beautifier(text.replace(/^\s*/, indentation), child_options);
                        } else {
                            // simply indent the string otherwise
                            var white = text.match(/^\s*/)[0];
                            var _level = white.match(/[^\n\r]*$/)[0].split(multi_parser.indent_string).length - 1;
                            var reindent = multi_parser.get_full_indent(script_indent_level - _level);
                            text = text.replace(/^\s*/, indentation)
                                .replace(/\r\n|\r|\n/g, '\n' + reindent)
                                .replace(/\s+$/, '');
                        }
                        if (text) {
                            multi_parser.print_token_raw(text);
                            multi_parser.print_newline(true, multi_parser.output);
                        }
                    }
                    multi_parser.current_mode = 'TAG';
                    break;
                default:
                    // We should not be getting here but we don't want to drop input on the floor
                    // Just output the text and move on
                    if (multi_parser.token_text !== '') {
                        multi_parser.print_token(multi_parser.token_text);
                    }
                    break;
            }
            multi_parser.last_token = multi_parser.token_type;
            multi_parser.last_text = multi_parser.token_text;
        }
        var sweet_code = multi_parser.output.join('').replace(/[\r\n\t ]+$/, '');

        // establish end_with_newline
        if (end_with_newline) {
            sweet_code += '\n';
        }

        if (eol !== '\n') {
            sweet_code = sweet_code.replace(/[\n]/g, eol);
        }

        return sweet_code;
    }

    if (typeof define === "function" && define.amd) {
        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
        define(["require", "./beautify", "./beautify-css"], function(requireamd) {
            var js_beautify = requireamd("./beautify");
            var css_beautify = requireamd("./beautify-css");

            return {
                html_beautify: function(html_source, options) {
                    return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
                }
            };
        });
    } else if (typeof exports !== "undefined") {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var html_beautify = require("beautify").html_beautify`.
        var js_beautify = require('./beautify.js');
        var css_beautify = require('./beautify-css.js');

        exports.html_beautify = function(html_source, options) {
            return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
        };
    } else if (typeof window !== "undefined") {
        // If we're running a web page and don't have either of the above, add our one global
        window.html_beautify = function(html_source, options) {
            return style_html(html_source, options, window.js_beautify, window.css_beautify);
        };
    } else if (typeof global !== "undefined") {
        // If we don't even have window, try global.
        global.html_beautify = function(html_source, options) {
            return style_html(html_source, options, global.js_beautify, global.css_beautify);
        };
    }

}());
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./beautify-css.js":37,"./beautify.js":39}],39:[function(require,module,exports){
(function (global){
/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

 JS Beautifier
---------------


  Written by Einar Lielmanis, <einar@jsbeautifier.org>
      http://jsbeautifier.org/

  Originally converted to javascript by Vital, <vital76@gmail.com>
  "End braces on own line" added by Chris J. Shull, <chrisjshull@gmail.com>
  Parsing improvements for brace-less statements by Liam Newman <bitwiseman@gmail.com>


  Usage:
    js_beautify(js_source_text);
    js_beautify(js_source_text, options);

  The options are:
    indent_size (default 4)          - indentation size,
    indent_char (default space)      - character to indent with,
    preserve_newlines (default true) - whether existing line breaks should be preserved,
    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk,

    jslint_happy (default false) - if true, then jslint-stricter mode is enforced.

            jslint_happy        !jslint_happy
            ---------------------------------
            function ()         function()

            switch () {         switch() {
            case 1:               case 1:
              break;                break;
            }                   }

    space_after_anon_function (default false) - should the space before an anonymous function's parens be added, "function()" vs "function ()",
          NOTE: This option is overriden by jslint_happy (i.e. if jslint_happy is true, space_after_anon_function is true by design)

    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none" | any of the former + ",preserve-inline"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
            preserve-inline will try to preserve inline blocks of curly braces

    space_before_conditional (default true) - should the space before conditional statement be added, "if(true)" vs "if (true)",

    unescape_strings (default false) - should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"

    wrap_line_length (default unlimited) - lines should wrap at next opportunity after this number of characters.
          NOTE: This is not a hard limit. Lines will continue until a point where a newline would
                be preserved if it were present.

    end_with_newline (default false)  - end output with a newline


    e.g

    js_beautify(js_source_text, {
      'indent_size': 1,
      'indent_char': '\t'
    });

*/

// Object.values polyfill found here:
// http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html
if (!Object.values) {
    Object.values = function(o) {
        if (o !== Object(o)) {
            throw new TypeError('Object.values called on a non-object');
        }
        var k = [],
            p;
        for (p in o) {
            if (Object.prototype.hasOwnProperty.call(o, p)) {
                k.push(o[p]);
            }
        }
        return k;
    };
}

(function() {

    function mergeOpts(allOptions, targetType) {
        var finalOpts = {};
        var name;

        for (name in allOptions) {
            if (name !== targetType) {
                finalOpts[name] = allOptions[name];
            }
        }

        //merge in the per type settings for the targetType
        if (targetType in allOptions) {
            for (name in allOptions[targetType]) {
                finalOpts[name] = allOptions[targetType][name];
            }
        }
        return finalOpts;
    }

    function js_beautify(js_source_text, options) {

        var acorn = {};
        (function(exports) {
            /* jshint curly: false */
            // This section of code is taken from acorn.
            //
            // Acorn was written by Marijn Haverbeke and released under an MIT
            // license. The Unicode regexps (for identifiers and whitespace) were
            // taken from [Esprima](http://esprima.org) by Ariya Hidayat.
            //
            // Git repositories for Acorn are available at
            //
            //     http://marijnhaverbeke.nl/git/acorn
            //     https://github.com/marijnh/acorn.git

            // ## Character categories

            // Big ugly regular expressions that match characters in the
            // whitespace, identifier, and identifier-start categories. These
            // are only applied when a character is found to actually have a
            // code point above 128.

            var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/; // jshint ignore:line
            var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
            var nonASCIIidentifierChars = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
            var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
            var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

            // Whether a single character denotes a newline.

            exports.newline = /[\n\r\u2028\u2029]/;

            // Matches a whole line break (where CRLF is considered a single
            // line break). Used to count lines.

            // in javascript, these two differ
            // in python they are the same, different methods are called on them
            exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
            exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g');


            // Test whether a given character code starts an identifier.

            exports.isIdentifierStart = function(code) {
                // permit $ (36) and @ (64). @ is used in ES7 decorators.
                if (code < 65) return code === 36 || code === 64;
                // 65 through 91 are uppercase letters.
                if (code < 91) return true;
                // permit _ (95).
                if (code < 97) return code === 95;
                // 97 through 123 are lowercase letters.
                if (code < 123) return true;
                return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
            };

            // Test whether a given character is part of an identifier.

            exports.isIdentifierChar = function(code) {
                if (code < 48) return code === 36;
                if (code < 58) return true;
                if (code < 65) return false;
                if (code < 91) return true;
                if (code < 97) return code === 95;
                if (code < 123) return true;
                return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
            };
        })(acorn);
        /* jshint curly: true */

        function in_array(what, arr) {
            for (var i = 0; i < arr.length; i += 1) {
                if (arr[i] === what) {
                    return true;
                }
            }
            return false;
        }

        function trim(s) {
            return s.replace(/^\s+|\s+$/g, '');
        }

        function ltrim(s) {
            return s.replace(/^\s+/g, '');
        }

        // function rtrim(s) {
        //     return s.replace(/\s+$/g, '');
        // }

        function sanitizeOperatorPosition(opPosition) {
            opPosition = opPosition || OPERATOR_POSITION.before_newline;

            var validPositionValues = Object.values(OPERATOR_POSITION);

            if (!in_array(opPosition, validPositionValues)) {
                throw new Error("Invalid Option Value: The option 'operator_position' must be one of the following values\n" +
                    validPositionValues +
                    "\nYou passed in: '" + opPosition + "'");
            }

            return opPosition;
        }

        var OPERATOR_POSITION = {
            before_newline: 'before-newline',
            after_newline: 'after-newline',
            preserve_newline: 'preserve-newline',
        };

        var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];

        var MODE = {
            BlockStatement: 'BlockStatement', // 'BLOCK'
            Statement: 'Statement', // 'STATEMENT'
            ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
            ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
            ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
            Conditional: 'Conditional', //'(COND-EXPRESSION)',
            Expression: 'Expression' //'(EXPRESSION)'
        };

        function Beautifier(js_source_text, options) {
            "use strict";
            var output;
            var tokens = [],
                token_pos;
            var Tokenizer;
            var current_token;
            var last_type, last_last_text, indent_string;
            var flags, previous_flags, flag_store;
            var prefix;

            var handlers, opt;
            var baseIndentString = '';

            handlers = {
                'TK_START_EXPR': handle_start_expr,
                'TK_END_EXPR': handle_end_expr,
                'TK_START_BLOCK': handle_start_block,
                'TK_END_BLOCK': handle_end_block,
                'TK_WORD': handle_word,
                'TK_RESERVED': handle_word,
                'TK_SEMICOLON': handle_semicolon,
                'TK_STRING': handle_string,
                'TK_EQUALS': handle_equals,
                'TK_OPERATOR': handle_operator,
                'TK_COMMA': handle_comma,
                'TK_BLOCK_COMMENT': handle_block_comment,
                'TK_COMMENT': handle_comment,
                'TK_DOT': handle_dot,
                'TK_UNKNOWN': handle_unknown,
                'TK_EOF': handle_eof
            };

            function create_flags(flags_base, mode) {
                var next_indent_level = 0;
                if (flags_base) {
                    next_indent_level = flags_base.indentation_level;
                    if (!output.just_added_newline() &&
                        flags_base.line_indent_level > next_indent_level) {
                        next_indent_level = flags_base.line_indent_level;
                    }
                }

                var next_flags = {
                    mode: mode,
                    parent: flags_base,
                    last_text: flags_base ? flags_base.last_text : '', // last token text
                    last_word: flags_base ? flags_base.last_word : '', // last 'TK_WORD' passed
                    declaration_statement: false,
                    declaration_assignment: false,
                    multiline_frame: false,
                    inline_frame: false,
                    if_block: false,
                    else_block: false,
                    do_block: false,
                    do_while: false,
                    import_block: false,
                    in_case_statement: false, // switch(..){ INSIDE HERE }
                    in_case: false, // we're on the exact line with "case 0:"
                    case_body: false, // the indented case-action block
                    indentation_level: next_indent_level,
                    line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
                    start_line_index: output.get_line_number(),
                    ternary_depth: 0
                };
                return next_flags;
            }

            // Some interpreters have unexpected results with foo = baz || bar;
            options = options ? options : {};

            // Allow the setting of language/file-type specific options
            // with inheritance of overall settings
            options = mergeOpts(options, 'js');

            opt = {};

            // compatibility, re
            if (options.brace_style === "expand-strict") { //graceful handling of deprecated option
                options.brace_style = "expand";
            } else if (options.brace_style === "collapse-preserve-inline") { //graceful handling of deprecated option
                options.brace_style = "collapse,preserve-inline";
            } else if (options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
                options.brace_style = options.braces_on_own_line ? "expand" : "collapse";
            } else if (!options.brace_style) //Nothing exists to set it
            {
                options.brace_style = "collapse";
            }


            var brace_style_split = options.brace_style.split(/[^a-zA-Z0-9_\-]+/);
            opt.brace_style = brace_style_split[0];
            opt.brace_preserve_inline = brace_style_split[1] ? brace_style_split[1] : false;

            opt.indent_size = options.indent_size ? parseInt(options.indent_size, 10) : 4;
            opt.indent_char = options.indent_char ? options.indent_char : ' ';
            opt.eol = options.eol ? options.eol : 'auto';
            opt.preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
            opt.break_chained_methods = (options.break_chained_methods === undefined) ? false : options.break_chained_methods;
            opt.max_preserve_newlines = (options.max_preserve_newlines === undefined) ? 0 : parseInt(options.max_preserve_newlines, 10);
            opt.space_in_paren = (options.space_in_paren === undefined) ? false : options.space_in_paren;
            opt.space_in_empty_paren = (options.space_in_empty_paren === undefined) ? false : options.space_in_empty_paren;
            opt.jslint_happy = (options.jslint_happy === undefined) ? false : options.jslint_happy;
            opt.space_after_anon_function = (options.space_after_anon_function === undefined) ? false : options.space_after_anon_function;
            opt.keep_array_indentation = (options.keep_array_indentation === undefined) ? false : options.keep_array_indentation;
            opt.space_before_conditional = (options.space_before_conditional === undefined) ? true : options.space_before_conditional;
            opt.unescape_strings = (options.unescape_strings === undefined) ? false : options.unescape_strings;
            opt.wrap_line_length = (options.wrap_line_length === undefined) ? 0 : parseInt(options.wrap_line_length, 10);
            opt.e4x = (options.e4x === undefined) ? false : options.e4x;
            opt.end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
            opt.comma_first = (options.comma_first === undefined) ? false : options.comma_first;
            opt.operator_position = sanitizeOperatorPosition(options.operator_position);

            // For testing of beautify ignore:start directive
            opt.test_output_raw = (options.test_output_raw === undefined) ? false : options.test_output_raw;

            // force opt.space_after_anon_function to true if opt.jslint_happy
            if (opt.jslint_happy) {
                opt.space_after_anon_function = true;
            }

            if (options.indent_with_tabs) {
                opt.indent_char = '\t';
                opt.indent_size = 1;
            }

            if (opt.eol === 'auto') {
                opt.eol = '\n';
                if (js_source_text && acorn.lineBreak.test(js_source_text || '')) {
                    opt.eol = js_source_text.match(acorn.lineBreak)[0];
                }
            }

            opt.eol = opt.eol.replace(/\\r/, '\r').replace(/\\n/, '\n');

            //----------------------------------
            indent_string = '';
            while (opt.indent_size > 0) {
                indent_string += opt.indent_char;
                opt.indent_size -= 1;
            }

            var preindent_index = 0;
            if (js_source_text && js_source_text.length) {
                while ((js_source_text.charAt(preindent_index) === ' ' ||
                        js_source_text.charAt(preindent_index) === '\t')) {
                    baseIndentString += js_source_text.charAt(preindent_index);
                    preindent_index += 1;
                }
                js_source_text = js_source_text.substring(preindent_index);
            }

            last_type = 'TK_START_BLOCK'; // last token type
            last_last_text = ''; // pre-last token text
            output = new Output(indent_string, baseIndentString);

            // If testing the ignore directive, start with output disable set to true
            output.raw = opt.test_output_raw;


            // Stack of parsing/formatting states, including MODE.
            // We tokenize, parse, and output in an almost purely a forward-only stream of token input
            // and formatted output.  This makes the beautifier less accurate than full parsers
            // but also far more tolerant of syntax errors.
            //
            // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
            // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
            // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
            // most full parsers would die, but the beautifier gracefully falls back to
            // MODE.BlockStatement and continues on.
            flag_store = [];
            set_mode(MODE.BlockStatement);

            this.beautify = function() {

                /*jshint onevar:true */
                var sweet_code;
                Tokenizer = new tokenizer(js_source_text, opt, indent_string);
                tokens = Tokenizer.tokenize();
                token_pos = 0;

                current_token = get_token();
                while (current_token) {
                    handlers[current_token.type]();

                    last_last_text = flags.last_text;
                    last_type = current_token.type;
                    flags.last_text = current_token.text;

                    token_pos += 1;
                    current_token = get_token();
                }

                sweet_code = output.get_code();
                if (opt.end_with_newline) {
                    sweet_code += '\n';
                }

                if (opt.eol !== '\n') {
                    sweet_code = sweet_code.replace(/[\n]/g, opt.eol);
                }

                return sweet_code;
            };

            function handle_whitespace_and_comments(local_token, preserve_statement_flags) {
                var newlines = local_token.newlines;
                var keep_whitespace = opt.keep_array_indentation && is_array(flags.mode);
                var temp_token = current_token;

                for (var h = 0; h < local_token.comments_before.length; h++) {
                    // The cleanest handling of inline comments is to treat them as though they aren't there.
                    // Just continue formatting and the behavior should be logical.
                    // Also ignore unknown tokens.  Again, this should result in better behavior.
                    current_token = local_token.comments_before[h];
                    handle_whitespace_and_comments(current_token, preserve_statement_flags);
                    handlers[current_token.type](preserve_statement_flags);
                }
                current_token = temp_token;

                if (keep_whitespace) {
                    for (var i = 0; i < newlines; i += 1) {
                        print_newline(i > 0, preserve_statement_flags);
                    }
                } else {
                    if (opt.max_preserve_newlines && newlines > opt.max_preserve_newlines) {
                        newlines = opt.max_preserve_newlines;
                    }

                    if (opt.preserve_newlines) {
                        if (local_token.newlines > 1) {
                            print_newline(false, preserve_statement_flags);
                            for (var j = 1; j < newlines; j += 1) {
                                print_newline(true, preserve_statement_flags);
                            }
                        }
                    }
                }

            }

            // we could use just string.split, but
            // IE doesn't like returning empty strings
            function split_linebreaks(s) {
                //return s.split(/\x0d\x0a|\x0a/);

                s = s.replace(acorn.allLineBreaks, '\n');
                var out = [],
                    idx = s.indexOf("\n");
                while (idx !== -1) {
                    out.push(s.substring(0, idx));
                    s = s.substring(idx + 1);
                    idx = s.indexOf("\n");
                }
                if (s.length) {
                    out.push(s);
                }
                return out;
            }

            var newline_restricted_tokens = ['break', 'continue', 'return', 'throw'];

            function allow_wrap_or_preserved_newline(force_linewrap) {
                force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;

                // Never wrap the first token on a line
                if (output.just_added_newline()) {
                    return;
                }

                var shouldPreserveOrForce = (opt.preserve_newlines && current_token.wanted_newline) || force_linewrap;
                var operatorLogicApplies = in_array(flags.last_text, Tokenizer.positionable_operators) || in_array(current_token.text, Tokenizer.positionable_operators);

                if (operatorLogicApplies) {
                    var shouldPrintOperatorNewline = (
                            in_array(flags.last_text, Tokenizer.positionable_operators) &&
                            in_array(opt.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)
                        ) ||
                        in_array(current_token.text, Tokenizer.positionable_operators);
                    shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
                }

                if (shouldPreserveOrForce) {
                    print_newline(false, true);
                } else if (opt.wrap_line_length) {
                    if (last_type === 'TK_RESERVED' && in_array(flags.last_text, newline_restricted_tokens)) {
                        // These tokens should never have a newline inserted
                        // between them and the following expression.
                        return;
                    }
                    var proposed_line_length = output.current_line.get_character_count() + current_token.text.length +
                        (output.space_before_token ? 1 : 0);
                    if (proposed_line_length >= opt.wrap_line_length) {
                        print_newline(false, true);
                    }
                }
            }

            function print_newline(force_newline, preserve_statement_flags) {
                if (!preserve_statement_flags) {
                    if (flags.last_text !== ';' && flags.last_text !== ',' && flags.last_text !== '=' && last_type !== 'TK_OPERATOR') {
                        var next_token = get_token(1);
                        while (flags.mode === MODE.Statement &&
                            !(flags.if_block && next_token && next_token.type === 'TK_RESERVED' && next_token.text === 'else') &&
                            !flags.do_block) {
                            restore_mode();
                        }
                    }
                }

                if (output.add_new_line(force_newline)) {
                    flags.multiline_frame = true;
                }
            }

            function print_token_line_indentation() {
                if (output.just_added_newline()) {
                    if (opt.keep_array_indentation && is_array(flags.mode) && current_token.wanted_newline) {
                        output.current_line.push(current_token.whitespace_before);
                        output.space_before_token = false;
                    } else if (output.set_indent(flags.indentation_level)) {
                        flags.line_indent_level = flags.indentation_level;
                    }
                }
            }

            function print_token(printable_token) {
                if (output.raw) {
                    output.add_raw_token(current_token);
                    return;
                }

                if (opt.comma_first && last_type === 'TK_COMMA' &&
                    output.just_added_newline()) {
                    if (output.previous_line.last() === ',') {
                        var popped = output.previous_line.pop();
                        // if the comma was already at the start of the line,
                        // pull back onto that line and reprint the indentation
                        if (output.previous_line.is_empty()) {
                            output.previous_line.push(popped);
                            output.trim(true);
                            output.current_line.pop();
                            output.trim();
                        }

                        // add the comma in front of the next token
                        print_token_line_indentation();
                        output.add_token(',');
                        output.space_before_token = true;
                    }
                }

                printable_token = printable_token || current_token.text;
                print_token_line_indentation();
                output.add_token(printable_token);
            }

            function indent() {
                flags.indentation_level += 1;
            }

            function deindent() {
                if (flags.indentation_level > 0 &&
                    ((!flags.parent) || flags.indentation_level > flags.parent.indentation_level)) {
                    flags.indentation_level -= 1;

                }
            }

            function set_mode(mode) {
                if (flags) {
                    flag_store.push(flags);
                    previous_flags = flags;
                } else {
                    previous_flags = create_flags(null, mode);
                }

                flags = create_flags(previous_flags, mode);
            }

            function is_array(mode) {
                return mode === MODE.ArrayLiteral;
            }

            function is_expression(mode) {
                return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
            }

            function restore_mode() {
                if (flag_store.length > 0) {
                    previous_flags = flags;
                    flags = flag_store.pop();
                    if (previous_flags.mode === MODE.Statement) {
                        output.remove_redundant_indentation(previous_flags);
                    }
                }
            }

            function start_of_object_property() {
                return flags.parent.mode === MODE.ObjectLiteral && flags.mode === MODE.Statement && (
                    (flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set'])));
            }

            function start_of_statement() {
                if (
                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') ||
                    (last_type === 'TK_RESERVED' && flags.last_text === 'do') ||
                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['return', 'throw']) && !current_token.wanted_newline) ||
                    (last_type === 'TK_RESERVED' && flags.last_text === 'else' &&
                        !(current_token.type === 'TK_RESERVED' && current_token.text === 'if' && !current_token.comments_before.length)) ||
                    (last_type === 'TK_END_EXPR' && (previous_flags.mode === MODE.ForInitializer || previous_flags.mode === MODE.Conditional)) ||
                    (last_type === 'TK_WORD' && flags.mode === MODE.BlockStatement &&
                        !flags.in_case &&
                        !(current_token.text === '--' || current_token.text === '++') &&
                        last_last_text !== 'function' &&
                        current_token.type !== 'TK_WORD' && current_token.type !== 'TK_RESERVED') ||
                    (flags.mode === MODE.ObjectLiteral && (
                        (flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set']))))
                ) {

                    set_mode(MODE.Statement);
                    indent();

                    handle_whitespace_and_comments(current_token, true);

                    // Issue #276:
                    // If starting a new statement with [if, for, while, do], push to a new line.
                    // if (a) if (b) if(c) d(); else e(); else f();
                    if (!start_of_object_property()) {
                        allow_wrap_or_preserved_newline(
                            current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['do', 'for', 'if', 'while']));
                    }

                    return true;
                }
                return false;
            }

            function all_lines_start_with(lines, c) {
                for (var i = 0; i < lines.length; i++) {
                    var line = trim(lines[i]);
                    if (line.charAt(0) !== c) {
                        return false;
                    }
                }
                return true;
            }

            function each_line_matches_indent(lines, indent) {
                var i = 0,
                    len = lines.length,
                    line;
                for (; i < len; i++) {
                    line = lines[i];
                    // allow empty lines to pass through
                    if (line && line.indexOf(indent) !== 0) {
                        return false;
                    }
                }
                return true;
            }

            function is_special_word(word) {
                return in_array(word, ['case', 'return', 'do', 'if', 'throw', 'else']);
            }

            function get_token(offset) {
                var index = token_pos + (offset || 0);
                return (index < 0 || index >= tokens.length) ? null : tokens[index];
            }

            function handle_start_expr() {
                // The conditional starts the statement if appropriate.
                if (!start_of_statement()) {
                    handle_whitespace_and_comments(current_token);
                }

                var next_mode = MODE.Expression;
                if (current_token.text === '[') {

                    if (last_type === 'TK_WORD' || flags.last_text === ')') {
                        // this is array index specifier, break immediately
                        // a[x], fn()[x]
                        if (last_type === 'TK_RESERVED' && in_array(flags.last_text, Tokenizer.line_starters)) {
                            output.space_before_token = true;
                        }
                        set_mode(next_mode);
                        print_token();
                        indent();
                        if (opt.space_in_paren) {
                            output.space_before_token = true;
                        }
                        return;
                    }

                    next_mode = MODE.ArrayLiteral;
                    if (is_array(flags.mode)) {
                        if (flags.last_text === '[' ||
                            (flags.last_text === ',' && (last_last_text === ']' || last_last_text === '}'))) {
                            // ], [ goes to new line
                            // }, [ goes to new line
                            if (!opt.keep_array_indentation) {
                                print_newline();
                            }
                        }
                    }

                } else {
                    if (last_type === 'TK_RESERVED' && flags.last_text === 'for') {
                        next_mode = MODE.ForInitializer;
                    } else if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['if', 'while'])) {
                        next_mode = MODE.Conditional;
                    } else {
                        // next_mode = MODE.Expression;
                    }
                }

                if (flags.last_text === ';' || last_type === 'TK_START_BLOCK') {
                    print_newline();
                } else if (last_type === 'TK_END_EXPR' || last_type === 'TK_START_EXPR' || last_type === 'TK_END_BLOCK' || flags.last_text === '.') {
                    // TODO: Consider whether forcing this is required.  Review failing tests when removed.
                    allow_wrap_or_preserved_newline(current_token.wanted_newline);
                    // do nothing on (( and )( and ][ and ]( and .(
                } else if (!(last_type === 'TK_RESERVED' && current_token.text === '(') && last_type !== 'TK_WORD' && last_type !== 'TK_OPERATOR') {
                    output.space_before_token = true;
                } else if ((last_type === 'TK_RESERVED' && (flags.last_word === 'function' || flags.last_word === 'typeof')) ||
                    (flags.last_text === '*' &&
                        (in_array(last_last_text, ['function', 'yield']) ||
                            (flags.mode === MODE.ObjectLiteral && in_array(last_last_text, ['{', ',']))))) {
                    // function() vs function ()
                    // yield*() vs yield* ()
                    // function*() vs function* ()
                    if (opt.space_after_anon_function) {
                        output.space_before_token = true;
                    }
                } else if (last_type === 'TK_RESERVED' && (in_array(flags.last_text, Tokenizer.line_starters) || flags.last_text === 'catch')) {
                    if (opt.space_before_conditional) {
                        output.space_before_token = true;
                    }
                }

                // Should be a space between await and an IIFE
                if (current_token.text === '(' && last_type === 'TK_RESERVED' && flags.last_word === 'await') {
                    output.space_before_token = true;
                }

                // Support of this kind of newline preservation.
                // a = (b &&
                //     (c || d));
                if (current_token.text === '(') {
                    if (last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
                        if (!start_of_object_property()) {
                            allow_wrap_or_preserved_newline();
                        }
                    }
                }

                // Support preserving wrapped arrow function expressions
                // a.b('c',
                //     () => d.e
                // )
                if (current_token.text === '(' && last_type !== 'TK_WORD' && last_type !== 'TK_RESERVED') {
                    allow_wrap_or_preserved_newline();
                }

                set_mode(next_mode);
                print_token();
                if (opt.space_in_paren) {
                    output.space_before_token = true;
                }

                // In all cases, if we newline while inside an expression it should be indented.
                indent();
            }

            function handle_end_expr() {
                // statements inside expressions are not valid syntax, but...
                // statements must all be closed when their container closes
                while (flags.mode === MODE.Statement) {
                    restore_mode();
                }

                handle_whitespace_and_comments(current_token);

                if (flags.multiline_frame) {
                    allow_wrap_or_preserved_newline(current_token.text === ']' && is_array(flags.mode) && !opt.keep_array_indentation);
                }

                if (opt.space_in_paren) {
                    if (last_type === 'TK_START_EXPR' && !opt.space_in_empty_paren) {
                        // () [] no inner space in empty parens like these, ever, ref #320
                        output.trim();
                        output.space_before_token = false;
                    } else {
                        output.space_before_token = true;
                    }
                }
                if (current_token.text === ']' && opt.keep_array_indentation) {
                    print_token();
                    restore_mode();
                } else {
                    restore_mode();
                    print_token();
                }
                output.remove_redundant_indentation(previous_flags);

                // do {} while () // no statement required after
                if (flags.do_while && previous_flags.mode === MODE.Conditional) {
                    previous_flags.mode = MODE.Expression;
                    flags.do_block = false;
                    flags.do_while = false;

                }
            }

            function handle_start_block() {
                handle_whitespace_and_comments(current_token);

                // Check if this is should be treated as a ObjectLiteral
                var next_token = get_token(1);
                var second_token = get_token(2);
                if (second_token && (
                        (in_array(second_token.text, [':', ',']) && in_array(next_token.type, ['TK_STRING', 'TK_WORD', 'TK_RESERVED'])) ||
                        (in_array(next_token.text, ['get', 'set', '...']) && in_array(second_token.type, ['TK_WORD', 'TK_RESERVED']))
                    )) {
                    // We don't support TypeScript,but we didn't break it for a very long time.
                    // We'll try to keep not breaking it.
                    if (!in_array(last_last_text, ['class', 'interface'])) {
                        set_mode(MODE.ObjectLiteral);
                    } else {
                        set_mode(MODE.BlockStatement);
                    }
                } else if (last_type === 'TK_OPERATOR' && flags.last_text === '=>') {
                    // arrow function: (param1, paramN) => { statements }
                    set_mode(MODE.BlockStatement);
                } else if (in_array(last_type, ['TK_EQUALS', 'TK_START_EXPR', 'TK_COMMA', 'TK_OPERATOR']) ||
                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['return', 'throw', 'import', 'default']))
                ) {
                    // Detecting shorthand function syntax is difficult by scanning forward,
                    //     so check the surrounding context.
                    // If the block is being returned, imported, export default, passed as arg,
                    //     assigned with = or assigned in a nested object, treat as an ObjectLiteral.
                    set_mode(MODE.ObjectLiteral);
                } else {
                    set_mode(MODE.BlockStatement);
                }

                var empty_braces = !next_token.comments_before.length && next_token.text === '}';
                var empty_anonymous_function = empty_braces && flags.last_word === 'function' &&
                    last_type === 'TK_END_EXPR';

                if (opt.brace_preserve_inline) // check for inline, set inline_frame if so
                {
                    // search forward for a newline wanted inside this block
                    var index = 0;
                    var check_token = null;
                    flags.inline_frame = true;
                    do {
                        index += 1;
                        check_token = get_token(index);
                        if (check_token.wanted_newline) {
                            flags.inline_frame = false;
                            break;
                        }
                    } while (check_token.type !== 'TK_EOF' &&
                        !(check_token.type === 'TK_END_BLOCK' && check_token.opened === current_token));
                }

                if ((opt.brace_style === "expand" ||
                        (opt.brace_style === "none" && current_token.wanted_newline)) &&
                    !flags.inline_frame) {
                    if (last_type !== 'TK_OPERATOR' &&
                        (empty_anonymous_function ||
                            last_type === 'TK_EQUALS' ||
                            (last_type === 'TK_RESERVED' && is_special_word(flags.last_text) && flags.last_text !== 'else'))) {
                        output.space_before_token = true;
                    } else {
                        print_newline(false, true);
                    }
                } else { // collapse || inline_frame
                    if (is_array(previous_flags.mode) && (last_type === 'TK_START_EXPR' || last_type === 'TK_COMMA')) {
                        if (last_type === 'TK_COMMA' || opt.space_in_paren) {
                            output.space_before_token = true;
                        }

                        if (last_type === 'TK_COMMA' || (last_type === 'TK_START_EXPR' && flags.inline_frame)) {
                            allow_wrap_or_preserved_newline();
                            previous_flags.multiline_frame = previous_flags.multiline_frame || flags.multiline_frame;
                            flags.multiline_frame = false;
                        }
                    }
                    if (last_type !== 'TK_OPERATOR' && last_type !== 'TK_START_EXPR') {
                        if (last_type === 'TK_START_BLOCK' && !flags.inline_frame) {
                            print_newline();
                        } else {
                            output.space_before_token = true;
                        }
                    }
                }
                print_token();
                indent();
            }

            function handle_end_block() {
                // statements must all be closed when their container closes
                handle_whitespace_and_comments(current_token);

                while (flags.mode === MODE.Statement) {
                    restore_mode();
                }

                var empty_braces = last_type === 'TK_START_BLOCK';

                if (flags.inline_frame && !empty_braces) { // try inline_frame (only set if opt.braces-preserve-inline) first
                    output.space_before_token = true;
                } else if (opt.brace_style === "expand") {
                    if (!empty_braces) {
                        print_newline();
                    }
                } else {
                    // skip {}
                    if (!empty_braces) {
                        if (is_array(flags.mode) && opt.keep_array_indentation) {
                            // we REALLY need a newline here, but newliner would skip that
                            opt.keep_array_indentation = false;
                            print_newline();
                            opt.keep_array_indentation = true;

                        } else {
                            print_newline();
                        }
                    }
                }
                restore_mode();
                print_token();
            }

            function handle_word() {
                if (current_token.type === 'TK_RESERVED') {
                    if (in_array(current_token.text, ['set', 'get']) && flags.mode !== MODE.ObjectLiteral) {
                        current_token.type = 'TK_WORD';
                    } else if (in_array(current_token.text, ['as', 'from']) && !flags.import_block) {
                        current_token.type = 'TK_WORD';
                    } else if (flags.mode === MODE.ObjectLiteral) {
                        var next_token = get_token(1);
                        if (next_token.text === ':') {
                            current_token.type = 'TK_WORD';
                        }
                    }
                }

                if (start_of_statement()) {
                    // The conditional starts the statement if appropriate.
                    if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') {
                        flags.declaration_statement = true;
                    }
                } else if (current_token.wanted_newline && !is_expression(flags.mode) &&
                    (last_type !== 'TK_OPERATOR' || (flags.last_text === '--' || flags.last_text === '++')) &&
                    last_type !== 'TK_EQUALS' &&
                    (opt.preserve_newlines || !(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const', 'set', 'get'])))) {
                    handle_whitespace_and_comments(current_token);
                    print_newline();
                } else {
                    handle_whitespace_and_comments(current_token);
                }

                if (flags.do_block && !flags.do_while) {
                    if (current_token.type === 'TK_RESERVED' && current_token.text === 'while') {
                        // do {} ## while ()
                        output.space_before_token = true;
                        print_token();
                        output.space_before_token = true;
                        flags.do_while = true;
                        return;
                    } else {
                        // do {} should always have while as the next word.
                        // if we don't see the expected while, recover
                        print_newline();
                        flags.do_block = false;
                    }
                }

                // if may be followed by else, or not
                // Bare/inline ifs are tricky
                // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
                if (flags.if_block) {
                    if (!flags.else_block && (current_token.type === 'TK_RESERVED' && current_token.text === 'else')) {
                        flags.else_block = true;
                    } else {
                        while (flags.mode === MODE.Statement) {
                            restore_mode();
                        }
                        flags.if_block = false;
                        flags.else_block = false;
                    }
                }

                if (current_token.type === 'TK_RESERVED' && (current_token.text === 'case' || (current_token.text === 'default' && flags.in_case_statement))) {
                    print_newline();
                    if (flags.case_body || opt.jslint_happy) {
                        // switch cases following one another
                        deindent();
                        flags.case_body = false;
                    }
                    print_token();
                    flags.in_case = true;
                    flags.in_case_statement = true;
                    return;
                }

                if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
                    if (!start_of_object_property()) {
                        allow_wrap_or_preserved_newline();
                    }
                }

                if (current_token.type === 'TK_RESERVED' && current_token.text === 'function') {
                    if (in_array(flags.last_text, ['}', ';']) ||
                        (output.just_added_newline() && !(in_array(flags.last_text, ['(', '[', '{', ':', '=', ',']) || last_type === 'TK_OPERATOR'))) {
                        // make sure there is a nice clean space of at least one blank line
                        // before a new function definition
                        if (!output.just_added_blankline() && !current_token.comments_before.length) {
                            print_newline();
                            print_newline(true);
                        }
                    }
                    if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD') {
                        if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set', 'new', 'return', 'export', 'async'])) {
                            output.space_before_token = true;
                        } else if (last_type === 'TK_RESERVED' && flags.last_text === 'default' && last_last_text === 'export') {
                            output.space_before_token = true;
                        } else {
                            print_newline();
                        }
                    } else if (last_type === 'TK_OPERATOR' || flags.last_text === '=') {
                        // foo = function
                        output.space_before_token = true;
                    } else if (!flags.multiline_frame && (is_expression(flags.mode) || is_array(flags.mode))) {
                        // (function
                    } else {
                        print_newline();
                    }

                    print_token();
                    flags.last_word = current_token.text;
                    return;
                }

                prefix = 'NONE';

                if (last_type === 'TK_END_BLOCK') {

                    if (previous_flags.inline_frame) {
                        prefix = 'SPACE';
                    } else if (!(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally', 'from']))) {
                        prefix = 'NEWLINE';
                    } else {
                        if (opt.brace_style === "expand" ||
                            opt.brace_style === "end-expand" ||
                            (opt.brace_style === "none" && current_token.wanted_newline)) {
                            prefix = 'NEWLINE';
                        } else {
                            prefix = 'SPACE';
                            output.space_before_token = true;
                        }
                    }
                } else if (last_type === 'TK_SEMICOLON' && flags.mode === MODE.BlockStatement) {
                    // TODO: Should this be for STATEMENT as well?
                    prefix = 'NEWLINE';
                } else if (last_type === 'TK_SEMICOLON' && is_expression(flags.mode)) {
                    prefix = 'SPACE';
                } else if (last_type === 'TK_STRING') {
                    prefix = 'NEWLINE';
                } else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' ||
                    (flags.last_text === '*' &&
                        (in_array(last_last_text, ['function', 'yield']) ||
                            (flags.mode === MODE.ObjectLiteral && in_array(last_last_text, ['{', ',']))))) {
                    prefix = 'SPACE';
                } else if (last_type === 'TK_START_BLOCK') {
                    if (flags.inline_frame) {
                        prefix = 'SPACE';
                    } else {
                        prefix = 'NEWLINE';
                    }
                } else if (last_type === 'TK_END_EXPR') {
                    output.space_before_token = true;
                    prefix = 'NEWLINE';
                }

                if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
                    if (flags.inline_frame || flags.last_text === 'else' || flags.last_text === 'export') {
                        prefix = 'SPACE';
                    } else {
                        prefix = 'NEWLINE';
                    }

                }

                if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally'])) {
                    if ((!(last_type === 'TK_END_BLOCK' && previous_flags.mode === MODE.BlockStatement) ||
                            opt.brace_style === "expand" ||
                            opt.brace_style === "end-expand" ||
                            (opt.brace_style === "none" && current_token.wanted_newline)) &&
                        !flags.inline_frame) {
                        print_newline();
                    } else {
                        output.trim(true);
                        var line = output.current_line;
                        // If we trimmed and there's something other than a close block before us
                        // put a newline back in.  Handles '} // comment' scenario.
                        if (line.last() !== '}') {
                            print_newline();
                        }
                        output.space_before_token = true;
                    }
                } else if (prefix === 'NEWLINE') {
                    if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
                        // no newline between 'return nnn'
                        output.space_before_token = true;
                    } else if (last_type !== 'TK_END_EXPR') {
                        if ((last_type !== 'TK_START_EXPR' || !(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['var', 'let', 'const']))) && flags.last_text !== ':') {
                            // no need to force newline on 'var': for (var x = 0...)
                            if (current_token.type === 'TK_RESERVED' && current_token.text === 'if' && flags.last_text === 'else') {
                                // no newline for } else if {
                                output.space_before_token = true;
                            } else {
                                print_newline();
                            }
                        }
                    } else if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
                        print_newline();
                    }
                } else if (flags.multiline_frame && is_array(flags.mode) && flags.last_text === ',' && last_last_text === '}') {
                    print_newline(); // }, in lists get a newline treatment
                } else if (prefix === 'SPACE') {
                    output.space_before_token = true;
                }
                print_token();
                flags.last_word = current_token.text;

                if (current_token.type === 'TK_RESERVED') {
                    if (current_token.text === 'do') {
                        flags.do_block = true;
                    } else if (current_token.text === 'if') {
                        flags.if_block = true;
                    } else if (current_token.text === 'import') {
                        flags.import_block = true;
                    } else if (flags.import_block && current_token.type === 'TK_RESERVED' && current_token.text === 'from') {
                        flags.import_block = false;
                    }
                }
            }

            function handle_semicolon() {
                if (start_of_statement()) {
                    // The conditional starts the statement if appropriate.
                    // Semicolon can be the start (and end) of a statement
                    output.space_before_token = false;
                } else {
                    handle_whitespace_and_comments(current_token);
                }

                var next_token = get_token(1);
                while (flags.mode === MODE.Statement &&
                    !(flags.if_block && next_token && next_token.type === 'TK_RESERVED' && next_token.text === 'else') &&
                    !flags.do_block) {
                    restore_mode();
                }

                // hacky but effective for the moment
                if (flags.import_block) {
                    flags.import_block = false;
                }
                print_token();
            }

            function handle_string() {
                if (start_of_statement()) {
                    // The conditional starts the statement if appropriate.
                    // One difference - strings want at least a space before
                    output.space_before_token = true;
                } else {
                    handle_whitespace_and_comments(current_token);
                    if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' || flags.inline_frame) {
                        output.space_before_token = true;
                    } else if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
                        if (!start_of_object_property()) {
                            allow_wrap_or_preserved_newline();
                        }
                    } else {
                        print_newline();
                    }
                }
                print_token();
            }

            function handle_equals() {
                if (start_of_statement()) {
                    // The conditional starts the statement if appropriate.
                } else {
                    handle_whitespace_and_comments(current_token);
                }

                if (flags.declaration_statement) {
                    // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
                    flags.declaration_assignment = true;
                }
                output.space_before_token = true;
                print_token();
                output.space_before_token = true;
            }

            function handle_comma() {
                handle_whitespace_and_comments(current_token, true);

                print_token();
                output.space_before_token = true;
                if (flags.declaration_statement) {
                    if (is_expression(flags.parent.mode)) {
                        // do not break on comma, for(var a = 1, b = 2)
                        flags.declaration_assignment = false;
                    }

                    if (flags.declaration_assignment) {
                        flags.declaration_assignment = false;
                        print_newline(false, true);
                    } else if (opt.comma_first) {
                        // for comma-first, we want to allow a newline before the comma
                        // to turn into a newline after the comma, which we will fixup later
                        allow_wrap_or_preserved_newline();
                    }
                } else if (flags.mode === MODE.ObjectLiteral ||
                    (flags.mode === MODE.Statement && flags.parent.mode === MODE.ObjectLiteral)) {
                    if (flags.mode === MODE.Statement) {
                        restore_mode();
                    }

                    if (!flags.inline_frame) {
                        print_newline();
                    }
                } else if (opt.comma_first) {
                    // EXPR or DO_BLOCK
                    // for comma-first, we want to allow a newline before the comma
                    // to turn into a newline after the comma, which we will fixup later
                    allow_wrap_or_preserved_newline();
                }
            }

            function handle_operator() {
                var isGeneratorAsterisk = current_token.text === '*' &&
                    ((last_type === 'TK_RESERVED' && in_array(flags.last_text, ['function', 'yield'])) ||
                        (in_array(last_type, ['TK_START_BLOCK', 'TK_COMMA', 'TK_END_BLOCK', 'TK_SEMICOLON']))
                    );
                var isUnary = in_array(current_token.text, ['-', '+']) && (
                    in_array(last_type, ['TK_START_BLOCK', 'TK_START_EXPR', 'TK_EQUALS', 'TK_OPERATOR']) ||
                    in_array(flags.last_text, Tokenizer.line_starters) ||
                    flags.last_text === ','
                );

                if (start_of_statement()) {
                    // The conditional starts the statement if appropriate.
                } else {
                    var preserve_statement_flags = !isGeneratorAsterisk;
                    handle_whitespace_and_comments(current_token, preserve_statement_flags);
                }

                if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
                    // "return" had a special handling in TK_WORD. Now we need to return the favor
                    output.space_before_token = true;
                    print_token();
                    return;
                }

                // hack for actionscript's import .*;
                if (current_token.text === '*' && last_type === 'TK_DOT') {
                    print_token();
                    return;
                }

                if (current_token.text === '::') {
                    // no spaces around exotic namespacing syntax operator
                    print_token();
                    return;
                }

                // Allow line wrapping between operators when operator_position is
                //   set to before or preserve
                if (last_type === 'TK_OPERATOR' && in_array(opt.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
                    allow_wrap_or_preserved_newline();
                }

                if (current_token.text === ':' && flags.in_case) {
                    flags.case_body = true;
                    indent();
                    print_token();
                    print_newline();
                    flags.in_case = false;
                    return;
                }

                var space_before = true;
                var space_after = true;
                var in_ternary = false;
                if (current_token.text === ':') {
                    if (flags.ternary_depth === 0) {
                        // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
                        space_before = false;
                    } else {
                        flags.ternary_depth -= 1;
                        in_ternary = true;
                    }
                } else if (current_token.text === '?') {
                    flags.ternary_depth += 1;
                }

                // let's handle the operator_position option prior to any conflicting logic
                if (!isUnary && !isGeneratorAsterisk && opt.preserve_newlines && in_array(current_token.text, Tokenizer.positionable_operators)) {
                    var isColon = current_token.text === ':';
                    var isTernaryColon = (isColon && in_ternary);
                    var isOtherColon = (isColon && !in_ternary);

                    switch (opt.operator_position) {
                        case OPERATOR_POSITION.before_newline:
                            // if the current token is : and it's not a ternary statement then we set space_before to false
                            output.space_before_token = !isOtherColon;

                            print_token();

                            if (!isColon || isTernaryColon) {
                                allow_wrap_or_preserved_newline();
                            }

                            output.space_before_token = true;
                            return;

                        case OPERATOR_POSITION.after_newline:
                            // if the current token is anything but colon, or (via deduction) it's a colon and in a ternary statement,
                            //   then print a newline.

                            output.space_before_token = true;

                            if (!isColon || isTernaryColon) {
                                if (get_token(1).wanted_newline) {
                                    print_newline(false, true);
                                } else {
                                    allow_wrap_or_preserved_newline();
                                }
                            } else {
                                output.space_before_token = false;
                            }

                            print_token();

                            output.space_before_token = true;
                            return;

                        case OPERATOR_POSITION.preserve_newline:
                            if (!isOtherColon) {
                                allow_wrap_or_preserved_newline();
                            }

                            // if we just added a newline, or the current token is : and it's not a ternary statement,
                            //   then we set space_before to false
                            space_before = !(output.just_added_newline() || isOtherColon);

                            output.space_before_token = space_before;
                            print_token();
                            output.space_before_token = true;
                            return;
                    }
                }

                if (isGeneratorAsterisk) {
                    allow_wrap_or_preserved_newline();
                    space_before = false;
                    var next_token = get_token(1);
                    space_after = next_token && in_array(next_token.type, ['TK_WORD', 'TK_RESERVED']);
                } else if (current_token.text === '...') {
                    allow_wrap_or_preserved_newline();
                    space_before = last_type === 'TK_START_BLOCK';
                    space_after = false;
                } else if (in_array(current_token.text, ['--', '++', '!', '~']) || isUnary) {
                    // unary operators (and binary +/- pretending to be unary) special cases

                    space_before = false;
                    space_after = false;

                    // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
                    // if there is a newline between -- or ++ and anything else we should preserve it.
                    if (current_token.wanted_newline && (current_token.text === '--' || current_token.text === '++')) {
                        print_newline(false, true);
                    }

                    if (flags.last_text === ';' && is_expression(flags.mode)) {
                        // for (;; ++i)
                        //        ^^^
                        space_before = true;
                    }

                    if (last_type === 'TK_RESERVED') {
                        space_before = true;
                    } else if (last_type === 'TK_END_EXPR') {
                        space_before = !(flags.last_text === ']' && (current_token.text === '--' || current_token.text === '++'));
                    } else if (last_type === 'TK_OPERATOR') {
                        // a++ + ++b;
                        // a - -b
                        space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(flags.last_text, ['--', '-', '++', '+']);
                        // + and - are not unary when preceeded by -- or ++ operator
                        // a-- + b
                        // a * +b
                        // a - -b
                        if (in_array(current_token.text, ['+', '-']) && in_array(flags.last_text, ['--', '++'])) {
                            space_after = true;
                        }
                    }


                    if (((flags.mode === MODE.BlockStatement && !flags.inline_frame) || flags.mode === MODE.Statement) &&
                        (flags.last_text === '{' || flags.last_text === ';')) {
                        // { foo; --i }
                        // foo(); --bar;
                        print_newline();
                    }
                }

                output.space_before_token = output.space_before_token || space_before;
                print_token();
                output.space_before_token = space_after;
            }

            function handle_block_comment(preserve_statement_flags) {
                if (output.raw) {
                    output.add_raw_token(current_token);
                    if (current_token.directives && current_token.directives.preserve === 'end') {
                        // If we're testing the raw output behavior, do not allow a directive to turn it off.
                        output.raw = opt.test_output_raw;
                    }
                    return;
                }

                if (current_token.directives) {
                    print_newline(false, preserve_statement_flags);
                    print_token();
                    if (current_token.directives.preserve === 'start') {
                        output.raw = true;
                    }
                    print_newline(false, true);
                    return;
                }

                // inline block
                if (!acorn.newline.test(current_token.text) && !current_token.wanted_newline) {
                    output.space_before_token = true;
                    print_token();
                    output.space_before_token = true;
                    return;
                }

                var lines = split_linebreaks(current_token.text);
                var j; // iterator for this case
                var javadoc = false;
                var starless = false;
                var lastIndent = current_token.whitespace_before;
                var lastIndentLength = lastIndent.length;

                // block comment starts with a new line
                print_newline(false, preserve_statement_flags);
                if (lines.length > 1) {
                    javadoc = all_lines_start_with(lines.slice(1), '*');
                    starless = each_line_matches_indent(lines.slice(1), lastIndent);
                }

                // first line always indented
                print_token(lines[0]);
                for (j = 1; j < lines.length; j++) {
                    print_newline(false, true);
                    if (javadoc) {
                        // javadoc: reformat and re-indent
                        print_token(' ' + ltrim(lines[j]));
                    } else if (starless && lines[j].length > lastIndentLength) {
                        // starless: re-indent non-empty content, avoiding trim
                        print_token(lines[j].substring(lastIndentLength));
                    } else {
                        // normal comments output raw
                        output.add_token(lines[j]);
                    }
                }

                // for comments of more than one line, make sure there's a new line after
                print_newline(false, preserve_statement_flags);
            }

            function handle_comment(preserve_statement_flags) {
                if (current_token.wanted_newline) {
                    print_newline(false, preserve_statement_flags);
                } else {
                    output.trim(true);
                }

                output.space_before_token = true;
                print_token();
                print_newline(false, preserve_statement_flags);
            }

            function handle_dot() {
                if (start_of_statement()) {
                    // The conditional starts the statement if appropriate.
                } else {
                    handle_whitespace_and_comments(current_token, true);
                }

                if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
                    output.space_before_token = true;
                } else {
                    // allow preserved newlines before dots in general
                    // force newlines on dots after close paren when break_chained - for bar().baz()
                    allow_wrap_or_preserved_newline(flags.last_text === ')' && opt.break_chained_methods);
                }

                print_token();
            }

            function handle_unknown(preserve_statement_flags) {
                print_token();

                if (current_token.text[current_token.text.length - 1] === '\n') {
                    print_newline(false, preserve_statement_flags);
                }
            }

            function handle_eof() {
                // Unwind any open statements
                while (flags.mode === MODE.Statement) {
                    restore_mode();
                }
                handle_whitespace_and_comments(current_token);
            }
        }


        function OutputLine(parent) {
            var _character_count = 0;
            // use indent_count as a marker for lines that have preserved indentation
            var _indent_count = -1;

            var _items = [];
            var _empty = true;

            this.set_indent = function(level) {
                _character_count = parent.baseIndentLength + level * parent.indent_length;
                _indent_count = level;
            };

            this.get_character_count = function() {
                return _character_count;
            };

            this.is_empty = function() {
                return _empty;
            };

            this.last = function() {
                if (!this._empty) {
                    return _items[_items.length - 1];
                } else {
                    return null;
                }
            };

            this.push = function(input) {
                _items.push(input);
                _character_count += input.length;
                _empty = false;
            };

            this.pop = function() {
                var item = null;
                if (!_empty) {
                    item = _items.pop();
                    _character_count -= item.length;
                    _empty = _items.length === 0;
                }
                return item;
            };

            this.remove_indent = function() {
                if (_indent_count > 0) {
                    _indent_count -= 1;
                    _character_count -= parent.indent_length;
                }
            };

            this.trim = function() {
                while (this.last() === ' ') {
                    _items.pop();
                    _character_count -= 1;
                }
                _empty = _items.length === 0;
            };

            this.toString = function() {
                var result = '';
                if (!this._empty) {
                    if (_indent_count >= 0) {
                        result = parent.indent_cache[_indent_count];
                    }
                    result += _items.join('');
                }
                return result;
            };
        }

        function Output(indent_string, baseIndentString) {
            baseIndentString = baseIndentString || '';
            this.indent_cache = [baseIndentString];
            this.baseIndentLength = baseIndentString.length;
            this.indent_length = indent_string.length;
            this.raw = false;

            var lines = [];
            this.baseIndentString = baseIndentString;
            this.indent_string = indent_string;
            this.previous_line = null;
            this.current_line = null;
            this.space_before_token = false;

            this.add_outputline = function() {
                this.previous_line = this.current_line;
                this.current_line = new OutputLine(this);
                lines.push(this.current_line);
            };

            // initialize
            this.add_outputline();


            this.get_line_number = function() {
                return lines.length;
            };

            // Using object instead of string to allow for later expansion of info about each line
            this.add_new_line = function(force_newline) {
                if (this.get_line_number() === 1 && this.just_added_newline()) {
                    return false; // no newline on start of file
                }

                if (force_newline || !this.just_added_newline()) {
                    if (!this.raw) {
                        this.add_outputline();
                    }
                    return true;
                }

                return false;
            };

            this.get_code = function() {
                var sweet_code = lines.join('\n').replace(/[\r\n\t ]+$/, '');
                return sweet_code;
            };

            this.set_indent = function(level) {
                // Never indent your first output indent at the start of the file
                if (lines.length > 1) {
                    while (level >= this.indent_cache.length) {
                        this.indent_cache.push(this.indent_cache[this.indent_cache.length - 1] + this.indent_string);
                    }

                    this.current_line.set_indent(level);
                    return true;
                }
                this.current_line.set_indent(0);
                return false;
            };

            this.add_raw_token = function(token) {
                for (var x = 0; x < token.newlines; x++) {
                    this.add_outputline();
                }
                this.current_line.push(token.whitespace_before);
                this.current_line.push(token.text);
                this.space_before_token = false;
            };

            this.add_token = function(printable_token) {
                this.add_space_before_token();
                this.current_line.push(printable_token);
            };

            this.add_space_before_token = function() {
                if (this.space_before_token && !this.just_added_newline()) {
                    this.current_line.push(' ');
                }
                this.space_before_token = false;
            };

            this.remove_redundant_indentation = function(frame) {
                // This implementation is effective but has some issues:
                //     - can cause line wrap to happen too soon due to indent removal
                //           after wrap points are calculated
                // These issues are minor compared to ugly indentation.

                if (frame.multiline_frame ||
                    frame.mode === MODE.ForInitializer ||
                    frame.mode === MODE.Conditional) {
                    return;
                }

                // remove one indent from each line inside this section
                var index = frame.start_line_index;

                var output_length = lines.length;
                while (index < output_length) {
                    lines[index].remove_indent();
                    index++;
                }
            };

            this.trim = function(eat_newlines) {
                eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

                this.current_line.trim(indent_string, baseIndentString);

                while (eat_newlines && lines.length > 1 &&
                    this.current_line.is_empty()) {
                    lines.pop();
                    this.current_line = lines[lines.length - 1];
                    this.current_line.trim();
                }

                this.previous_line = lines.length > 1 ? lines[lines.length - 2] : null;
            };

            this.just_added_newline = function() {
                return this.current_line.is_empty();
            };

            this.just_added_blankline = function() {
                if (this.just_added_newline()) {
                    if (lines.length === 1) {
                        return true; // start of the file and newline = blank
                    }

                    var line = lines[lines.length - 2];
                    return line.is_empty();
                }
                return false;
            };
        }

        var InputScanner = function(input) {
            var _input = input;
            var _input_length = _input.length;
            var _position = 0;

            this.back = function() {
                _position -= 1;
            };

            this.hasNext = function() {
                return _position < _input_length;
            };

            this.next = function() {
                var val = null;
                if (this.hasNext()) {
                    val = _input.charAt(_position);
                    _position += 1;
                }
                return val;
            };

            this.peek = function(index) {
                var val = null;
                index = index || 0;
                index += _position;
                if (index >= 0 && index < _input_length) {
                    val = _input.charAt(index);
                }
                return val;
            };

            this.peekCharCode = function(index) {
                var val = 0;
                index = index || 0;
                index += _position;
                if (index >= 0 && index < _input_length) {
                    val = _input.charCodeAt(index);
                }
                return val;
            };

            this.test = function(pattern, index) {
                index = index || 0;
                pattern.lastIndex = _position + index;
                return pattern.test(_input);
            };

            this.testChar = function(pattern, index) {
                var val = this.peek(index);
                return val !== null && pattern.test(val);
            };

            this.match = function(pattern) {
                pattern.lastIndex = _position;
                var pattern_match = pattern.exec(_input);
                if (pattern_match && pattern_match.index === _position) {
                    _position += pattern_match[0].length;
                } else {
                    pattern_match = null;
                }
                return pattern_match;
            };
        };

        var Token = function(type, text, newlines, whitespace_before, parent) {
            this.type = type;
            this.text = text;

            // comments_before are
            // comments that have a new line before them
            // and may or may not have a newline after
            // this is a set of comments before
            this.comments_before = /* inline comment*/ [];


            this.comments_after = []; // no new line before and newline after
            this.newlines = newlines || 0;
            this.wanted_newline = newlines > 0;
            this.whitespace_before = whitespace_before || '';
            this.parent = parent || null;
            this.opened = null;
            this.directives = null;
        };

        function tokenizer(input_string, opts) {

            var whitespace = "\n\r\t ".split('');
            var digit = /[0-9]/;
            var digit_bin = /[01]/;
            var digit_oct = /[01234567]/;
            var digit_hex = /[0123456789abcdefABCDEF]/;

            this.positionable_operators = '!= !== % & && * ** + - / : < << <= == === > >= >> >>> ? ^ | ||'.split(' ');
            var punct = this.positionable_operators.concat(
                // non-positionable operators - these do not follow operator position settings
                '! %= &= *= **= ++ += , -- -= /= :: <<= = => >>= >>>= ^= |= ~ ...'.split(' '));

            // words which should always start on new line.
            this.line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
            var reserved_words = this.line_starters.concat(['do', 'in', 'of', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as']);

            //  /* ... */ comment ends with nearest */ or end of file
            var block_comment_pattern = /([\s\S]*?)((?:\*\/)|$)/g;

            // comment ends just before nearest linefeed or end of file
            var comment_pattern = /([^\n\r\u2028\u2029]*)/g;

            var directives_block_pattern = /\/\* beautify( \w+[:]\w+)+ \*\//g;
            var directive_pattern = / (\w+)[:](\w+)/g;
            var directives_end_ignore_pattern = /([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g;

            var template_pattern = /((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;

            var n_newlines, whitespace_before_token, in_html_comment, tokens;
            var input;

            this.tokenize = function() {
                input = new InputScanner(input_string);
                in_html_comment = false;
                tokens = [];

                var next, last;
                var token_values;
                var open = null;
                var open_stack = [];
                var comments = [];

                while (!(last && last.type === 'TK_EOF')) {
                    token_values = tokenize_next();
                    next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
                    while (next.type === 'TK_COMMENT' || next.type === 'TK_BLOCK_COMMENT' || next.type === 'TK_UNKNOWN') {
                        if (next.type === 'TK_BLOCK_COMMENT') {
                            next.directives = token_values[2];
                        }
                        comments.push(next);
                        token_values = tokenize_next();
                        next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
                    }

                    if (comments.length) {
                        next.comments_before = comments;
                        comments = [];
                    }

                    if (next.type === 'TK_START_BLOCK' || next.type === 'TK_START_EXPR') {
                        next.parent = last;
                        open_stack.push(open);
                        open = next;
                    } else if ((next.type === 'TK_END_BLOCK' || next.type === 'TK_END_EXPR') &&
                        (open && (
                            (next.text === ']' && open.text === '[') ||
                            (next.text === ')' && open.text === '(') ||
                            (next.text === '}' && open.text === '{')))) {
                        next.parent = open.parent;
                        next.opened = open;

                        open = open_stack.pop();
                    }

                    tokens.push(next);
                    last = next;
                }

                return tokens;
            };

            function get_directives(text) {
                if (!text.match(directives_block_pattern)) {
                    return null;
                }

                var directives = {};
                directive_pattern.lastIndex = 0;
                var directive_match = directive_pattern.exec(text);

                while (directive_match) {
                    directives[directive_match[1]] = directive_match[2];
                    directive_match = directive_pattern.exec(text);
                }

                return directives;
            }

            function tokenize_next() {
                var resulting_string;
                var whitespace_on_this_line = [];

                n_newlines = 0;
                whitespace_before_token = '';

                var c = input.next();

                if (c === null) {
                    return ['', 'TK_EOF'];
                }

                var last_token;
                if (tokens.length) {
                    last_token = tokens[tokens.length - 1];
                } else {
                    // For the sake of tokenizing we can pretend that there was on open brace to start
                    last_token = new Token('TK_START_BLOCK', '{');
                }

                while (in_array(c, whitespace)) {

                    if (acorn.newline.test(c)) {
                        if (!(c === '\n' && input.peek(-2) === '\r')) {
                            n_newlines += 1;
                            whitespace_on_this_line = [];
                        }
                    } else {
                        whitespace_on_this_line.push(c);
                    }

                    c = input.next();

                    if (c === null) {
                        return ['', 'TK_EOF'];
                    }
                }

                if (whitespace_on_this_line.length) {
                    whitespace_before_token = whitespace_on_this_line.join('');
                }

                if (digit.test(c) || (c === '.' && input.testChar(digit))) {
                    var allow_decimal = true;
                    var allow_e = true;
                    var local_digit = digit;

                    if (c === '0' && input.testChar(/[XxOoBb]/)) {
                        // switch to hex/oct/bin number, no decimal or e, just hex/oct/bin digits
                        allow_decimal = false;
                        allow_e = false;
                        if (input.testChar(/[Bb]/)) {
                            local_digit = digit_bin;
                        } else if (input.testChar(/[Oo]/)) {
                            local_digit = digit_oct;
                        } else {
                            local_digit = digit_hex;
                        }
                        c += input.next();
                    } else if (c === '.') {
                        // Already have a decimal for this literal, don't allow another
                        allow_decimal = false;
                    } else {
                        // we know this first loop will run.  It keeps the logic simpler.
                        c = '';
                        input.back();
                    }

                    // Add the digits
                    while (input.testChar(local_digit)) {
                        c += input.next();

                        if (allow_decimal && input.peek() === '.') {
                            c += input.next();
                            allow_decimal = false;
                        }

                        // a = 1.e-7 is valid, so we test for . then e in one loop
                        if (allow_e && input.testChar(/[Ee]/)) {
                            c += input.next();

                            if (input.testChar(/[+-]/)) {
                                c += input.next();
                            }

                            allow_e = false;
                            allow_decimal = false;
                        }
                    }

                    return [c, 'TK_WORD'];
                }

                if (acorn.isIdentifierStart(input.peekCharCode(-1))) {
                    if (input.hasNext()) {
                        while (acorn.isIdentifierChar(input.peekCharCode())) {
                            c += input.next();
                            if (!input.hasNext()) {
                                break;
                            }
                        }
                    }

                    if (!(last_token.type === 'TK_DOT' ||
                            (last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['set', 'get']))) &&
                        in_array(c, reserved_words)) {
                        if (c === 'in' || c === 'of') { // hack for 'in' and 'of' operators
                            return [c, 'TK_OPERATOR'];
                        }
                        return [c, 'TK_RESERVED'];
                    }

                    return [c, 'TK_WORD'];
                }

                if (c === '(' || c === '[') {
                    return [c, 'TK_START_EXPR'];
                }

                if (c === ')' || c === ']') {
                    return [c, 'TK_END_EXPR'];
                }

                if (c === '{') {
                    return [c, 'TK_START_BLOCK'];
                }

                if (c === '}') {
                    return [c, 'TK_END_BLOCK'];
                }

                if (c === ';') {
                    return [c, 'TK_SEMICOLON'];
                }

                if (c === '/') {
                    var comment = '';
                    var comment_match;
                    // peek for comment /* ... */
                    if (input.peek() === '*') {
                        input.next();
                        comment_match = input.match(block_comment_pattern);
                        comment = '/*' + comment_match[0];
                        var directives = get_directives(comment);
                        if (directives && directives.ignore === 'start') {
                            comment_match = input.match(directives_end_ignore_pattern);
                            comment += comment_match[0];
                        }
                        comment = comment.replace(acorn.allLineBreaks, '\n');
                        return [comment, 'TK_BLOCK_COMMENT', directives];
                    }
                    // peek for comment // ...
                    if (input.peek() === '/') {
                        input.next();
                        comment_match = input.match(comment_pattern);
                        comment = '//' + comment_match[0];
                        return [comment, 'TK_COMMENT'];
                    }

                }

                var startXmlRegExp = /<()([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;

                if (c === '`' || c === "'" || c === '"' || // string
                    (
                        (c === '/') || // regexp
                        (opts.e4x && c === "<" && input.test(startXmlRegExp, -1)) // xml
                    ) && ( // regex and xml can only appear in specific locations during parsing
                        (last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) ||
                        (last_token.type === 'TK_END_EXPR' && last_token.text === ')' &&
                            last_token.parent && last_token.parent.type === 'TK_RESERVED' && in_array(last_token.parent.text, ['if', 'while', 'for'])) ||
                        (in_array(last_token.type, ['TK_COMMENT', 'TK_START_EXPR', 'TK_START_BLOCK',
                            'TK_END_BLOCK', 'TK_OPERATOR', 'TK_EQUALS', 'TK_EOF', 'TK_SEMICOLON', 'TK_COMMA'
                        ]))
                    )) {

                    var sep = c,
                        esc = false,
                        has_char_escapes = false;

                    resulting_string = c;

                    if (sep === '/') {
                        //
                        // handle regexp
                        //
                        var in_char_class = false;
                        while (input.hasNext() &&
                            ((esc || in_char_class || input.peek() !== sep) &&
                                !input.testChar(acorn.newline))) {
                            resulting_string += input.peek();
                            if (!esc) {
                                esc = input.peek() === '\\';
                                if (input.peek() === '[') {
                                    in_char_class = true;
                                } else if (input.peek() === ']') {
                                    in_char_class = false;
                                }
                            } else {
                                esc = false;
                            }
                            input.next();
                        }
                    } else if (opts.e4x && sep === '<') {
                        //
                        // handle e4x xml literals
                        //

                        var xmlRegExp = /[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;
                        input.back();
                        var xmlStr = '';
                        var match = input.match(startXmlRegExp);
                        if (match) {
                            // Trim root tag to attempt to
                            var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
                            var isCurlyRoot = rootTag.indexOf('{') === 0;
                            var depth = 0;
                            while (match) {
                                var isEndTag = !!match[1];
                                var tagName = match[2];
                                var isSingletonTag = (!!match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
                                if (!isSingletonTag &&
                                    (tagName === rootTag || (isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}')))) {
                                    if (isEndTag) {
                                        --depth;
                                    } else {
                                        ++depth;
                                    }
                                }
                                xmlStr += match[0];
                                if (depth <= 0) {
                                    break;
                                }
                                match = input.match(xmlRegExp);
                            }
                            // if we didn't close correctly, keep unformatted.
                            if (!match) {
                                xmlStr += input.match(/[\s\S]*/g)[0];
                            }
                            xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
                            return [xmlStr, "TK_STRING"];
                        }
                    } else {
                        //
                        // handle string
                        //
                        var parse_string = function(delimiter, allow_unescaped_newlines, start_sub) {
                            // Template strings can travers lines without escape characters.
                            // Other strings cannot
                            var current_char;
                            while (input.hasNext()) {
                                current_char = input.peek();
                                if (!(esc || (current_char !== delimiter &&
                                        (allow_unescaped_newlines || !acorn.newline.test(current_char))))) {
                                    break;
                                }

                                // Handle \r\n linebreaks after escapes or in template strings
                                if ((esc || allow_unescaped_newlines) && acorn.newline.test(current_char)) {
                                    if (current_char === '\r' && input.peek(1) === '\n') {
                                        input.next();
                                        current_char = input.peek();
                                    }
                                    resulting_string += '\n';
                                } else {
                                    resulting_string += current_char;
                                }

                                if (esc) {
                                    if (current_char === 'x' || current_char === 'u') {
                                        has_char_escapes = true;
                                    }
                                    esc = false;
                                } else {
                                    esc = current_char === '\\';
                                }

                                input.next();

                                if (start_sub && resulting_string.indexOf(start_sub, resulting_string.length - start_sub.length) !== -1) {
                                    if (delimiter === '`') {
                                        parse_string('}', allow_unescaped_newlines, '`');
                                    } else {
                                        parse_string('`', allow_unescaped_newlines, '${');
                                    }

                                    if (input.hasNext()) {
                                        resulting_string += input.next();
                                    }
                                }
                            }
                        };

                        if (sep === '`') {
                            parse_string('`', true, '${');
                        } else {
                            parse_string(sep);
                        }
                    }

                    if (has_char_escapes && opts.unescape_strings) {
                        resulting_string = unescape_string(resulting_string);
                    }

                    if (input.peek() === sep) {
                        resulting_string += sep;
                        input.next();

                        if (sep === '/') {
                            // regexps may have modifiers /regexp/MOD , so fetch those, too
                            // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
                            while (input.hasNext() && acorn.isIdentifierStart(input.peekCharCode())) {
                                resulting_string += input.next();
                            }
                        }
                    }
                    return [resulting_string, 'TK_STRING'];
                }

                if (c === '#') {

                    if (tokens.length === 0 && input.peek() === '!') {
                        // shebang
                        resulting_string = c;
                        while (input.hasNext() && c !== '\n') {
                            c = input.next();
                            resulting_string += c;
                        }
                        return [trim(resulting_string) + '\n', 'TK_UNKNOWN'];
                    }



                    // Spidermonkey-specific sharp variables for circular references
                    // https://developer.mozilla.org/En/Sharp_variables_in_JavaScript
                    // http://mxr.mozilla.org/mozilla-central/source/js/src/jsscan.cpp around line 1935
                    var sharp = '#';
                    if (input.hasNext() && input.testChar(digit)) {
                        do {
                            c = input.next();
                            sharp += c;
                        } while (input.hasNext() && c !== '#' && c !== '=');
                        if (c === '#') {
                            //
                        } else if (input.peek() === '[' && input.peek(1) === ']') {
                            sharp += '[]';
                            input.next();
                            input.next();
                        } else if (input.peek() === '{' && input.peek(1) === '}') {
                            sharp += '{}';
                            input.next();
                            input.next();
                        }
                        return [sharp, 'TK_WORD'];
                    }
                }

                if (c === '<' && (input.peek() === '?' || input.peek() === '%')) {
                    input.back();
                    var template_match = input.match(template_pattern);
                    if (template_match) {
                        c = template_match[0];
                        c = c.replace(acorn.allLineBreaks, '\n');
                        return [c, 'TK_STRING'];
                    }
                }

                if (c === '<' && input.match(/\!--/g)) {
                    c = '<!--';
                    while (input.hasNext() && !input.testChar(acorn.newline)) {
                        c += input.next();
                    }
                    in_html_comment = true;
                    return [c, 'TK_COMMENT'];
                }

                if (c === '-' && in_html_comment && input.match(/->/g)) {
                    in_html_comment = false;
                    return ['-->', 'TK_COMMENT'];
                }

                if (c === '.') {
                    if (input.peek() === '.' && input.peek(1) === '.') {
                        c += input.next() + input.next();
                        return [c, 'TK_OPERATOR'];
                    }
                    return [c, 'TK_DOT'];
                }

                if (in_array(c, punct)) {
                    while (input.hasNext() && in_array(c + input.peek(), punct)) {
                        c += input.next();
                        if (!input.hasNext()) {
                            break;
                        }
                    }

                    if (c === ',') {
                        return [c, 'TK_COMMA'];
                    } else if (c === '=') {
                        return [c, 'TK_EQUALS'];
                    } else {
                        return [c, 'TK_OPERATOR'];
                    }
                }

                return [c, 'TK_UNKNOWN'];
            }


            function unescape_string(s) {
                // You think that a regex would work for this
                // return s.replace(/\\x([0-9a-f]{2})/gi, function(match, val) {
                //         return String.fromCharCode(parseInt(val, 16));
                //     })
                // However, dealing with '\xff', '\\xff', '\\\xff' makes this more fun.
                var out = '',
                    escaped = 0;

                var input_scan = new InputScanner(s);
                var matched = null;

                while (input_scan.hasNext()) {
                    // Keep any whitespace, non-slash characters
                    // also keep slash pairs.
                    matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);

                    if (matched) {
                        out += matched[0];
                    }

                    if (input_scan.peek() === '\\') {
                        input_scan.next();
                        if (input_scan.peek() === 'x') {
                            matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
                        } else if (input_scan.peek() === 'u') {
                            matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
                        } else {
                            out += '\\';
                            if (input_scan.hasNext()) {
                                out += input_scan.next();
                            }
                            continue;
                        }

                        // If there's some error decoding, return the original string
                        if (!matched) {
                            return s;
                        }

                        escaped = parseInt(matched[1], 16);

                        if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {
                            // we bail out on \x7f..\xff,
                            // leaving whole string escaped,
                            // as it's probably completely binary
                            return s;
                        } else if (escaped >= 0x00 && escaped < 0x20) {
                            // leave 0x00...0x1f escaped
                            out += '\\' + matched[0];
                            continue;
                        } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
                            // single-quote, apostrophe, backslash - escape these
                            out += '\\' + String.fromCharCode(escaped);
                        } else {
                            out += String.fromCharCode(escaped);
                        }
                    }
                }

                return out;
            }
        }

        var beautifier = new Beautifier(js_source_text, options);
        return beautifier.beautify();

    }

    if (typeof define === "function" && define.amd) {
        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
        define([], function() {
            return { js_beautify: js_beautify };
        });
    } else if (typeof exports !== "undefined") {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var js_beautify = require("beautify").js_beautify`.
        exports.js_beautify = js_beautify;
    } else if (typeof window !== "undefined") {
        // If we're running a web page and don't have either of the above, add our one global
        window.js_beautify = js_beautify;
    } else if (typeof global !== "undefined") {
        // If we don't even have window, try global.
        global.js_beautify = js_beautify;
    }

}());
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],40:[function(require,module,exports){
const generateSetupAst = require('../generate/setup-ast-playground');
const generateSetupHtml = require('../generate/setup-html-playground');

const inputElement = document.querySelector('.input');
const resultElement = document.querySelector('.result');
const cheatsheetBody = document.querySelector('.cheatsheet');
const cheatsheetTrigger = document.querySelector('.cheatsheet-trigger');

inputElement.addEventListener('input', (event) => renderSetup(event.target.value));

cheatsheetTrigger.addEventListener('mouseenter', showCheatsheet);
cheatsheetTrigger.addEventListener('focus', showCheatsheet);

cheatsheetTrigger.addEventListener('mouseleave', hideCheatsheet);
cheatsheetTrigger.addEventListener('blur', hideCheatsheet);

function renderSetup (content) {
  let ast = generateSetupAst(content);
  let html = generateSetupHtml(ast);

  resultElement.innerHTML = html;
}

function showCheatsheet () {
  cheatsheetBody.classList.remove('hidden');
}

function hideCheatsheet () {
  cheatsheetBody.classList.add('hidden');
}

renderSetup(inputElement.value);





},{"../generate/setup-ast-playground":1,"../generate/setup-html-playground":2}]},{},[40]);
