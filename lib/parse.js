let Immutable = require('immutable');

const GLOBAL_PARSER_KEY = 'global';

function parseContext (lexemes, parser) {
  let tree = Immutable.List([]);

  lexemes.forEach((lexeme, index) => {
    let contextBreak = parser.isContextBreak(tree, lexemes, lexeme, index);

    if (contextBreak) {
      let context = parser.createContext(tree, lexemes, lexeme, index);
      tree = tree.push(context);
    }

    tree = parser.appendTree(tree, lexeme);
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
      return parse(content, parsersMap, context.type);
    });
  });
}

module.exports = function (lexemes = [], parsersMap = {}) {
  let tree = Immutable.fromJS(lexemes);

  tree = parse(tree, parsersMap, GLOBAL_PARSER_KEY);

  return tree.toJS();
};
