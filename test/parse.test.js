let assert = require('assert');
let parse = require('../lib/parse');
let globalSplitter = require('../lib/parsers/global-splitter');
let bio = require('../lib/parsers/bio');
let setup = require('../lib/parsers/setup');

let globalSplitterInput = require('./stubs/parse/global-splitter--input');
let globalSplitterOutput = require('./stubs/parse/global-splitter--output');

let bioCleanInput = require('./stubs/parse/bio-clean--input');
let bioCleanOutput = require('./stubs/parse/bio-clean--output');

let setupInput = require('./stubs/parse/setup--input');
let setupOutput = require('./stubs/parse/setup--output');

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
});
