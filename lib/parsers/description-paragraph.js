// some text <link title (http://link.url)> another text
// some text <quoted text> another text
// <link title (http://link.url)> another text
// some text <link title (http://link.url)>
// some text <(http://link.url)> another text
// some text <link <with brackets> title (http://link.url)>

/*
{
  content: [
    { type: 'paragraph-text', content: 'some text' },
    { type: 'paragraph-interactive', content: '"link title" (http://link.url)' },
    { type: 'paragraph-text', content: 'another text' }
  ]
}
*/

let Immutable = require('immutable')
const {
  NEWLINE_LEXEME,
  DESCRIPTION_PARAGRAPH_CONTEXT
} = require('../constants')

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

  if (currentContext.get('type') === 'description-link') {
    return isLinkEnd(prevLexeme)
  } else {
    return isLinkStart(lexeme)
  }
}

function createContext (tree, lexemeList, lexeme, index) {
  let interactiveStart = isLinkStart(lexeme)

  if (interactiveStart) {
   return Immutable.fromJS({
      type: 'description-link',
      content: []
    })
  }

  return Immutable.fromJS({
    type: 'description-text',
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
