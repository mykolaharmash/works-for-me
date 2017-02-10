let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let setupsListRoot = require('../lib/renderers/setups-list-root');

const input = require('./stubs/render/setups-list/setups-list-root--input');
const output = fs.readFileSync(require.resolve('./stubs/render/setups-list/setups-list-root--output.html'), 'utf8');

const { SETUPS_LIST_ROOT_RENDERER_KEY } = require('../lib/constants');

describe('setups-list-root renderer', () => {
  const renderersMap = {
    [SETUPS_LIST_ROOT_RENDERER_KEY]: setupsListRoot
  };

  it('renders wrapper for main setups list page', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
