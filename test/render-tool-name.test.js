let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let toolName = require('../lib/renderers/tool-name');

const inputEmpty = require('./stubs/render/tool-name-empty--input');
const outputEmpty = fs
  .readFileSync(require.resolve('./stubs/render/tool-name-empty--output.html'))
  .toString();

const { TOOL_NAME_RENDERER_KEY } = require('../lib/constants');

describe('tool name renderer', () => {
  const renderersMap = {
    [TOOL_NAME_RENDERER_KEY]: toolName
  };

  it('renders empty tool name', () => {
    let html = render(inputEmpty, renderersMap);

    assert.equal(html, outputEmpty);
  });
});
