const gitApi = require('../lib/git-api');
const { UPDATE_TAG_TOKEN } = require('../lib/constants');

function findUpdates(commitsList) {
  return commitsList.filter(commit => {
    let message = commit.message.trim();

    return message.startsWith(UPDATE_TAG_TOKEN);
  });
}

module.exports = function (filePath) {
  let commitsList = gitApi.getCommitsList(filePath);

  if (!commitsList.length) {
    throw new Error(`No commits for setup: ${ filePath }`);
  }

  let updatesList = findUpdates(commitsList);

  return {
    updates: updatesList,
    initial: commitsList[commitsList.length - 1],
    allCommits: commitsList
  };
};

