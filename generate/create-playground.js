let fs = require('fs-extra')
let path = require('path')
let rollup = require('rollup')
let rollupNodeResolver = require('rollup-plugin-node-resolve')
let rollupCommonJs = require('rollup-plugin-commonjs')
let rollupReplace = require('rollup-plugin-re')
let rollupBabel = require('rollup-plugin-babel')

const ROLLUP_CONFIG = {
  entry: path.resolve(__dirname, '../playground/playground.js'),
  plugins: [
    rollupReplace({
      patterns: [
        {
          test: `require('./html-beautify')`,
          replace: '() => {}'
        }
      ]
    }),
    rollupNodeResolver({
      jsnext: true,
      main: true,
      browser: true
    }),
    rollupCommonJs({
      sourceMap: false
    }),
    rollupBabel({
      exclude: 'node_modules/**',
      presets: [
        [
          'es2015',
          {
            modules: false
          }
        ]
      ],
      plugins: [
        'external-helpers'
      ]
    })
  ]
}

module.exports = function (distDir) {
  let originalPlaygroundPath = path.resolve(__dirname, '../playground')
  let distPlaygroundDir = `${distDir}/playground`

  fs.copySync(originalPlaygroundPath, distPlaygroundDir)

  rollup.rollup(ROLLUP_CONFIG)
    .then(bundle => {
      let result = bundle.generate({
        format: 'iife',
        moduleName: 'playground'
      })

      fs.writeFileSync(
        path.resolve(__dirname, `${distPlaygroundDir}/playground.bundle.js`),
        result.code
      )
    })
    .catch(err => {
      console.log(err)
    })
}
