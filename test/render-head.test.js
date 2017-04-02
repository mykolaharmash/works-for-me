const fs = require('fs');
const path = require('path');
const { assert } = require('chai');
const { HEAD_RENDERER_KEY } = require('../lib/constants');
const headRenderer = require('../lib/renderers/head');
const render = require('../lib/render');

const input = require('./stubs/render/head--input');
const output = fs.readFileSync(path.resolve(__dirname, './stubs/render/head--output.html'), 'utf8');

describe('head renderer', () => {
  const renderersMap = {
    [HEAD_RENDERER_KEY]: headRenderer
  };

  it('renders <head> with title, description and other metadata', () => {
    let html = render(input, renderersMap);

    assert.deepEqual(html, output);
  });
});
