let assert = require('assert');
let tokenize = require('../lib/tokenize');

let oneLineInput = require('./stubs/one-line--input');
let oneLineOutput = require('./stubs/one-line--output');

let multiLineInput = require('./stubs/multi-line--input');
let multiLineOutput = require('./stubs/multi-line--output');

let leadingTrailingSpacesInput = require('./stubs/leading-traling-spaces--input');
let leadingTrailingSpacesOutput = require('./stubs/leading-traling-spaces--output');

let leadingTrailingNewlinesInput = require('./stubs/leading-traling-newlines--input');
let leadingTrailingNewlinesOutput = require('./stubs/leading-traling-newlines--output');

describe('tokenizer', () => {
  it('tokenizes one-line template', () => {
    let tokens = tokenize([...oneLineInput]);

    assert.deepEqual(tokens, oneLineOutput);
  });

  it('tokenizes multi-line template', () => {
    let tokens = tokenize([...multiLineInput]);

    assert.deepEqual(tokens, multiLineOutput);
  });

  it('ignores leading and trailing spaces', () => {
    let tokens = tokenize([...leadingTrailingSpacesInput]);

    assert.deepEqual(tokens, leadingTrailingSpacesOutput);
  });

  it('does not ignore leading and trailing new-lines', () => {
    let tokens = tokenize([...leadingTrailingNewlinesInput]);

    assert.deepEqual(tokens, leadingTrailingNewlinesOutput);
  });
});