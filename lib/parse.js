let Immutable = require('immutable');

function pushToContext (tree, index, lexeme) {
  if (index === undefined) {
    throw new Error('Unable to puh ito context. No active context exist.');
  }

  return tree.update(index, context => {
    return context.update('content', content => content.push(lexeme));
  });
}

function createContext (tree, type) {
  let hasSetup = tree.some(context => context.get('type') === 'setup');

  if (type === 'word' && !hasSetup) {
    return Immutable.fromJS({
      type: 'bio',
      content: []
    })
  }

  if (type === 'env-bullet') {
    return Immutable.fromJS({
      type: 'setup',
      content: []
    });
  }

  return Immutable.fromJS({
    type: 'text',
    content: []
  });
}

function globalParser (lexemes) {
  let tree = Immutable.List([]);
  let activeContext;

  lexemes.forEach((lexeme, index) => {
    let activeIndex;
    let newContext;

    if (lexeme.type === 'newline') {
      activeContext = undefined;
      return;
    };

    if (activeContext === undefined) {
      newContext = createContext(tree, lexeme.type);
      tree = tree.push(newContext);
      activeContext = tree.size - 1;
    }

    tree = pushToContext(tree, activeContext, lexeme);
  });

  return tree;
}

module.exports = function parse (lexemes) {
  let tree = globalParser(lexemes);

  return tree.toJS();
};