let Immutable = require('immutable');

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true;
  }

  let prevLexeme = lexemeList.get(index - 1);

  return prevLexeme.get('type') === 'newline' &&
    lexeme.get('type') === 'env-bullet';
}

function createContext (tree, lexemeList, lexeme, index) {
  return Immutable.fromJS({
    type: 'environment',
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
