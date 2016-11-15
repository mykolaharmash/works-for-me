let assert = require('assert');
let parse = require('../lib/parse');
let globalSplitter = require('../lib/parsers/global-splitter');

let globalSplitterInput = require('./stubs/parse/global-splitter--input');
let globalSplitterOutput = require('./stubs/parse/global-splitter--output');

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
});
