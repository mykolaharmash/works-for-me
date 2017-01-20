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
