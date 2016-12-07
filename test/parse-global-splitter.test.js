let assert = require('assert');
let parse = require('../lib/parse');

let globalSplitter = require('../lib/parsers/global-splitter');

let input = require('./stubs/parse/global-splitter--input');
let output = require('./stubs/parse/global-splitter--output');

const { GLOBAL_PARSER_KEY } = require('../lib/constants');

describe('global splitter parser', () => {
  it('splits lexemes list by two contexts: "bio" and "setup"', () => {
    const parsersMap = {
      [GLOBAL_PARSER_KEY]: globalSplitter
    };
    let tree = parse(input, parsersMap);

    assert.deepEqual(tree, output);
  });
});
