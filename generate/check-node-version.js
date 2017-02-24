const semver = require('semver');
const packageJson = require('../package.json');
const requiredNodeVersion = packageJson.engines.node;

if (!semver.satisfies(process.version, requiredNodeVersion)) {
  console.error('Required Node.js version ' + requiredNodeVersion);

  process.exit(1);
}
