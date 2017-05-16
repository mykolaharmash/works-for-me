const render = require('../lib/render');
const rssRenderer = require('../lib/renderers/rss');
const rssItemRenderer = require('../lib/renderers/rss-item');
const rssItemTitleRenderer = require('../lib/renderers/rss-item-title');
const rssItemDescriptionRenderer = require('../lib/renderers/rss-item-description');
const rssItemLinkRenderer = require('../lib/renderers/rss-item-link');
const conciseBioRenderer = require('../lib/renderers/concise-bio');
const conciseBioLineRenderer = require('../lib/renderers/concise-bio-line');
const rssItemAuthorRenderer = require('../lib/renderers/rss-item-author');

const {
  RSS_RENDERER_KEY,
  RSS_ITEM_RENDERER_KEY,
  RSS_ITEM_TITLE_RENDERER_KEY,
  RSS_ITEM_DESCRIPTION_RENDERER_KEY,
  RSS_ITEM_LINK_RENDERER_KEY,
  BIO_RENDERER_KEY,
  BIO_LINE_RENDERER_KEY,
  RSS_ITEM_AUTHOR_RENDERER_KEY
} = require('../lib/constants');

const renderersMap = {
  [RSS_RENDERER_KEY]: rssRenderer,
  [RSS_ITEM_RENDERER_KEY]: rssItemRenderer,
  [RSS_ITEM_TITLE_RENDERER_KEY]: rssItemTitleRenderer,
  [RSS_ITEM_DESCRIPTION_RENDERER_KEY]: rssItemDescriptionRenderer,
  [RSS_ITEM_LINK_RENDERER_KEY]: rssItemLinkRenderer,
  [BIO_RENDERER_KEY]: conciseBioRenderer,
  [BIO_LINE_RENDERER_KEY]: conciseBioLineRenderer,
  [RSS_ITEM_AUTHOR_RENDERER_KEY]: rssItemAuthorRenderer
};

module.exports = function (ast = {}) {
  return render(ast, renderersMap);
};
