const {
  WORD_LEXEME
} = require('../constants');

function render (content = []) {
  return content
    .map((context, index) => {
      let prevContext = content.get(index - 1);
      let word = context.get('content');

      if (index === 0 || context.get('type') !== WORD_LEXEME ) {
        return word;
      }

      if (prevContext.get('type') === WORD_LEXEME) {
        return ` ${word}`;
      } else {
        return word;
      }
    })
    .join('');
}

module.exports = {
  render
};
