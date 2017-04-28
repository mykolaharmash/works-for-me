const fs = require('fs');
const path = require('path');
const { assert } = require('chai');
const render = require('../lib/render');
const rssItemDescriptionRenderer = require('../lib/renderers/rss-item-description');
const {
  RSS_ITEM_DESCRIPTION_RENDERER_KEY
} = require('../lib/constants');

const basicInput = require('./stubs/render/rss-item-description-basic--input');
const basicOutput = fs.readFileSync(path.resolve(__dirname, './stubs/render/rss-item-description-basic--output.xml'), 'utf8');

const newTagInput = require('./stubs/render/rss-item-description-new-tag--input');
const newTagOutput = fs.readFileSync(path.resolve(__dirname, './stubs/render/rss-item-description-new-tag--output.xml'), 'utf8');

const updateTagInput = require('./stubs/render/rss-item-description-update-tag--input');
const updateTagOutput = fs.readFileSync(path.resolve(__dirname, './stubs/render/rss-item-description-update-tag--output.xml'), 'utf8');

describe('rss-item-description renderer', () => {
  const renderersMap = {
    [RSS_ITEM_DESCRIPTION_RENDERER_KEY]: rssItemDescriptionRenderer
  };

  it('renders wrapper for description', () => {
    let html = render(basicInput, renderersMap);

    assert.deepEqual(html, basicOutput);
  });

  it('strips new setup commit tag', () => {
    let html = render(newTagInput, renderersMap);

    assert.deepEqual(html, newTagOutput);
  });

  it('strips update setup commit tag', () => {
    let html = render(updateTagInput, renderersMap);

    assert.deepEqual(html, updateTagOutput);
  });
});
