const path = require('path');
const fs = require('fs');
const { assert } = require('chai');

const render = require('../lib/render');
const latestUpdateRenderer = require('../lib/renderers/latest-update');
const { SETUP_LATEST_UPDATE_RENDERER_KEY } = require('../lib/constants');
const htmlBeautify = require('../lib/html-beautify');

const renderersMap = {
  [SETUP_LATEST_UPDATE_RENDERER_KEY]: latestUpdateRenderer
};

const basicInput = require('./stubs/render/latest-update-basic--input');
const basicOutput = htmlBeautify(fs.readFileSync(path.resolve(__dirname, './stubs/render/latest-update-basic--output.html'), 'utf8'));

const onlyTitleInput = require('./stubs/render/latest-update-only-title--input');
const onlyTitleOutput = htmlBeautify(fs.readFileSync(path.resolve(__dirname, './stubs/render/latest-update-only-title--output.html'), 'utf8'));

describe('latest-update renderer', () => {
  it('renders latest update date, title and message body', () => {
    let html = render(basicInput, renderersMap);

    assert.deepEqual(html, basicOutput);
  });

  it('renders latest update without message body', () => {
    let html = render(onlyTitleInput, renderersMap);

    assert.deepEqual(html, onlyTitleOutput);
  });
});
