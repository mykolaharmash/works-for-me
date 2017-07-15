let Immutable = require('immutable')
let assert = require('assert')
let parse = require('../lib/parse')

let bodyParser = require('../lib/parsers/body')

let inputEnvironmentStart = require('./stubs/parse/body-environment-start--input')
let outputEnvironmentStart = require('./stubs/parse/body-environment-start--output')

let inputToolStart = require('./stubs/parse/body-tool-start--input')
let outputToolStart = require('./stubs/parse/body-tool-start--output')

const { BODY_PARSER_KEY } = require('../lib/constants')
const parsersMap = {
  [BODY_PARSER_KEY]: bodyParser
}

describe('body parser', () => {
  it(`splits lexemes into "bio" and "setup" contexts 
      when "setup" starts with environment`, () => {
    let tree = parse(Immutable.fromJS(inputEnvironmentStart), parsersMap)

    assert.deepEqual(tree, outputEnvironmentStart)
  })

  it(`splits lexemes into "bio" and "setup" contexts 
      when "setup" starts with tool`, () => {
    let tree = parse(Immutable.fromJS(inputToolStart), parsersMap)

    assert.deepEqual(tree, outputToolStart)
  })
})
