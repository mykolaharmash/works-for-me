let Immutable = require('immutable')

const {
  DESCRIPTION_LINK_URL_CONTEXT,
  DESCRIPTION_LINK_TITLE_CONTEXT
} = require('../constants')

function isUrlStart (lexeme) {
  const PATTERN = /^\(https?:\/\/.+?/

  return PATTERN.test(lexeme.get('content'))
}

function isUrlEnd (lexeme) {
  const PATTERN = /\)$/

  return PATTERN.test(lexeme.get('content'))
}

function stripParentheses (lexeme) {
  const PATTERN = /^\(|\)$/g

  return lexeme.update('content', (content) => {
    return content.replace(PATTERN, '')
  })
}

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true
  }

  let currentContext = tree.get(tree.size - 1)
  let prevLexeme = lexemeList.get(index - 1)

  if (currentContext.get('type') === DESCRIPTION_LINK_URL_CONTEXT) {
    return isUrlEnd(prevLexeme)
  } else {
    return isUrlStart(lexeme)
  }
}

function createContext (tree, lexemeList, lexeme, index) {
  let urlStart = isUrlStart(lexeme)

  if (urlStart) {
    return Immutable.fromJS({
      type: DESCRIPTION_LINK_URL_CONTEXT,
      content: []
    })
  }

  return Immutable.fromJS({
    type: DESCRIPTION_LINK_TITLE_CONTEXT,
    content: []
  })
}

function appendTree (tree, lexeme) {
  let currentContext = tree.get(tree.size - 1)
  let strippedLexeme = lexeme

  if (currentContext.get('type') === DESCRIPTION_LINK_URL_CONTEXT) {
    strippedLexeme = stripParentheses(lexeme)
  }

  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(strippedLexeme))
  })
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
}
