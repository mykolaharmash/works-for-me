let Immutable = require('immutable');

function isContextBreak (tree, lexemeList, lexeme, index) {
   if (index === 0) {
    return true;
  }

  let setupContextIndex = tree.findIndex(context => {
    return context.get('type') === 'setup';
  });

  if (setupContextIndex !== -1) {
    return false;
  }

  let prevLexeme = lexemeList.get(index - 1);
  return prevLexeme.get('type') === 'newline' &&
    lexeme.get('type') === 'env-bullet';
}

function createContext (tree, lexemeList, lexeme, index) {
  let bioContextIndex = tree.findIndex(context => {
    return context.get('type') === 'bio';
  });

  if (bioContextIndex === -1) {
    return Immutable.fromJS({
      type: 'bio',
      content: []
    });
  }

  return Immutable.fromJS({
    type: 'setup',
    content: []
  });
}

function appendTree (tree, lexeme) {
  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(lexeme));
  })
}

module.exports = {
  isContextBreak,
  createContext,
  appendTree
};