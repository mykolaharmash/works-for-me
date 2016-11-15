let Immutable = require('immutable');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let prevLexeme = lexemeList.get(index - 1);

  return prevLexeme.get('type') === 'newline';
}

function createContext (tree, lexemeList, lexeme, index) {
  if (lexeme.get('type') === 'word') {
    return Immutable.fromJS({
      type: 'bio-line',
      content: []
    });
  }

  if (lexeme.get('type') === 'comment-bullet') {
    return Immutable.fromJS({
      type: 'comment-line',
      content: []
    });
  }

  return Immutable.fromJS({
    type: 'plain',
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
