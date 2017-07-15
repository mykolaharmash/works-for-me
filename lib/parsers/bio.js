let Immutable = require('immutable')
const {
  BIO_LINE_CONTEXT,
  NEWLINE_LEXEME,
  DESCRIPTION_CONTEXT,
  BIO_LINE_TYPE_NAME_TOKEN,
  BIO_LINE_TYPE_OCCUPATION_TOKEN,
  BIO_LINE_TYPE_LOCATION_TOKEN,
  BIO_LINE_TYPE_LINK_TOKEN
} = require('../constants')

const BIO_LINE_TYPES = [
  BIO_LINE_TYPE_NAME_TOKEN,
  BIO_LINE_TYPE_OCCUPATION_TOKEN,
  BIO_LINE_TYPE_LOCATION_TOKEN,
  BIO_LINE_TYPE_LINK_TOKEN
]

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true
  }

  let currentContext = tree.get(tree.size - 1)
  let prevLexeme = lexemeList.get(index - 1)

  if (prevLexeme.get('type') !== NEWLINE_LEXEME) {
    return false
  }

  if (BIO_LINE_TYPES.includes(lexeme.get('content'))) {
    return true
  }

  return currentContext.get('type') !== DESCRIPTION_CONTEXT
}

function createContext (tree, lexemeList, lexeme, index) {
  if (BIO_LINE_TYPES.includes(lexeme.get('content'))) {
    return Immutable.fromJS({
      type: BIO_LINE_CONTEXT,
      content: []
    })
  }

  return Immutable.fromJS({
    type: DESCRIPTION_CONTEXT,
    content: []
  })
}

function appendTree (tree, lexeme) {
  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(lexeme))
  })
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
}
