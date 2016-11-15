let assert = require('assert');
let parse = require('../lib/parse');
let globalSplitter = require('../lib/parsers/global-splitter');
let bio = require('../lib/parsers/bio');

let globalSplitterInput = require('./stubs/parse/global-splitter--input');
let globalSplitterOutput = require('./stubs/parse/global-splitter--output');

let bioCleanInput = require('./stubs/parse/bio-clean--input');
let bioCleanOutput = require('./stubs/parse/bio-clean--output');

describe('parse', () => {
  describe('global splitter', () => {
    it('splits lexemes list by two contexts: "bio" and "setup"', () => {
      const parsersMap = {
        'global': globalSplitter
      };
      let tree = parse(globalSplitterInput, parsersMap);

      assert.deepEqual(tree, globalSplitterOutput);
    });
  });

  describe('bio', () => {
    it('splits lexemes list to "bio-line" contexts', () => {
      const parsersMap = {
        'global': bio
      };
      let tree = parse(bioCleanInput, parsersMap);

      assert.deepEqual(tree, bioCleanOutput);
    });
  });
});
