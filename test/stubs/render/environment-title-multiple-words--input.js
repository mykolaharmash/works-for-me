const {
  ENVIRONMENT_TITLE_CONTEXT,
  ENV_BULLET_LEXEME,
  ENV_BULLET_TOKEN,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  type: ENVIRONMENT_TITLE_CONTEXT,
  content: [
    { type: ENV_BULLET_LEXEME, content: ENV_BULLET_TOKEN },
    { type: WORD_LEXEME, content: 'Some' },
    { type: WORD_LEXEME, content: 'multiword' },
    { type: WORD_LEXEME, content: 'title' }
  ]
}
