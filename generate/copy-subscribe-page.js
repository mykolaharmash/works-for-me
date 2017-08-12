const path = require('path')
const fs = require('fs-extra')

const subscribePageDir = path.resolve(__dirname, '../subscribe')

module.exports = function (distDir) {
  fs.copySync(subscribePageDir, `${distDir}/subscribe`)
}
