const TOOL_BULLET = '>';
const ENV_BULLET = '--';
const COMMENT_BULLET = '//';

const {
  TOOL_BULLET_TOKEN,
  ENV_BULLET_TOKEN,
  COMMENT_BULLET_TOKEN,
  NEWLINE_TOKEN,
  RETURN_NEWLINE_TOKEN,
  TOOL_BULLET_LEXEME,
  ENV_BULLET_LEXEME,
  COMMENT_BULLET_LEXEME,
  NEWLINE_LEXEME,
  WORD_LEXEME
} = require('./constants');

let toolBullet = content => ({ type: TOOL_BULLET_LEXEME, content });
let envBullet = content => ({ type: ENV_BULLET_LEXEME, content });
let commentBullet = content => ({ type: COMMENT_BULLET_LEXEME, content });
let newline = content => ({ type: NEWLINE_LEXEME, content });
let word = content => ({ type: WORD_LEXEME, content });

let lexemesMap = {
  [TOOL_BULLET_TOKEN]: toolBullet,
  [ENV_BULLET_TOKEN]: envBullet,
  [COMMENT_BULLET_TOKEN]: commentBullet,
  [NEWLINE_TOKEN]: newline,
  [RETURN_NEWLINE_TOKEN]: newline,
  word,
};

module.exports = function lex (tokens) {
  let lexemes = tokens.map(token => {
    if (lexemesMap[token]) {
      return lexemesMap[token](token);
    }

    return lexemesMap.word(token);
  });

  return lexemes;
};
