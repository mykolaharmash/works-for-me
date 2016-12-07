let assert = require('assert');
let parse = require('../lib/parse');
let bio = require('../lib/parsers/bio');

let cleanInput = require('./stubs/parse/bio-clean--input');
let cleanOutput = require('./stubs/parse/bio-clean--output');
let trailingNewlinesInput = require('./stubs/parse/bio-trailing-newlines--input');
let trailingNewlinesOutput = require('./stubs/parse/bio-trailing-newlines--output');
let commentsInput = require('./stubs/parse/bio-comments--input');
let commentsOutput = require('./stubs/parse/bio-comments--output');

const { GLOBAL_PARSER_KEY } = require('../lib/constants');

describe('bio parser', () => {
  it('splits lexemes list to "bio-line" contexts', () => {
    const parsersMap = {
      [GLOBAL_PARSER_KEY]: bio
    };
    let tree = parse(cleanInput, parsersMap);

    assert.deepEqual(tree, cleanOutput);
  });

  it(`saves traling newlines and newlines
      between bio-lines as "plain" context`, () => {
    const parsersMap = {
      [GLOBAL_PARSER_KEY]: bio
    };
    let tree = parse(trailingNewlinesInput, parsersMap);

    assert.deepEqual(tree, trailingNewlinesOutput);
  });


  it('creates "comment-line" contexts from comment lexemes', () => {
    const parsersMap = {
      [GLOBAL_PARSER_KEY]: bio
    };
    let tree = parse(commentsInput, parsersMap);

    assert.deepEqual(tree, commentsOutput);
  });
});
