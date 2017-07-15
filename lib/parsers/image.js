let Immutable = require('immutable')

const {
  IMAGE_TITLE_CONTEXT,
  IMAGE_URL_CONTEXT
} = require('../constants')

function isUrlStart (lexeme) {
  const EXTERNAL_PATTERN = /^\(https?:\/\/.+?/
  const LOCAL_PATTERN = /^\(\.\/.+?/

  let content = lexeme.get('content')

  return (
    EXTERNAL_PATTERN.test(content) ||
    LOCAL_PATTERN.test(content)
  )
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

  if (currentContext.get('type') === IMAGE_URL_CONTEXT) {
    return isUrlEnd(prevLexeme)
  } else {
    return isUrlStart(lexeme)
  }
}

function createContext (tree, lexemeList, lexeme, index) {
  let urlStart = isUrlStart(lexeme)

  if (urlStart) {
    return Immutable.fromJS({
      type: IMAGE_URL_CONTEXT,
      content: []
    })
  }

  return Immutable.fromJS({
    type: IMAGE_TITLE_CONTEXT,
    content: []
  })
}

function appendTree (tree, lexeme) {
  let currentContext = tree.get(tree.size - 1)
  let strippedLexeme = lexeme

  if (currentContext.get('type') === IMAGE_URL_CONTEXT) {
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
