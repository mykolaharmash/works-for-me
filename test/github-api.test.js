const githubApiFactory = require('../lib/github-api');
const assert = require('assert');

const TOKEN = process.env.TOKEN;

if (!TOKEN) {
  throw new Error('TOKEN env variable was not provided');
}

describe('GitHub API', () => {
  describe('instantiate without token', () => {
    it('throws an error', () => {
      let fn = () => githubApiFactory();

      assert.throws(fn);
    });
  });

  describe('instantiate with token', () => {
    let githubApi;

    beforeEach(() => {
      githubApi = githubApiFactory(TOKEN);
    });

    // Test that script can connect to real API
    // in order to check that token is correct and
    // ssl certificate is not expired
    describe('connectivity', () => {
      it('can connect to real github api', () => {
        return githubApi.fetchRepoInfo();
      });
    });
  });
});
