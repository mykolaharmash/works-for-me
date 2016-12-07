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
