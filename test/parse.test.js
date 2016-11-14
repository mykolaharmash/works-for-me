let assert = require('assert');
let parse = require('../lib/parse');
let globalSplitter = require('../lib/parse-contexts/global-splitter');

let globalSplitterInput = require('./stubs/parse/global-splitter--input');
let globalSplitterOutput = require('./stubs/parse/global-splitter--output');

describe('parse', () => {
  describe('global splitter', () => {
    it('splits lexemes list by two contexts: "bio" and "setup"', () => {
      let tree = parse(globalSplitterInput, [globalSplitter]);

      assert.deepEqual(tree, globalSplitterOutput);
    });
  });
});
