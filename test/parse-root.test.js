let Immutable = require('immutable');
let assert = require('assert');
let parse = require('../lib/parse');

let root = require('../lib/parsers/root');

let inputEnvironmentStart = require('./stubs/parse/root-environment-start--input');
let outputEnvironmentStart = require('./stubs/parse/root-environment-start--output');

let inputToolStart = require('./stubs/parse/root-tool-start--input');
let outputToolStart = require('./stubs/parse/root-tool-start--output');

const { ROOT_PARSER_KEY } = require('../lib/constants');

describe('root parser', () => {
  it(`splits lexemes into "bio" and "setup" contexts 
      when "setup" starts with environment`, () => {
    const parsersMap = {
      [ROOT_PARSER_KEY]: root
    };
    let tree = parse(Immutable.fromJS(inputEnvironmentStart), parsersMap);

    assert.deepEqual(tree, outputEnvironmentStart);
  });

  it(`splits lexemes into "bio" and "setup" contexts 
      when "setup" starts with tool`, () => {
    const parsersMap = {
      [ROOT_PARSER_KEY]: root
    };
    let tree = parse(Immutable.fromJS(inputToolStart), parsersMap);

    assert.deepEqual(tree, outputToolStart);
  });
});
