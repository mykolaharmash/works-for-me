let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let toolNamesList = require('../lib/renderers/tool-names-list');

const inputEmpty = require('./stubs/render/tool-names-list-empty--input');
const outputEmpty = fs.readFileSync(require.resolve('./stubs/render/tool-names-list-empty--output.html'), 'utf8');

const inputSeparator = require('./stubs/render/tool-names-list-separator--input');
const outputSeparator = fs.readFileSync(require.resolve('./stubs/render/tool-names-list-separator--output.html'), 'utf8');

const { TOOL_NAMES_LIST_RENDERER_KEY } = require('../lib/constants');

describe('tool-names-list renderer', () => {
  const renderersMap = {
    [TOOL_NAMES_LIST_RENDERER_KEY]: toolNamesList
  };

  it('renders empty tool names list context', () => {
    let html = render(inputEmpty, renderersMap);

    assert.equal(html, outputEmpty, `
      ./stubs/render/tool-names-list-empty--input.js
      ./stubs/render/tool-names-list-empty--output.html
    `);
  });

  it('renders tool names list joined by separator', () => {
    let html = render(inputSeparator, renderersMap);

    assert.equal(html, outputSeparator, `
      ./stubs/render/tool-names-list-separator--input.js
      ./stubs/render/tool-names-list-separator--output.html
    `);
  });
});
