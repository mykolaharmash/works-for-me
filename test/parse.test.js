let assert = require('assert');
let parse = require('../lib/parse');
let globalSplitter = require('../lib/parsers/global-splitter');
let bio = require('../lib/parsers/bio');
let setup = require('../lib/parsers/setup');
let environment = require('../lib/parsers/environment');

let globalSplitterInput = require('./stubs/parse/global-splitter--input');
let globalSplitterOutput = require('./stubs/parse/global-splitter--output');

let bioCleanInput = require('./stubs/parse/bio-clean--input');
let bioCleanOutput = require('./stubs/parse/bio-clean--output');
let bioTralingNewlinesInput = require('./stubs/parse/bio-traling-newlines--input');
let bioTralingNewlinesOutput = require('./stubs/parse/bio-traling-newlines--output');
let bioCommentsInput = require('./stubs/parse/bio-comments--input');
let bioCommentsOutput = require('./stubs/parse/bio-comments--output');

let setupInput = require('./stubs/parse/setup--input');
let setupOutput = require('./stubs/parse/setup--output');

let environmentInput = require('./stubs/parse/environment--input');
let environmentOutput = require('./stubs/parse/environment--output');

const {
  GLOBAL_PARSER_KEY,
  BIO_PARSER_KEY
} = require('../lib/constants');

describe('parse', () => {
  describe('global splitter', () => {
    it('splits lexemes list by two contexts: "bio" and "setup"', () => {
      const parsersMap = {
        [GLOBAL_PARSER_KEY]: globalSplitter
      };
      let tree = parse(globalSplitterInput, parsersMap);

      assert.deepEqual(tree, globalSplitterOutput);
    });
  });

  describe('bio', () => {
    it('splits lexemes list to "bio-line" contexts', () => {
      const parsersMap = {
        [GLOBAL_PARSER_KEY]: bio
      };
      let tree = parse(bioCleanInput, parsersMap);

      assert.deepEqual(tree, bioCleanOutput);
    });

    it(`saves traling newlines and newlines
        between bio-lines as "plain" context`, () => {
      const parsersMap = {
        [GLOBAL_PARSER_KEY]: bio
      };
      let tree = parse(bioTralingNewlinesInput, parsersMap);

      assert.deepEqual(tree, bioTralingNewlinesOutput);
    });


    it('creates "comment-line" contexts from comment lexemes', () => {
      const parsersMap = {
        [GLOBAL_PARSER_KEY]: bio
      };
      let tree = parse(bioCommentsInput, parsersMap);

      assert.deepEqual(tree, bioCommentsOutput);
    });
  });

  describe('setup', () => {
    it('splits lexemes list to "environment" contexts', () => {
      const parsersMap = {
        [GLOBAL_PARSER_KEY]: setup
      };
      let tree = parse(setupInput, parsersMap);

      assert.deepEqual(tree, setupOutput);
    });
  });

  describe('environment', () => {
    it('splits environment into headers and tools list', () => {
      const parsersMap = {
        [GLOBAL_PARSER_KEY]: environment
      };
      let tree = parse(environmentInput, parsersMap);

      assert.deepEqual(tree, environmentOutput);
    });
  });
});
