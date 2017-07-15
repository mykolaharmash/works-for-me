const {
  SPACE_TOKEN,
  TAB_TOKEN,
  NEWLINE_TOKEN,
  RETURN_NEWLINE_TOKEN
} = require('./constants')

const TOKEN_SEPARATORS = [SPACE_TOKEN, TAB_TOKEN]
const LINE_SEPARATORS = [NEWLINE_TOKEN, RETURN_NEWLINE_TOKEN]

function tokenize (chars) {
  let tokens = []
  let token = ''

  chars.forEach((char, index) => {
    if (
      !TOKEN_SEPARATORS.includes(char) &&
      !LINE_SEPARATORS.includes(char)
    ) {
      token += char
    }

    if (
      (TOKEN_SEPARATORS.includes(char) ||
      LINE_SEPARATORS.includes(char) ||
      index === chars.length - 1) &&
      token
    ) {
      tokens.push(token)
      token = ''
    }

    if (LINE_SEPARATORS.includes(char)) {
      tokens.push(char)
    }
  })

  return tokens
}

module.exports = tokenize
