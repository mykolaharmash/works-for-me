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
