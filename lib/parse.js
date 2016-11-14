let Immutable = require('immutable');

function parse (lexemes, parser) {
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

module.exports = function (lexemes = [], parsers = []) {
  let tree = Immutable.fromJS(lexemes);

  parsers.forEach(parser => {
    tree = parse(tree, parser);
  });

  return tree.toJS();
};