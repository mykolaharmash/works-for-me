const { assert } = require('chai');
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const EventEmmiter = require('events');

const requestMethodStub = sinon.stub();
const githubApiFactory = proxyquire('../lib/github-api', {
  'https': {
    request: requestMethodStub
  }
});

describe('GitHub API', () => {
  afterEach(() => {
    requestMethodStub.reset();
  });

  describe('instantiate without token', () => {
    it('throws an error', () => {
      let fn = () => githubApiFactory();

      assert.throws(fn);
    });
  });

  describe('instantiate with token', () => {
    let githubApi;

    beforeEach(() => {
      githubApi = githubApiFactory('token');
    });

    describe('fetchRepoInfo()', () => {
      let reqMock;
      let resMock;

      beforeEach(() => {
        reqMock = new EventEmmiter();
        reqMock.end = () => {};
        requestMethodStub.returns(reqMock);
        resMock = new EventEmmiter();
        resMock.setEncoding = () => {};
      });

      it('makes a request to repo endpoint', async () => {
        githubApi.fetchRepoInfo();
        let requestOptions = requestMethodStub.args[0][0];

        assert.equal(requestOptions.path, '/repos/nik-garmash/works-for-me');
      });

      it('sends user agent header', async () => {
        githubApi.fetchRepoInfo();

        let requestOptions = requestMethodStub.args[0][0];

        assert.isDefined(requestOptions.headers['User-Agent']);
      });

      it('rejects with error when response status is not 200', (done) => {
        resMock.statusCode = 401;
        resMock.statusMessage = 'Not Authorized';

        githubApi.fetchRepoInfo()
          .catch(err => {
            assert.equal(err.message, resMock.statusMessage);
            done();
          });

        let responseCallback = requestMethodStub.args[0][1];

        responseCallback(resMock);
      });

      it('resolves with js object of response body', (done) => {
        const bodyMock = '{"repo": "info"}';
        const bodyJsonStub = { repo: 'info' };

        resMock.statusCode = 200;

        githubApi.fetchRepoInfo()
          .then(res => {
            assert.deepEqual(res, bodyJsonStub);
            done();
          })
          .catch(done);

        let responseCallback = requestMethodStub.args[0][1];

        responseCallback(resMock);
        resMock.emit('data', bodyMock);
        resMock.emit('end');
      });
    });

    describe('fetchCommitsList()', () => {
      let reqMock;
      let resMock;

      beforeEach(() => {
        reqMock = new EventEmmiter();
        reqMock.end = () => {};
        requestMethodStub.returns(reqMock);
        resMock = new EventEmmiter();
        resMock.setEncoding = () => {};
      });

      it('makes a request to commits endpoint', async () => {
        githubApi.fetchCommitsList();

        let requestOptions = requestMethodStub.args[0][0];

        assert.equal(requestOptions.path, '/repos/nik-garmash/works-for-me/commits');
      });

      it('sends user agent header', async () => {
        githubApi.fetchCommitsList();

        let requestOptions = requestMethodStub.args[0][0];

        assert.isDefined(requestOptions.headers['User-Agent']);
      });

      it('rejects with error when response status is not 200', (done) => {
        resMock.statusCode = 401;
        resMock.statusMessage = 'Not Authorized';

        githubApi.fetchCommitsList()
          .catch(err => {
            assert.equal(err.message, resMock.statusMessage);
            done();
          });

        let responseCallback = requestMethodStub.args[0][1];

        responseCallback(resMock);
      });

      it('fetches commits from all available pages', (done) => {
        const firstBodyMock = '[{"first": "commit"}]';
        const secondBodyMock = '[{"second": "commit"}]';

        const commitsListStub = [{ 'first': 'commit' }, { 'second': 'commit' }];

        githubApi.fetchCommitsList()
          .then(res => {
            assert.deepEqual(res, commitsListStub);
            done();
          })
          .catch(done);

        // first response
        let firstResponseCallback = requestMethodStub.args[0][1];
        let firstRes = new EventEmmiter();

        firstRes.setEncoding = () => {};
        firstRes.statusCode = 200;
        firstRes.headers = {
          'link': '<https://some.com/commits>; rel="next"'
        };
        firstResponseCallback(firstRes);
        firstRes.emit('data', firstBodyMock);
        firstRes.emit('end');

        // second response, handler for previous 'end' event
        // will be triggered asynchronously, so we need to schedule
        // next response for later tick
        setTimeout(() => {
          let secondResponseCallback = requestMethodStub.args[1][1];
          let secondRes = new EventEmmiter();

          secondRes.setEncoding = () => {};
          secondRes.statusCode = 200;
          secondRes.headers = {};

          secondResponseCallback(secondRes);
          secondRes.emit('data', secondBodyMock);
          secondRes.emit('end');
        });
      });
    });
  });
});
