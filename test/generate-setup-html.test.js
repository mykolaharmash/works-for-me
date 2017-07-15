const fs = require('fs')
const path = require('path')
const { assert } = require('chai')

const generateSetupHtml = require('../generate/setup-html')
const htmlBeautify = require('../lib/html-beautify')
const jsonBeautify = require('../lib/json-beautify')

const testSets = {
  basic: {
    input: './stubs/generate/setup-html-basic--input.js',
    output: './stubs/generate/setup-html-basic--output.html'
  },
  withUpdates: {
    input: './stubs/generate/setup-html-with-updates--input.js',
    output: './stubs/generate/setup-html-with-updates--output.html'
  }
}

const basicInput = require(testSets.basic.input)
const basicOutput = htmlBeautify(fs.readFileSync(path.resolve(__dirname, testSets.basic.output), 'utf8'))

const withUpdatesInput = require(testSets.withUpdates.input)
const withUpdatesOutput = htmlBeautify(fs.readFileSync(path.resolve(__dirname, testSets.withUpdates.output), 'utf8'))

describe('setup html generator', () => {
  it('generates setup html from AST by putting in place all needed renderers', () => {
    let html = generateSetupHtml(basicInput)

    assert.deepEqual(html, basicOutput, jsonBeautify(testSets.basic))
  })

  it('generates setup html with latest update', () => {
    let html = generateSetupHtml(withUpdatesInput)

    assert.deepEqual(html, withUpdatesOutput, jsonBeautify(testSets.withUpdates))
  })
})
