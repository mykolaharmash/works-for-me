const spawn = require('child_process').spawnSync;

function getCommitsList (path) {
  let cmdArgs = ['log', `--format=%cI%x1f%B%x1e`];

  if (path) {
    cmdArgs.push(path);
  }

  let res = spawn('git', cmdArgs);

  if (res.error) {
    throw res.error;
  }

  if (res.stderr.length) {
    throw new Error(res.stderr.toString());
  }

  return res.stdout.toString()
    .split('\u{1e}')
    .map(commit => commit.trim())
    .filter(commit => commit.length !== 0)
    .map(commit => {
      let [date, message] = commit.split('\u{1f}');

      return { date, message };
    });
}

module.exports = {
  getCommitsList
};
