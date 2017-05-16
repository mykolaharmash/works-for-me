let fs = require('fs');
let assert = require('assert');

let generateSetupsListHtml = require('../generate/setups-list-html');
const htmlBeautify = require('../lib/html-beautify');
const jsonBeautify = require('../lib/json-beautify');

const testSets = {
  basic: {
    input: './stubs/generate/setups-list-html--input.js',
    output: './stubs/generate/setups-list-html--output.html'
  }
};

const input = require(testSets.basic.input);
const output = htmlBeautify(fs.readFileSync(require.resolve(testSets.basic.output), 'utf8'));

describe('setups-list-html generator', () => {
  it(`generates main page from AST by hooking up all needed renderers`, () => {
    let html = generateSetupsListHtml(input);

    assert.deepEqual(html, output, jsonBeautify(testSets.basic));
  });
});
