let Immutable = require('immutable')

function parseContextContent (lexemes, parser) {
  let tree = Immutable.List([])

  lexemes.forEach((lexeme, index) => {
    let contextStart = parser.isContextStart(tree, lexemes, lexeme, index)

    if (contextStart) {
      let context = parser.createContext(tree, lexemes, lexeme, index)
      tree = tree.push(context)
    }

    if (tree.size > 0) {
      tree = parser.appendTree(tree, lexeme)
    }
  })

  return tree
}

function parse (context, parsersMap) {
  let parser = parsersMap[`parser-${context.get('type')}`]

  if (!parser) {
    return context
  }

  let parsedContext = context.update('content', content => {
    return parseContextContent(content, parser)
  })

  return parsedContext.update('content', content => {
    return content.map(context => {
      return parse(context, parsersMap)
    })
  })
}

module.exports = function (context = {}, parsersMap = {}) {
  let tree = parse(context, parsersMap)

  return tree.toJS()
}
