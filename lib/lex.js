const TOOL_BULLET = '>';
const ENV_BULLET = '--';
const COMMENT_BULLET = '//';

let toolBullet = content => ({ type: 'tool-bullet', content });
let envBullet = content => ({ type: 'env-bullet', content });
let commentBullet = content => ({ type: 'comment-bullet', content });
let newline = content => ({ type: 'newline', content });
let word = content => ({ type: 'word', content });

let lexemesMap = {
  [TOOL_BULLET]: toolBullet,
  [ENV_BULLET]: envBullet,
  [COMMENT_BULLET]: commentBullet,
  '\n': newline,
  '\r\n': newline,
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