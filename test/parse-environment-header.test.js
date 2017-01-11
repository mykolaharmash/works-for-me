let Immutable = require('immutable');
let assert = require('assert');
let parse = require('../lib/parse');
let environmentHeader = require('../lib/parsers/environment-header');

let input = require('./stubs/parse/environment-header--input');
let output = require('./stubs/parse/environment-header--output');

const { ENVIRONMENT_HEADER_PARSER_KEY } = require('../lib/constants');

describe('environment header parser', () => {
  it('splits environment header into title and description', () => {
    const parsersMap = {
      [ENVIRONMENT_HEADER_PARSER_KEY]: environmentHeader
    };
    let tree = parse(Immutable.fromJS(input), parsersMap);

    assert.deepEqual(tree, output);
  });
});
