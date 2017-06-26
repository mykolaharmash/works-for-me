const path = require('path');
const fs = require('fs-extra');

const staticsDir = path.resolve(__dirname, '../statics');

module.exports = function (distDir) {
  fs.copySync(staticsDir, `${ distDir }/statics`);
  fs.copySync(`${ staticsDir }/favicon.ico`, `${ distDir }/favicon.ico`);
};

