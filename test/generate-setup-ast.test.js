const generateSetupAst = require('../generate/setup-ast');
const { assert } = require('chai');

const basicInput = require('./stubs/generate/setup-ast-basic--input');
const basicOutput = require('./stubs/generate/setup-ast-basic--output');

const withUpdatesInput = require('./stubs/generate/setup-ast-with-updates--input');
const withUpdatesOutput = require('./stubs/generate/setup-ast-with-updates--output');

const noOccupationInput = require('./stubs/generate/setup-ast-no-occupation--input');
const noOccupationOutput = require('./stubs/generate/setup-ast-no-occupation--output');

describe('setup AST generator', () => {
  it(`generates setup page ast from file content
      including head and body contexts`, () => {
    let ast = generateSetupAst(basicInput.content, basicInput.metadata);

    assert.deepEqual(ast, basicOutput);
  });

  it(`generates setup ast with latest update context 
      if there are updates in metadata`, () => {
    let ast = generateSetupAst(withUpdatesInput.content, withUpdatesInput.metadata);

    assert.deepEqual(ast, withUpdatesOutput);
  });

  it(`generates setup ast with head-description based 
      on author's name if no occupation provided`, () => {
    let ast = generateSetupAst(noOccupationInput.content, noOccupationInput.metadata);

    assert.deepEqual(ast, noOccupationOutput);
  });
});
