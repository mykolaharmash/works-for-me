let Immutable = require('immutable');
let assert = require('assert');
let parse = require('../lib/parse');
let setup = require('../lib/parsers/setup');

let input = require('./stubs/parse/setup--input');
let output = require('./stubs/parse/setup--output');

const { SETUP_PARSER_KEY } = require('../lib/constants');

describe('setup parser', () => {
  it('splits lexemes list to "environment" contexts', () => {
    const parsersMap = {
      [SETUP_PARSER_KEY]: setup
    };
    let tree = parse(Immutable.fromJS(input), parsersMap);

    assert.deepEqual(tree, output);
  });
});
