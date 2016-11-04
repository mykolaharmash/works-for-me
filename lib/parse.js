function globalParser (lexemes) {
  let tree = [];

  let currentContext = {
    type: 'global',
    content: []
  };
  let hasSetup = false;

  tree.push(currentContext);

  lexemes.forEach((lexeme, index) => {
    let contextCanChange = index === 0 ||
      lexemes[index - 1].type === 'newline';

    if (!contextCanChange) {
      currentContext.content.push(lexeme);

      return;
    }

    if (lexeme.type === 'env-bullet') {
      hasSetup = true;
      currentContext = {
        type: 'setup',
        content: []
      };

      tree.push(currentContext);

      return;
    }

    if (lexeme.type === 'word' && !hasSetup) {
      currentContext = {
        type: 'bio',
        content: [lexeme]
      }
      tree.push(currentContext);

      return;
    }

    currentContext.content.push(lexeme);
  });

  return tree;
}

module.exports = function parse (lexemes) {
  let tree = globalParser(lexemes);

  return tree;
};