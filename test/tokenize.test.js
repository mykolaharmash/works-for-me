let assert = require('assert')
let tokenize = require('../lib/tokenize')

let oneLineInput = require('./stubs/tokenize/one-line--input')
let oneLineOutput = require('./stubs/tokenize/one-line--output')

let multiLineInput = require('./stubs/tokenize/multi-line--input')
let multiLineOutput = require('./stubs/tokenize/multi-line--output')

let leadingTrailingSpacesInput = require('./stubs/tokenize/leading-traling-spaces--input')
let leadingTrailingSpacesOutput = require('./stubs/tokenize/leading-traling-spaces--output')

let leadingTrailingNewlinesInput = require('./stubs/tokenize/leading-traling-newlines--input')
let leadingTrailingNewlinesOutput = require('./stubs/tokenize/leading-traling-newlines--output')

describe('tokenizer', () => {
  it('tokenizes one-line template', () => {
    let tokens = tokenize([...oneLineInput])

    assert.deepEqual(tokens, oneLineOutput)
  })

  it('tokenizes multi-line template', () => {
    let tokens = tokenize([...multiLineInput])

    assert.deepEqual(tokens, multiLineOutput)
  })

  it('ignores leading and trailing spaces', () => {
    let tokens = tokenize([...leadingTrailingSpacesInput])

    assert.deepEqual(tokens, leadingTrailingSpacesOutput)
  })

  it('does not ignore leading and trailing new-lines', () => {
    let tokens = tokenize([...leadingTrailingNewlinesInput])

    assert.deepEqual(tokens, leadingTrailingNewlinesOutput)
  })
})
