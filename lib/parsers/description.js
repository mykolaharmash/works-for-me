let Immutable = require('immutable');
const {
  NEWLINE_LEXEME,
  COMMENT_BULLET_LEXEME,
  COMMENT_LINE_CONTEXT,
  PLAIN_TEXT_CONTEXT
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let currentContext = tree.get(tree.size - 1);
  let prevLexeme = lexemeList.get(index - 1);

  return prevLexeme.get('type') === NEWLINE_LEXEME &&
    (currentContext.get('type') === COMMENT_LINE_CONTEXT ||
    lexeme.get('type') === COMMENT_BULLET_LEXEME);
}

function createContext (tree, lexemeList, lexeme, index) {
  let lexemeType = lexeme.get('type');

  if (lexemeType === COMMENT_BULLET_LEXEME) {
    return Immutable.fromJS({
      type: COMMENT_LINE_CONTEXT,
      content: []
    });
  }

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
