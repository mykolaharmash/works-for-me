const gitApi = require('../lib/git-api');

module.exports = function (setupFilename) {
  let setupCommitsList = gitApi.getCommitsList(
    `setups/${ setupFilename }`
  );

  return {
    latestUpdate: setupCommitsList[0]
  };
};

