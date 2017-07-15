let render = require('./../lib/render')

let setupsListRootRenderer = require('./../lib/renderers/setups-list-root')
let setupsListRenderer = require('./../lib/renderers/setups-list')
let setupsListItemRenderer = require('./../lib/renderers/setups-list-item')
let setupsListBioRenderer = require('./../lib/renderers/setups-list-bio')
let setupsListBioLineRenderer = require('./../lib/renderers/setups-list-bio-line')

const {
  SETUPS_LIST_ROOT_RENDERER_KEY,
  SETUPS_LIST_RENDERER_KEY,
  SETUPS_LIST_ITEM_RENDERER_KEY,
  BIO_RENDERER_KEY,
  BIO_LINE_RENDERER_KEY
} = require('./../lib/constants')

const renderersMap = {
  [SETUPS_LIST_ROOT_RENDERER_KEY]: setupsListRootRenderer,
  [SETUPS_LIST_RENDERER_KEY]: setupsListRenderer,
  [SETUPS_LIST_ITEM_RENDERER_KEY]: setupsListItemRenderer,
  [BIO_RENDERER_KEY]: setupsListBioRenderer,
  [BIO_LINE_RENDERER_KEY]: setupsListBioLineRenderer
}

module.exports = function (tree = {}) {
  return render(tree, renderersMap)
}
