const proxyquire = require('proxyquire');
const sinon = require('sinon');
const { assert } = require('chai');

const spawnStub = sinon.stub();

const gitApi = proxyquire('../lib/git-api', {
  child_process: { spawnSync: spawnStub }
})

describe('git api', () => {

  afterEach(() => {
    spawnStub.reset();
  });

  describe('getCommitsList()', () => {
    it('gets array of commits with date and message', () => {
      const commitsListMock = `
        2016-11-14T12:23:03+01:00\u{1f}message mock
        \u{1e}
        2016-11-04T12:27:05+01:00\u{1f}another message\nmock
      `;
      const resMock = {
        stderr: new Buffer(''),
        stdout: new Buffer(commitsListMock)
      };
      const commitsListStub = [
        { date: '2016-11-14T12:23:03+01:00', message: 'message mock' },
        { date: '2016-11-04T12:27:05+01:00', message: 'another message\nmock' }
      ];

      spawnStub
        .withArgs('git', ['log', '--format=%cI%x1f%B%x1e'])
        .returns(resMock);

      let commitsList = gitApi.getCommitsList();

      assert.deepEqual(commitsList, commitsListStub);
    });

    it('gets array of commits for passed path', () => {
      const commitsListMock = `
        2016-11-04T12:27:05+01:00\u{1f}message\nmock
      `;
      const resMock = {
        stderr: new Buffer(''),
        stdout: new Buffer(commitsListMock)
      };
      const commitsListStub = [
        { date: '2016-11-04T12:27:05+01:00', message: 'message\nmock' }
      ];
      const pathMock = 'setups/some-guy.setup';

      spawnStub
        .withArgs('git', ['log', '--format=%cI%x1f%B%x1e', pathMock])
        .returns(resMock);

      let commitsList = gitApi.getCommitsList(pathMock);

      assert.deepEqual(commitsList, commitsListStub);
    });

    it('throws an error if git command failed', () => {
      const resMock = {
        error: 'Some Error'
      };
      
      spawnStub.returns(resMock);

      const fn = () => gitApi.getCommitsList();

      assert.throws(fn);
    });

    it('throws an error if git command has written something to stderr', () => {
      const resMock = {
        stderr: new Buffer('Some Error')
      };

      spawnStub.returns(resMock);

      const fn = () => gitApi.getCommitsList();

      assert.throws(fn);
    });
  });
});
