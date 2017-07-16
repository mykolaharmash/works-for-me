const path = require('path')
const fs = require('fs-extra')

const setupsDir = path.resolve(__dirname, '../toolkits')

module.exports = function (distDir) {
  fs.copySync(setupsDir, `${distDir}/toolkits`)
}
