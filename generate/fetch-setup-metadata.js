const githubApiFactory = require('../lib/github-api');

const githubApi = githubApiFactory(process.env.TOKEN);

function formatDate (date) {
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

module.exports = async function (setupAst) {
  let setupCommitsList;

  setupCommitsList = await githubApi.fetchCommitsList({
    path: `setups/${ setupAst.filename }`
  });

  let latesCommitDate = setupCommitsList[0].commit.committer.date;

  return Object.assign({
    latestCommit: {
      date: latesCommitDate,
      formattedDate: formatDate(new Date(latesCommitDate))
    }
  }, setupAst);
};

