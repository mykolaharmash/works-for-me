let Immutable = require('immutable')
let assert = require('assert')
let parse = require('../lib/parse')
let toolNamesList = require('../lib/parsers/tool-names-list')

let inputBasic = require('./stubs/parse/tool-names-list-basic--input')
let outputBasic = require('./stubs/parse/tool-names-list-basic--output')

let inputMultiple = require('./stubs/parse/tool-names-list-multiple--input')
let outputMultiple = require('./stubs/parse/tool-names-list-multiple--output')

const { TOOL_NAMES_LIST_PARSER_KEY } = require('../lib/constants')

describe('tool names list parser', () => {
  it('parses single tool name', () => {
    const parsersMap = {
      [TOOL_NAMES_LIST_PARSER_KEY]: toolNamesList
    }
    let tree = parse(Immutable.fromJS(inputBasic), parsersMap)

    assert.deepEqual(tree, outputBasic)
  })

  it('parses list of tool names', () => {
    const parsersMap = {
      [TOOL_NAMES_LIST_PARSER_KEY]: toolNamesList
    }
    let tree = parse(Immutable.fromJS(inputMultiple), parsersMap)

    assert.deepEqual(tree, outputMultiple)
  })
})
