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
