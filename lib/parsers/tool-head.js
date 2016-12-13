let Immutable = require('immutable');
let {
  TOOL_PURPOSE_CONTEXT,
  TOOL_NAMES_LIST_CONTEXT,
  PURPOSE_SEPARATOR_TOKEN
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let prevLexeme = lexemeList.get(index - 1);
  let prevContent = prevLexeme.get('content');

  return prevContent[prevContent.length - 1] === PURPOSE_SEPARATOR_TOKEN;
}

function createContext (tree, lexemeList, lexeme, index) {
  let purposeContextIndex = tree.findIndex(context => {
    return context.get('type') === TOOL_PURPOSE_CONTEXT;
  });

  if (purposeContextIndex === -1) {
    return Immutable.fromJS({
      type: TOOL_PURPOSE_CONTEXT,
      content: []
    });
  }

  return Immutable.fromJS({
    type: TOOL_NAMES_LIST_CONTEXT,
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
