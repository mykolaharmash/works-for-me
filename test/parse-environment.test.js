let Immutable = require('immutable');
let assert = require('assert');
let parse = require('../lib/parse');
let environment = require('../lib/parsers/environment');

let inputWithHeader = require('./stubs/parse/environment-with-header--input');
let outputWithHeader = require('./stubs/parse/environment-with-header--output');

let inputWithoutHeader = require('./stubs/parse/environment-without-header--input');
let outputWithoutHeader = require('./stubs/parse/environment-without-header--output');

const { ENVIRONMENT_PARSER_KEY } = require('../lib/constants');

describe('environment parser', () => {
  it('splits "environment" into "environment-headers" and "tools-list"', () => {
    const parsersMap = {
      [ENVIRONMENT_PARSER_KEY]: environment
    };
    let tree = parse(Immutable.fromJS(inputWithHeader), parsersMap);

    assert.deepEqual(tree, outputWithHeader);
  });

  it(`creates "environment" without "environment-header"
      if there is only "tools-list"`, () => {
    const parsersMap = {
      [ENVIRONMENT_PARSER_KEY]: environment
    };
    let tree = parse(Immutable.fromJS(inputWithoutHeader), parsersMap);

    assert.deepEqual(tree, outputWithoutHeader);
  });
});
