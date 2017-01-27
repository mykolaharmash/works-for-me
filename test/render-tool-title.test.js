let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let toolTitle = require('../lib/renderers/tool-title');

const input = require('./stubs/render/tool-title--input');
const output = fs.readFileSync(require.resolve('./stubs/render/tool-title--output.html'), 'utf8');

const { TOOL_TITLE_RENDERER_KEY } = require('../lib/constants');

describe('tool name renderer', () => {
  const renderersMap = {
    [TOOL_TITLE_RENDERER_KEY]: toolTitle
  };

  it('renders tool title as plain text', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
