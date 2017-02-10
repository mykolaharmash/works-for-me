let fs = require('fs');
let assert = require('assert');
let generateSetupsListHtml = require('../generate/setups-list-html');

const input = require('./stubs/generate/setups-list-html--input');
const output = fs.readFileSync(require.resolve('./stubs/generate/setups-list-html--output.html'), 'utf8');

describe('setups-list-html generator', () => {
  it(`generates main page from AST by hooking up all needed renderers`, () => {
    let html = generateSetupsListHtml(input);

    assert.deepEqual(html, output);
  });
});
