const {
  NEWLINE_LEXEME,
  SETUPS_LIST_ITEM_KEY_CONTEXT
} = require('../constants')

let typeRenderersMap = {
  'name:': renderName,
  'occupation:': renderOccupation
}

function isKeyContext (context) {
  return context.get('type') === SETUPS_LIST_ITEM_KEY_CONTEXT
}

function renderName (name, metadata = {}) {
  return `
    <div class="setup-item__name">
      <a class="item-link" href="./setups/${metadata.key}/${metadata.key}.html">
        ${name} 
      </a>
    </div>
  `
}

function renderOccupation (occupation) {
  if (!occupation) {
    return ''
  }

  return `
    <div class="setup-item__occupation">
      ${occupation} 
    </div>
  `
}

function sanitize (content) {
  return content.filter(lexeme => {
    let lexemeType = lexeme.get('type')

    return lexemeType !== NEWLINE_LEXEME &&
      lexemeType !== SETUPS_LIST_ITEM_KEY_CONTEXT
  })
}

function render (content) {
  let keyContext = content.find(isKeyContext)

  if (!content || !content.size || !keyContext) {
    return ''
  }

  let key = keyContext.get('content')
  let sanitizedContent = sanitize(content)
  let lineType = sanitizedContent.first().get('content')
  let typeRenderer = typeRenderersMap[lineType]

  if (!typeRenderer || content.size < 2) {
    return ''
  }

  let contentString = sanitizedContent
    .slice(1)
    .map(lexeme => lexeme.get('content'))
    .join(' ')

  return typeRenderer(contentString, { key })
}

module.exports = {
  render
}
