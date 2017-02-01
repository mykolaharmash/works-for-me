const sanitize = require('../lib/sanitize');
const assert = require('assert');

const input = require('./stubs/sanitize/sanitize--input');
const output = require('./stubs/sanitize/sanitize--output');

describe('sanitize', () => {
  it('clears lexemes list from comments', () => {
    let sanitized = sanitize(input);

    assert.deepEqual(sanitized, output);
  });
});
