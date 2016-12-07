let assert = require('assert');
let parse = require('../lib/parse');
let environment = require('../lib/parsers/environment');

let input = require('./stubs/parse/environment--input');
let output = require('./stubs/parse/environment--output');

const { GLOBAL_PARSER_KEY } = require('../lib/constants');

describe('environment parser', () => {
  it('splits environment into headers and tools list', () => {
    const parsersMap = {
      [GLOBAL_PARSER_KEY]: environment
    };
    let tree = parse(input, parsersMap);

    assert.deepEqual(tree, output);
  });
});
