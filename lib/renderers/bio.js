const Immutable = require('immutable')
const {
  DESCRIPTION_CONTEXT
} = require('../constants')

function filterInterlineDescriptions (content) {
  return content.filter((context, index) => {
    return (
      context.get('type') !== DESCRIPTION_CONTEXT ||
      index === content.size - 1
    )
  })
}

function findBioContexts (content) {
  return content.filter((context) => context.get('type') !== DESCRIPTION_CONTEXT)
}

function findDescriptions (content) {
  return content.filter((context) => context.get('type') === DESCRIPTION_CONTEXT)
}

function render (content = Immutable.List()) {
  let sanitizedContent = filterInterlineDescriptions(content)
  let bioContexts = findBioContexts(sanitizedContent)
  let descriptionContexts = findDescriptions(sanitizedContent)

  let bioString = bioContexts
    .map(context => context.get('content'))
    .join('')
  let descriptionString = ''

  if (descriptionContexts.size > 0) {
    descriptionString = descriptionContexts
      .get(descriptionContexts.size - 1)
      .get('content')
  }

  return `
    <section class="bio">
      ${bioString}
    </section>
    
    ${descriptionString}
  `
}

module.exports = {
  render
}
