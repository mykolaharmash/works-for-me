const githubApiFactory = require('../lib/github-api');

const githubApi = githubApiFactory(process.env.TOKEN);

module.exports = async function (setupFilename) {
  let setupCommitsList = await githubApi.fetchCommitsList({
    path: `setups/${ setupFilename }`
  });

  return {
    latestCommit: setupCommitsList[0].commit
  };
};

