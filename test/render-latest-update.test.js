const path = require('path');
const fs = require('fs');
const render = require('../lib/render');
const { assert } = require('chai');
const latestUpdateRenderer = require('../lib/renderers/latest-update');
const { SETUP_LATEST_UPDATE_RENDERER_KEY } = require('../lib/constants');

const renderersMap = {
  [SETUP_LATEST_UPDATE_RENDERER_KEY]: latestUpdateRenderer
};

const input = require('./stubs/render/latest-update--input');
const output = fs.readFileSync(path.resolve(__dirname, './stubs/render/latest-update--output.html'), 'utf8');

describe('latest-update renderer', () => {
  it('renders update date and message', () => {
    let html = render(input, renderersMap);

    assert.deepEqual(html, output);
  });
});
