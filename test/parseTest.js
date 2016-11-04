let assert = require('assert');
let parse = require('../lib/parse');

let input = require('./stubs/parse/structure--input');
let output = require('./stubs/parse/structure--output');

describe('parse', () => {
  it('creates lexemes from tokens', () => {
    let tree = parse(input);

    console.log(JSON.stringify(tree, null, '  '));
    // assert.deepEqual(lexemes, output);
  });
});