let assert = require('assert');
let lex = require('../lib/lex');

let input = require('./stubs/lex/lex--input');
let output = require('./stubs/lex/lex--output');

describe('lex', () => {
  it('creates lexemes from tokens', () => {
    let lexemes = lex(input);

    assert.deepEqual(lexemes, output);
  });
});