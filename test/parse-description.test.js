let assert = require('assert');
let parse = require('../lib/parse');
let description = require('../lib/parsers/description');

let input = require('./stubs/parse/description--input');
let output = require('./stubs/parse/description--output');

const { GLOBAL_PARSER_KEY } = require('../lib/constants');

describe('description parser', () => {
  it('splits description into plain text and comments', () => {
    const parsersMap = {
      [GLOBAL_PARSER_KEY]: description
    };
    let tree = parse(input, parsersMap);

    assert.deepEqual(tree, output);
  });
});
