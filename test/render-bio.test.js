let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let bio = require('../lib/renderers/bio');

const inputEmpty = require('./stubs/render/bio-empty--input');
const outputEmpty = fs.readFileSync(require.resolve('./stubs/render/bio-empty--output.html'), 'utf8');

const inputTrailingDescription = require('./stubs/render/bio-trailing-description--input');
const outputTrailingDescription = fs.readFileSync(require.resolve('./stubs/render/bio-trailing-description--output.html'), 'utf8');

const inputInterlineDescriptions = require('./stubs/render/bio-interline-descriptions--input');
const outputInterlineDescriptions = fs.readFileSync(require.resolve('./stubs/render/bio-interline-descriptions--output.html'), 'utf8');

const { BIO_RENDERER_KEY } = require('../lib/constants');

describe('bio renderer', () => {
  const renderersMap = {
    [BIO_RENDERER_KEY]: bio
  };

  it('renders empty bio context', () => {
    let html = render(inputEmpty, renderersMap);

    assert.equal(html, outputEmpty);
  });

  it('renders bio with trailing description', () => {
    let html = render(inputTrailingDescription, renderersMap);

    assert.equal(html, outputTrailingDescription);
  });

  it('ignores interline and starting descriptions', () => {
    let html = render(inputInterlineDescriptions, renderersMap);

    assert.equal(html, outputInterlineDescriptions);
  });
});
