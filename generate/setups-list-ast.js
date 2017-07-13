const Immutable = require('immutable')
const {
  BIO_CONTEXT,
  BODY_CONTEXT,
  SETUPS_LIST_ITEM_CONTEXT,
  SETUPS_LIST_ITEM_KEY_CONTEXT,
  SETUPS_LIST_ROOT_CONTEXT,
  SETUPS_LIST_CONTEXT,
  SETUP_UPDATE_DATE_CONTEXT,
  SETUP_CREATE_DATE_CONTEXT
} = require('../lib/constants')

function findBioContext (setupAst) {
  let bodyContext = setupAst
    .get('content') // AST content
    .get('content') // root-context content
    .find(context => context.get('type') === BODY_CONTEXT)

  if (!bodyContext) {
    return
  }

  return bodyContext
    .get('content')
    .find(context => context.get('type') === BIO_CONTEXT)
}

function generateMetadataContexts (key, metadata) {
  let contextsList = []

  if (key) {
    contextsList.push({
      type: SETUPS_LIST_ITEM_KEY_CONTEXT,
      content: key
    })
  }

  if (!metadata) {
    return contextsList
  }

  if (metadata.updates.length) {
    contextsList.push({
      type: SETUP_UPDATE_DATE_CONTEXT,
      content: metadata.updates[0].date
    })
  } else {
    contextsList.push({
      type: SETUP_CREATE_DATE_CONTEXT,
      content: metadata.initial.date
    })
  }

  return contextsList
}

function generateSetupListItem (setupAst, setupMetadata) {
  let bio = findBioContext(setupAst)
  let key = setupAst.get('name')
  let content = []

  let metadataContexts = generateMetadataContexts(key, setupMetadata)

  content = content.concat(metadataContexts)
  content.push(bio)

  return Immutable.fromJS({
    type: SETUPS_LIST_ITEM_CONTEXT,
    content
  })
}

function findDateContext (tree) {
  return tree.get('content').find((context) => {
    return context.get('type') === SETUP_CREATE_DATE_CONTEXT
      || context.get('type') === SETUP_UPDATE_DATE_CONTEXT
  })
}

function sortByDate (a, b) {
  let aDateContext = findDateContext(a)
  let bDateContext = findDateContext(b)

  return Date.parse(aDateContext.get('content')) < Date.parse(bDateContext.get('content'))
}

function generate (setupsAstList = [], setupsMetadataList = []) {
  let setupsListItems = Immutable.fromJS(setupsAstList)
    .filter(setupAst => {
      return findBioContext(setupAst) !== undefined
    })
    .map((setupAst, index) => {
      return generateSetupListItem(setupAst, setupsMetadataList[index])
    })
    .sort(sortByDate)

  return {
    type: SETUPS_LIST_ROOT_CONTEXT,
    content: [
      {
        type: SETUPS_LIST_CONTEXT,
        content: setupsListItems.toJS()
      }
    ]
  }
}

module.exports = generate
