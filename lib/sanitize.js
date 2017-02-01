const {
  COMMENT_BULLET_LEXEME,
  NEWLINE_LEXEME
} = require('./constants');

function isCommentStart (lexemes, lexeme, index) {
  return (index === 0 || lexemes[index - 1].type === NEWLINE_LEXEME) &&
    lexeme.type === COMMENT_BULLET_LEXEME;
}

function isCommentEnd (lexemes, index) {
  return index !== 0 && lexemes[index - 1].type === NEWLINE_LEXEME;
}

function clearComments (lexemes) {
  let withinComment = false;

  return lexemes.reduce((clearedLexemes, lexeme, index) => {
    withinComment = withinComment && !isCommentEnd(lexemes, index) ||
      isCommentStart(lexemes, lexeme, index);

    if (!withinComment) {
      clearedLexemes.push(lexeme);
    }

    return clearedLexemes;
  }, []);
}

module.exports = function sanitize (lexemes) {
  return clearComments(lexemes);
};

