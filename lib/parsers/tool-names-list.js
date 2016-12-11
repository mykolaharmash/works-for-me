let Immutable = require('immutable');
let {
  TOOL_NAME_CONTEXT
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let prevLexeme = lexemeList.get(index - 1);
  let prevContent = prevLexeme.get('content');

  return prevContent[prevContent.length - 1] === ',';
}

function createContext () {
  return Immutable.fromJS({
    type: TOOL_NAME_CONTEXT,
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
