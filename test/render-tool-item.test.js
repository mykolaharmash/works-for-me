let fs = require('fs');
let assert = require('assert');

let render = require('../lib/render');
let toolItem = require('../lib/renderers/tool-item');
const htmlBeautify = require('../lib/html-beautify');

const input = require('./stubs/render/tool-item--input');
const output = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/tool-item--output.html'), 'utf8'))

const { TOOL_ITEM_RENDERER_KEY } = require('../lib/constants');

describe('tool item renderer', () => {
  const renderersMap = {
    [TOOL_ITEM_RENDERER_KEY]: toolItem
  };

  it('renders empty tool item context', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
