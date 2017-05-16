let fs = require('fs');
let assert = require('assert');

let render = require('../lib/render');
let bioLine = require('../lib/renderers/bio-line');
const htmlBeautify = require('../lib/html-beautify');

const emptyInput = require('./stubs/render/bio-line-empty--input');
const emptyOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/bio-line-empty--output.html'), 'utf8'));

const invalidKeyinput = require('./stubs/render/bio-line-invalid-key--input');
const invalidKeyOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/bio-line-invalid-key--output.html'), 'utf8'));

const nameInput = require('./stubs/render/bio-line-name--input');
const nameOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/bio-line-name--output.html'), 'utf8'));

const occupationInput = require('./stubs/render/bio-line-occupation--input');
const occupationOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/bio-line-occupation--output.html'), 'utf8'));

const locationInput = require('./stubs/render/bio-line-location--input');
const locationOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/bio-line-location--output.html'), 'utf8'));

const linkBasicInput = require('./stubs/render/bio-line-link-basic--input');
const linkBasicOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/bio-line-link-basic--output.html'), 'utf8'));

const linkTwitterAtInput = require('./stubs/render/bio-line-link-twitter-at--input');
const linkTwitterAtOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/bio-line-link-twitter-at--output.html'), 'utf8'));

const linkTwitterNoAtInput = require('./stubs/render/bio-line-link-twitter-noat--input');
const linkTwitterNoAtOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/bio-line-link-twitter-noat--output.html'), 'utf8'));

const linkEmailInput = require('./stubs/render/bio-line-link-email--input');
const linkEmailOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/bio-line-link-email--output.html'), 'utf8'));

const { BIO_LINE_RENDERER_KEY } = require('../lib/constants');

describe('bio-line renderer', () => {
  const renderersMap = {
    [BIO_LINE_RENDERER_KEY]: bioLine
  };
  it('does not render empty line to html', () => {
    let html = render(emptyInput, renderersMap);

    assert.equal(html, emptyOutput);
  });

  it('does not render line with invalid key', () => {
    let html = render(invalidKeyinput, renderersMap);

    assert.equal(html, invalidKeyOutput);
  });

  it('renders name', () => {
    let html = render(nameInput, renderersMap);

    assert.equal(html, nameOutput);
  });

  it('renders info', () => {
    let html = render(occupationInput, renderersMap);

    assert.equal(html, occupationOutput);
  });

  it('renders location', () => {
    let html = render(locationInput, renderersMap);

    assert.equal(html, locationOutput);
  });

  describe('link', () => {
    it('renders basic link with same href and title', () => {
      let html = render(linkBasicInput, renderersMap);

      assert.equal(html, linkBasicOutput);
    });

    it('renders twitter link with @username as title', () => {
      let html = render(linkTwitterAtInput, renderersMap);

      assert.equal(html, linkTwitterAtOutput);
    });

    it(`renders twitter link with @username even 
        if no @ symbol in login`,
    () => {
      let html = render(linkTwitterNoAtInput, renderersMap);

      assert.equal(html, linkTwitterNoAtOutput);
    });

    it('renders email as mailto link', () => {
      let html = render(linkEmailInput, renderersMap);

      assert.equal(html, linkEmailOutput);
    });
  });
});
