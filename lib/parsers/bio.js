let Immutable = require('immutable');
const {
  BIO_LINE_CONTEXT,
  COMMENT_LINE_CONTEXT,
  PLAIN_TEXT_CONTEXT,
  WORD_LEXEME,
  COMMENT_BULLET_LEXEME,
  NEWLINE_LEXEME
} = require('../constants');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let prevLexeme = lexemeList.get(index - 1);

  return prevLexeme.get('type') === NEWLINE_LEXEME;
}

function createContext (tree, lexemeList, lexeme, index) {
  if (lexeme.get('type') === WORD_LEXEME) {
    return Immutable.fromJS({
      type: BIO_LINE_CONTEXT,
      content: []
    });
  }

  if (lexeme.get('type') === COMMENT_BULLET_LEXEME) {
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
};
