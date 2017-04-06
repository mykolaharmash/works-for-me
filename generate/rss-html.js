const render = require('../lib/render');
const rssItemTitleRenderer = require('../lib/renderers/rss-item-title');

const {
  RSS_ITEM_TITLE_RENDERER_KEY
} = require('../lib/constants');

const renderersMap = {
  [RSS_ITEM_TITLE_RENDERER_KEY]: rssItemTitleRenderer
};

module.exports = function (ast = {}) {
  return render(ast, renderersMap);
};
