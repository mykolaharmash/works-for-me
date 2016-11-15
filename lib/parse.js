let Immutable = require('immutable');

const { GLOBAL_PARSER_KEY } = require('./constants');

function parseContext (lexemes, parser) {
  let tree = Immutable.List([]);

  lexemes.forEach((lexeme, index) => {
    let contextStart = parser.isContextStart(tree, lexemes, lexeme, index);

    if (contextStart) {
      let context = parser.createContext(tree, lexemes, lexeme, index);
      tree = tree.push(context);
    }

    if (tree.size > 0) {
      tree = parser.appendTree(tree, lexeme);
    }
  });

  return tree;
}

function parse (lexemes, parsersMap, contextType) {
  let parser = parsersMap[contextType];

  if (!parser) {
    return lexemes;
  }

  let tree = parseContext(lexemes, parser);

  return tree.map(context => {
    return context.update('content', content => {
      return parse(content, parsersMap, `parser-${context.get('type')}`);
    });
  });
}

module.exports = function (lexemes = [], parsersMap = {}) {
  let tree = Immutable.fromJS(lexemes);

  tree = parse(tree, parsersMap, GLOBAL_PARSER_KEY);

  return tree.toJS();
};
