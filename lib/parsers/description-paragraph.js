let Immutable = require('immutable')

const {
  DESCRIPTION_TEXT_CONTEXT,
  DESCRIPTION_LINK_CONTEXT
} = require('../constants')

function stripCorners (lexeme) {
  const PATTERN = /^<|>$/g

  return lexeme.update('content', (content) => {
    return content.replace(PATTERN, '')
  })
}

function isLinkStart (lexeme) {
  const PATTERN = /^</

  return PATTERN.test(lexeme.get('content'))
}

function isLinkEnd (lexeme) {
  const PATTERN = />$/

  return PATTERN.test(lexeme.get('content'))
}

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true
  }

  let currentContext = tree.get(tree.size - 1)
  let prevLexeme = lexemeList.get(index - 1)

  if (currentContext.get('type') === DESCRIPTION_LINK_CONTEXT) {
    return isLinkEnd(prevLexeme)
  } else {
    return isLinkStart(lexeme)
  }
}

function createContext (tree, lexemeList, lexeme, index) {
  let linkStart = isLinkStart(lexeme)

  if (linkStart) {
   return Immutable.fromJS({
      type: DESCRIPTION_LINK_CONTEXT,
      content: []
    })
  }

  return Immutable.fromJS({
    type: DESCRIPTION_TEXT_CONTEXT,
    content: []
  })
}

function appendTree (tree, lexeme) {
  let strippedLexeme = stripCorners(lexeme)

  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(strippedLexeme))
  })
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
}
