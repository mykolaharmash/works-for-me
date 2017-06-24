const path = require('path');
const fs = require('fs-extra');

const setupsDir = path.resolve(__dirname, '../setups');

module.exports = function (distDir) {
  fs.copySync(setupsDir, `${ distDir }/setups`);
};

