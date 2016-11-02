const TOKEN_SEPARATORS = [' ', '\t'];
const LINE_SEPARATORS = ['\n', '\r\n'];

function tokenize (chars) {
  let tokens = [];
  let token = '';

  chars.forEach((char, index) => {
    if (
      !TOKEN_SEPARATORS.includes(char) &&
      !LINE_SEPARATORS.includes(char)
    ) {
      token += char;
    }

    if (
      (TOKEN_SEPARATORS.includes(char) ||
      LINE_SEPARATORS.includes(char) ||
      index === chars.length - 1) &&
      token
    ) {
      tokens.push(token);
      token = '';
    }

    if (LINE_SEPARATORS.includes(char)) {
      tokens.push(char);
    }
  });

  return tokens;
}

module.exports = tokenize;