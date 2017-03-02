let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let setupsListItem = require('../lib/renderers/setups-list-item');

const basicInput = require('./stubs/render/setups-list/setups-list-item-basic--input');
const basicOutput = fs.readFileSync(require.resolve('./stubs/render/setups-list/setups-list-item-basic--output.html'), 'utf8');

const noKeyInput = require('./stubs/render/setups-list/setups-list-item-no-key--input');
const noKeyOutput = fs.readFileSync(require.resolve('./stubs/render/setups-list/setups-list-item-no-key--output.html'), 'utf8');

const latestCommitDateInput = require('./stubs/render/setups-list/setups-list-item-latest-commit-date--input');
const latestCommitDateOutput = fs.readFileSync(require.resolve('./stubs/render/setups-list/setups-list-item-latest-commit-date--output.html'), 'utf8');

const { SETUPS_LIST_ITEM_RENDERER_KEY } = require('../lib/constants');

describe('setups-list-item renderer', () => {
  const renderersMap = {
    [SETUPS_LIST_ITEM_RENDERER_KEY]: setupsListItem
  };

  it('renders wrapper for setup item', () => {
    let html = render(basicInput, renderersMap);

    assert.equal(html, basicOutput);
  });

  it('does not render item which has no "key" context', () => {
    let html = render(noKeyInput, renderersMap);

    assert.equal(html, noKeyOutput);
  });

  it('renders latest commit date', () => {
    let html = render(latestCommitDateInput, renderersMap);

    assert.equal(html, latestCommitDateOutput);
  });
});
