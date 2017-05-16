let fs = require('fs');
let assert = require('assert');

let render = require('../lib/render');
let description = require('../lib/renderers/description');
const htmlBeautify = require('../lib/html-beautify');

const basicInput = require('./stubs/render/description-basic--input');
const basicOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-basic--output.html'), 'utf8'));

const inputOnlyNewlines = require('./stubs/render/description-only-newlines--input');
const outputOnlyNewlines = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-only-newlines--output.html'), 'utf8'));

const newlinesInput = require('./stubs/render/description-newlines--input');
const newlinesOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-newlines--output.html'), 'utf8'));

const { DESCRIPTION_RENDERER_KEY } = require('../lib/constants');

describe('description renderer', () => {
  const renderersMap = {
    [DESCRIPTION_RENDERER_KEY]: description
  };

  it('renders description with text', () => {
    let html = render(basicInput, renderersMap);

    assert.equal(html, basicOutput);
  });

  it('does not render description which contains only newlines', () => {
    let html = render(inputOnlyNewlines, renderersMap);

    assert.equal(html, outputOnlyNewlines);
  });

  it('renders intermediate newlines within text', () => {
    let html = render(newlinesInput, renderersMap);

    assert.equal(html, newlinesOutput);
  });
});
