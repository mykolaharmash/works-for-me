let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let setupsListItem = require('../lib/renderers/setups-list-item');

const basicInput = require('./stubs/render/setups-list/setups-list-item-basic--input');
const basicOutput = fs.readFileSync(require.resolve('./stubs/render/setups-list/setups-list-item-basic--output.html'), 'utf8');

const noKeyInput = require('./stubs/render/setups-list/setups-list-item-no-key--input');
const noKeyOutput = fs.readFileSync(require.resolve('./stubs/render/setups-list/setups-list-item-no-key--output.html'), 'utf8');

const updateDateInput = require('./stubs/render/setups-list/setups-list-item-update-date--input');
const updateDateOutput = fs.readFileSync(require.resolve('./stubs/render/setups-list/setups-list-item-update-date--output.html'), 'utf8');

const { SETUPS_LIST_ITEM_RENDERER_KEY } = require('../lib/constants');

describe('setups-list-item renderer', () => {
  const renderersMap = {
    [SETUPS_LIST_ITEM_RENDERER_KEY]: setupsListItem
  };

  it('renders wrapper for setup item with link to setup and create date', () => {
    let html = render(basicInput, renderersMap);

    assert.equal(html, basicOutput);
  });

  it('does not render item which has no "key" context', () => {
    let html = render(noKeyInput, renderersMap);

    assert.equal(html, noKeyOutput);
  });

  it('renders update date if there is update date context', () => {
    let html = render(updateDateInput, renderersMap);

    assert.equal(html, updateDateOutput);
  });
});
