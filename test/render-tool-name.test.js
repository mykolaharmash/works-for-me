let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let toolName = require('../lib/renderers/tool-name');

const inputEmpty = require('./stubs/render/tool-name-empty--input');
const outputEmpty = fs.readFileSync(require.resolve('./stubs/render/tool-name-empty--output.html'), 'utf8');

const inputOnlyTitle = require('./stubs/render/tool-name-only-title--input');
const outputOnlyTitle = fs.readFileSync(require.resolve('./stubs/render/tool-name-only-title--output.html'), 'utf8');

const { TOOL_NAME_RENDERER_KEY } = require('../lib/constants');

describe('tool name renderer', () => {
  const renderersMap = {
    [TOOL_NAME_RENDERER_KEY]: toolName
  };

  it('renders empty tool name as block', () => {
    let html = render(inputEmpty, renderersMap);

    assert.equal(html, outputEmpty);
  });

  it('renders name with title only as block', () => {
    let html = render(inputOnlyTitle, renderersMap);

    assert.equal(html, outputOnlyTitle);
  });
});
