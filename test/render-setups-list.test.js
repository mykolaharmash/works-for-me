let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let setupsList = require('../lib/renderers/setups-list');

const input = require('./stubs/render/setups-list/setups-list--input');
const output = fs.readFileSync(require.resolve('./stubs/render/setups-list/setups-list--output.html'), 'utf8');

const { SETUPS_LIST_RENDERER_KEY } = require('../lib/constants');

describe('setups-list renderer', () => {
  const renderersMap = {
    [SETUPS_LIST_RENDERER_KEY]: setupsList
  };

  it('renders wrapper for setups list', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
