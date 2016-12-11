let assert = require('assert');
let parse = require('../lib/parse');
let toolHead = require('../lib/parsers/tool-head');

let input = require('./stubs/parse/tool-head--input');
let output = require('./stubs/parse/tool-head--output');

const { GLOBAL_PARSER_KEY } = require('../lib/constants');

describe('tool head parser', () => {
  it('splits tool head into purpose and tool names list', () => {
    const parsersMap = {
      [GLOBAL_PARSER_KEY]: toolHead
    };
    let tree = parse(input, parsersMap);

    assert.deepEqual(tree, output);
  });
});
