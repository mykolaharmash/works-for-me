const path = require('path');
const fs = require('fs-extra');

const staticsDir = path.resolve(__dirname, '../statics');
const distDir = path.resolve(__dirname, '../dist');

module.exports = function () {
  fs.copySync(staticsDir, `${ distDir }/statics`);
};

