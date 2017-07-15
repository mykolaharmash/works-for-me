let Immutable = require('immutable')
let {
  TOOL_NAME_CONTEXT,
  TOOL_NAMES_SEPARATOR_TOKEN,
  NEWLINE_LEXEME
} = require('../constants')

function hasSeparator (content) {
  return content[content.length - 1] === TOOL_NAMES_SEPARATOR_TOKEN
}

function stripSeparator (content) {
  if (!hasSeparator(content)) {
    return content
  }

  return content.split('').slice(0, -1).join('')
}

function isContextStart (tree, lexemeList, lexeme, index) {
  if (index === 0) {
    return true
  }

  let prevLexeme = lexemeList.get(index - 1)
  let prevContent = prevLexeme.get('content')

  return hasSeparator(prevContent)
}

function createContext () {
  return Immutable.fromJS({
    type: TOOL_NAME_CONTEXT,
    content: []
  })
}

function appendTree (tree, lexeme) {
  if (lexeme.get('type') === NEWLINE_LEXEME) {
    return tree
  }

  let strippedLexeme = lexeme.update('content', content => {
    return stripSeparator(content)
  })

  return tree.update(tree.size - 1, context => {
    return context.update('content', content => content.push(strippedLexeme))
  })
}

module.exports = {
  isContextStart,
  createContext,
  appendTree
}
