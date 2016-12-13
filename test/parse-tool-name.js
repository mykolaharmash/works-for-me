let assert = require('assert');
let parse = require('../lib/parse');
let toolName = require('../lib/parsers/tool-name');

let inputBasic = require('./stubs/parse/tool-name-basic--input');
let outputBasic = require('./stubs/parse/tool-name-basic--output');

let inputLink = require('./stubs/parse/tool-name-link--input');
let outputLink = require('./stubs/parse/tool-name-link--output');

let inputSpacedLink = require('./stubs/parse/tool-name-spaced-link--input');
let outputSpacedLink = require('./stubs/parse/tool-name-spaced-link--output');

let inputMultiple = require('./stubs/parse/tool-name-multiple--input');
let outputMultiple = require('./stubs/parse/tool-name-multiple--output');

const { GLOBAL_PARSER_KEY } = require('../lib/constants');

describe('tool name parser', () => {
  it('parses tool\'s title', () => {
    const parsersMap = {
      [GLOBAL_PARSER_KEY]: toolName
    };
    let tree = parse(inputBasic, parsersMap);

    assert.deepEqual(tree, outputBasic);
  });

  it('parses tool\'s title and optional link', () => {
    const parsersMap = {
      [GLOBAL_PARSER_KEY]: toolName
    };
    let tree = parse(inputLink, parsersMap);

    assert.deepEqual(tree, outputLink);
  });

  it(`parses all content within parentheses as link, 
      event when multiple words present`,
  () => {
    const parsersMap = {
      [GLOBAL_PARSER_KEY]: toolName
    };
    let tree = parse(inputSpacedLink, parsersMap);

    assert.deepEqual(tree, outputSpacedLink);
  });

  it('parses multiple titles and multiple links within one tool-name', () => {
    const parsersMap = {
      [GLOBAL_PARSER_KEY]: toolName
    };
    let tree = parse(inputMultiple, parsersMap);

    assert.deepEqual(tree, outputMultiple);
  });
});
