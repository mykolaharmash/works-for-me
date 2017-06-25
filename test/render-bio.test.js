let fs = require('fs');
let assert = require('assert');

let render = require('../lib/render');
let bio = require('../lib/renderers/bio');
const htmlBeautify = require('../lib/html-beautify');
const jsonBeautify = require('../lib/json-beautify');

const testSets = {
  basic: {
    input: './stubs/render/bio-empty--input.js',
    output: './stubs/render/bio-empty--output.html'
  },
  trailingDescription: {
    input: './stubs/render/bio-trailing-description--input.js',
    output: './stubs/render/bio-trailing-description--output.html'
  },
  interlineDescriptions: {
    input: './stubs/render/bio-interline-descriptions--input.js',
    output: './stubs/render/bio-interline-descriptions--output.html'
  }
};

const inputEmpty = require(testSets.basic.input);
const outputEmpty = htmlBeautify(fs.readFileSync(require.resolve(testSets.basic.output), 'utf8'));

const inputTrailingDescription = require(testSets.trailingDescription.input);
const outputTrailingDescription = htmlBeautify(fs.readFileSync(require.resolve(testSets.trailingDescription.output), 'utf8'));

const inputInterlineDescriptions = require(testSets.interlineDescriptions.input);
const outputInterlineDescriptions = htmlBeautify(fs.readFileSync(require.resolve(testSets.interlineDescriptions.output), 'utf8'));

const { BIO_RENDERER_KEY } = require('../lib/constants');

describe('bio renderer', () => {
  const renderersMap = {
    [BIO_RENDERER_KEY]: bio
  };

  it('renders empty bio context', () => {
    let html = render(inputEmpty, renderersMap);

    assert.equal(html, outputEmpty, jsonBeautify(testSets.basic));
  });

  it('renders bio and trailing description as sibling elements', () => {
    let html = render(inputTrailingDescription, renderersMap);

    assert.equal(
      html,
      outputTrailingDescription,
      jsonBeautify(testSets.trailingDescription)
    );
  });

  it('ignores interline and starting descriptions', () => {
    let html = render(inputInterlineDescriptions, renderersMap);

    assert.equal(
      html,
      outputInterlineDescriptions,
      jsonBeautify(testSets.trailingDescription)
    );
  });
});
