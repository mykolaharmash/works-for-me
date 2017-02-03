let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let description = require('../lib/renderers/description');

const inputWithText = require('./stubs/render/description-with-text--input');
const outputWithText = fs.readFileSync(require.resolve('./stubs/render/description-with-text--output.html'), 'utf8')

const inputOnlyNewlines = require('./stubs/render/description-only-newlines--input');
const outputOnlyNewlines = fs.readFileSync(require.resolve('./stubs/render/description-only-newlines--output.html'), 'utf8')

const { DESCRIPTION_RENDERER_KEY } = require('../lib/constants');

describe('bio renderer', () => {
  const renderersMap = {
    [DESCRIPTION_RENDERER_KEY]: description
  };

  it('renders description with text', () => {
    let html = render(inputWithText, renderersMap);

    assert.equal(html, outputWithText);
  });

  it('does not render description which contains only newlines', () => {
    let html = render(inputOnlyNewlines, renderersMap);

    assert.equal(html, outputOnlyNewlines);
  });
});
