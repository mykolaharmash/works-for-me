let Immutable = require('immutable');
const {
  PLAIN_TEXT_CONTEXT
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }
}

function createContext (tree, lexemeList, lexeme, index) {
  return Immutable.fromJS({
    type: PLAIN_TEXT_CONTEXT,
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
