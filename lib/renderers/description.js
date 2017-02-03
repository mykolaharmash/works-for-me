const { WORD_LEXEME } = require('../constants.js');

function getContentString (tree) {
  return tree
    .map((lexeme, index) => {
      let prevLexeme = tree.get(index - 1);
      let word = lexeme.get('content');

      if (index === 0 || lexeme.get('type') !== WORD_LEXEME ) {
        return word;
      }

      if (prevLexeme.get('type') === WORD_LEXEME) {
        return ` ${word}`;
      } else {
        return word;
      }
    })
    .join('');
}

function render (tree = []) {
  let contentString = getContentString(tree);

  return `
    <div class="description">
      ${contentString}
    </div>
  `;
}

module.exports = {
  render
};
