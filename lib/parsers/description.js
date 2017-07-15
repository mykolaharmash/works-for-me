let Immutable = require('immutable')
const {
  NEWLINE_LEXEME,
  DESCRIPTION_PARAGRAPH_CONTEXT,
  IMAGE_CONTEXT,
  IMAGE_BULLET_LEXEME
} = require('../constants')

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0 && lexeme.get('type') !== NEWLINE_LEXEME) {
    return true
  }

  let prevLexeme = lexemeList.get(index - 1)

  return (
    prevLexeme.get('type') === NEWLINE_LEXEME &&
    lexeme.get('type') !== NEWLINE_LEXEME
  )
}

function createContext (tree, lexemeList, lexeme, index) {
  if (lexeme.get('type') === IMAGE_BULLET_LEXEME) {
    return Immutable.fromJS({
      type: IMAGE_CONTEXT,
      content: []
    })
  }

  return Immutable.fromJS({
    type: DESCRIPTION_PARAGRAPH_CONTEXT,
    content: []
  })
}

function appendTree (tree, lexeme) {
  let currentContext = tree.get(tree.size - 1)

  if (lexeme.get('type') === NEWLINE_LEXEME) {
    return tree
  }

  if (
    currentContext.get('type') === IMAGE_CONTEXT &&
    currentContext.get('content').size === 0 &&
    lexeme.get('type') === IMAGE_BULLET_LEXEME
  ) {
    return tree
  }

  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(lexeme))
  })
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
}
