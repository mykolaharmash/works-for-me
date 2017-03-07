const gitApi = require('../lib/git-api');

const UPDATE_TAG = 'update:'

function findUpdates(commitsList) {
  return commitsList.filter(commit => {
    let message = commit.message.trim();

    return message.startsWith(UPDATE_TAG);
  });
}

module.exports = function (setupFilename) {
  let commitsList = gitApi.getCommitsList(
    `setups/${ setupFilename }`
  );

  if (!commitsList.length) {
    throw new Error(`Can not find any commits for setup: ${ setupFilename }`);
  }

  let updatesList = findUpdates(commitsList);

  return {
    updates: updatesList,
    initial: commitsList[commitsList.length - 1]
  };
};

