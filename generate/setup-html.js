let render = require('./../lib/render')

let rootRenderer = require('./../lib/renderers/root')
let headRenderer = require('./../lib/renderers/head')
let bodyRenderer = require('./../lib/renderers/body')
let bioRenderer = require('./../lib/renderers/bio')
let bioLineRenderer = require('./../lib/renderers/bio-line')
let setupRenderer = require('./../lib/renderers/setup')
let environmentRenderer = require('./../lib/renderers/environment')
let descriptionRenderer = require('./../lib/renderers/description')
let environmentHeaderRenderer = require('./../lib/renderers/environment-header')
let environmentTitleRenderer = require('./../lib/renderers/environment-title')
let toolsListRenderer = require('./../lib/renderers/tools-list')
let toolItemRenderer = require('./../lib/renderers/tool-item')
let toolHeadRenderer = require('./../lib/renderers/tool-head')
let toolNamesListRenderer = require('./../lib/renderers/tool-names-list')
let toolNameRenderer = require('./../lib/renderers/tool-name')
let toolTitleRenderer = require('./../lib/renderers/tool-title')
let toolLinkRenderer = require('./../lib/renderers/tool-link')
let setupLatestUpdateRenderer = require('./../lib/renderers/latest-update')
let descriptionParagraphRenderer = require('./../lib/renderers/description-paragraph')
let descriptionLinkRenderer = require('./../lib/renderers/description-link')
let descriptionLinkTitleRenderer = require('./../lib/renderers/description-link-title')
let descriptionLinkUrlRenderer = require('./../lib/renderers/description-link-url')
let descriptionTextRenderer = require('./../lib/renderers/description-text')
let imageRenderer = require('./../lib/renderers/image')
let imageTitleRenderer = require('./../lib/renderers/image-title')
let imageUrlRenderer = require('./../lib/renderers/image-url')

const {
  ROOT_RENDERER_KEY,
  HEAD_RENDERER_KEY,
  BODY_RENDERER_KEY,
  BIO_RENDERER_KEY,
  BIO_LINE_RENDERER_KEY,
  SETUP_RENDERER_KEY,
  ENVIRONMENT_RENDERER_KEY,
  DESCRIPTION_RENDERER_KEY,
  ENVIRONMENT_HEADER_RENDERER_KEY,
  ENVIRONMENT_TITLE_RENDERER_KEY,
  TOOLS_LIST_RENDERER_KEY,
  TOOL_ITEM_RENDERER_KEY,
  TOOL_HEAD_RENDERER_KEY,
  TOOL_NAMES_LIST_RENDERER_KEY,
  TOOL_NAME_RENDERER_KEY,
  TOOL_TITLE_RENDERER_KEY,
  TOOL_LINK_RENDERER_KEY,
  SETUP_LATEST_UPDATE_RENDERER_KEY,
  DESCRIPTION_PARAGRAPH_RENDERER_KEY,
  DESCRIPTION_LINK_RENDERER_KEY,
  DESCRIPTION_LINK_TITLE_RENDERER_KEY,
  DESCRIPTION_LINK_URL_RENDERER_KEY,
  DESCRIPTION_TEXT_RENDERER_KEY,
  IMAGE_RENDERER_KEY,
  IMAGE_TITLE_RENDERER_KEY,
  IMAGE_URL_RENDERER_KEY
} = require('./../lib/constants')

const renderersMap = {
  [ROOT_RENDERER_KEY]: rootRenderer,
  [HEAD_RENDERER_KEY]: headRenderer,
  [BODY_RENDERER_KEY]: bodyRenderer,
  [BIO_RENDERER_KEY]: bioRenderer,
  [BIO_LINE_RENDERER_KEY]: bioLineRenderer,
  [SETUP_RENDERER_KEY]: setupRenderer,
  [ENVIRONMENT_RENDERER_KEY]: environmentRenderer,
  [DESCRIPTION_RENDERER_KEY]: descriptionRenderer,
  [ENVIRONMENT_HEADER_RENDERER_KEY]: environmentHeaderRenderer,
  [ENVIRONMENT_TITLE_RENDERER_KEY]: environmentTitleRenderer,
  [TOOLS_LIST_RENDERER_KEY]: toolsListRenderer,
  [TOOL_ITEM_RENDERER_KEY]: toolItemRenderer,
  [TOOL_HEAD_RENDERER_KEY]: toolHeadRenderer,
  [TOOL_NAMES_LIST_RENDERER_KEY]: toolNamesListRenderer,
  [TOOL_NAME_RENDERER_KEY]: toolNameRenderer,
  [TOOL_TITLE_RENDERER_KEY]: toolTitleRenderer,
  [TOOL_LINK_RENDERER_KEY]: toolLinkRenderer,
  [SETUP_LATEST_UPDATE_RENDERER_KEY]: setupLatestUpdateRenderer,
  [DESCRIPTION_PARAGRAPH_RENDERER_KEY]: descriptionParagraphRenderer,
  [DESCRIPTION_LINK_RENDERER_KEY]: descriptionLinkRenderer,
  [DESCRIPTION_LINK_TITLE_RENDERER_KEY]: descriptionLinkTitleRenderer,
  [DESCRIPTION_LINK_URL_RENDERER_KEY]: descriptionLinkUrlRenderer,
  [DESCRIPTION_TEXT_RENDERER_KEY]: descriptionTextRenderer,
  [IMAGE_RENDERER_KEY]: imageRenderer,
  [IMAGE_TITLE_RENDERER_KEY]: imageTitleRenderer,
  [IMAGE_URL_RENDERER_KEY]: imageUrlRenderer
}

module.exports = function (tree = {}) {
  return render(tree, renderersMap)
}
