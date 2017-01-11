let Immutable = require('immutable');
let assert = require('assert');
let parse = require('../lib/parse');

let root = require('../lib/parsers/root');

let input = require('./stubs/parse/root--input');
let output = require('./stubs/parse/root--output');

const { ROOT_PARSER_KEY } = require('../lib/constants');

describe('global splitter parser', () => {
  it('splits lexemes list by two contexts: "bio" and "setup"', () => {
    const parsersMap = {
      [ROOT_PARSER_KEY]: root
    };
    let tree = parse(Immutable.fromJS(input), parsersMap);

    assert.deepEqual(tree, output);
  });
});
