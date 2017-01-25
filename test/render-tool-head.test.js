let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let toolHead = require('../lib/renderers/tool-head');

const input = require('./stubs/render/tool-head--input');
const output = fs
  .readFileSync(require.resolve('./stubs/render/tool-head--output.html'))
  .toString();

const { TOOL_HEAD_RENDERER_KEY } = require('../lib/constants');

describe('tool head renderer', () => {
  const renderersMap = {
    [TOOL_HEAD_RENDERER_KEY]: toolHead
  };

  it('renders empty tool head context', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
