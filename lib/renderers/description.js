const Immutable = require('immutable');
const {
  WORD_LEXEME,
  NEWLINE_LEXEME
} = require('../constants.js');

function sanitizeSurroundingNewlines (tree) {
  let startIndex = tree.findIndex(lexeme => lexeme.get('type') !== NEWLINE_LEXEME);
  let lastIndex = tree.findLastIndex(lexeme => lexeme.get('type') !== NEWLINE_LEXEME);

  if (startIndex === -1) {
    return new Immutable.List();
  }

  return tree.slice(startIndex, lastIndex + 1);
}

function sanitize (tree) {
  return sanitizeSurroundingNewlines(tree);
}

function getContentString (tree) {
  return tree
    .map((lexeme, index) => {
      let prevLexeme = tree.get(index - 1);
      let word = lexeme.get('content');

      if (index === 0 || lexeme.get('type') !== WORD_LEXEME) {
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
  let sanitizedTree = sanitize(tree);

  if (sanitizedTree.size === 0)  {
    return '';
  }

  let contentString = getContentString(sanitizedTree);

  return `
    <div class="description">
      ${contentString}
    </div>
  `;
}

module.exports = {
  render
};
