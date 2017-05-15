const fs = require('fs');
const path = require('path');
const generateSetupHtml = require('../generate/setup-html');
const { assert } = require('chai');

const basicInput = require('./stubs/generate/setup-html-basic--input');
const basicOutput = fs.readFileSync(path.resolve(__dirname, './stubs/generate/setup-html-basic--output.html'), 'utf8');

const withUpdatesInput = require('./stubs/generate/setup-html-with-updates--input');
const withUpdatesOutput = fs.readFileSync(path.resolve(__dirname, './stubs/generate/setup-html-with-updates--output.html'), 'utf8');

describe('setup html generator', () => {
  it('generates setup html from AST by putting in place all needed renderers', () => {
    let html = generateSetupHtml(basicInput);

    assert.deepEqual(html, basicOutput, './stubs/generate/setup-html-basic--output.html');
  });

  it('generates setup html with latest update', () => {
    let html = generateSetupHtml(withUpdatesInput);

    assert.deepEqual(html, withUpdatesOutput, './stubs/generate/setup-html-with-updates--output.html');
  });
});
