let Immutable = require('immutable');
let assert = require('assert');
let parse = require('../lib/parse');
let setup = require('../lib/parsers/setup');

let inputEnvironmentStart = require('./stubs/parse/setup-environment-start--input');
let outputEnvironmentStart = require('./stubs/parse/setup-environment-start--output');

let inputToolStart = require('./stubs/parse/setup-tool-start--input');
let outputToolStart = require('./stubs/parse/setup-tool-start--output');

const { SETUP_PARSER_KEY } = require('../lib/constants');

describe('setup parser', () => {
  it('splits lexemes to "environment" contexts by environment bullets', () => {
    const parsersMap = {
      [SETUP_PARSER_KEY]: setup
    };
    let tree = parse(Immutable.fromJS(inputEnvironmentStart), parsersMap);

    assert.deepEqual(tree, outputEnvironmentStart);
  });

  it(`creates implicit "environment" context when setup 
      starts straight with a tool`, () => {
    const parsersMap = {
      [SETUP_PARSER_KEY]: setup
    };
    let tree = parse(Immutable.fromJS(inputToolStart), parsersMap);

    assert.deepEqual(tree, outputToolStart);
  });
});
