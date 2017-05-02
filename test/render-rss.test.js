const path = require('path');
const fs = require('fs');
const { assert } = require('chai');

const render = require('../lib/render');
const rssRenderer = require('../lib/renderers/rss');
const {
  RSS_RENDERER_KEY
} = require('../lib/constants');

const input = require('./stubs/render/rss--input');
const output = fs.readFileSync(path.resolve(__dirname, './stubs/render/rss--output.xml'), 'utf8');

const renderersMap = {
  [RSS_RENDERER_KEY]: rssRenderer
};

describe('rss renderer', () => {
  it('renders wrapper for rss channel', () => {
    let xml = render(input, renderersMap);

    assert.deepEqual(xml, output);
  });
});
