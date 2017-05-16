const generateRssAst = require('../generate/rss-ast');
const { assert } = require('chai');

const basicInput = require('./stubs/generate/rss-ast-basic--input');
const basicOutput = require('./stubs/generate/rss-ast-basic--output');

describe('rss AST generator', () => {
  it(`generates RSS feed from commit with new
      and updated setups`, () => {
      let ast = generateRssAst(basicInput.content, basicInput.metadata);

      assert.deepEqual(ast, basicOutput);
  });
});
