const proxyquire = require('proxyquire')
const sinon = require('sinon')
const { assert } = require('chai')

const getCommitsListStub = sinon.stub()

const getSetupMetadata = proxyquire('../generate/get-setup-metadata', {
  '../lib/git-api': { getCommitsList: getCommitsListStub }
})

describe('get setup metadata', () => {
  afterEach(() => {
    getCommitsListStub.reset()
  })

  it(`gets updates list which contains of commits with 'update:' in title
       while ignoring fix commits and commits which don't follow convention`, () => {
    const commitsListMock = [
      {
        date: '2017-02-12T17:03:01+02:00',
        message: 'fix: typo'
      },
      {
        date: '2017-01-21T22:21:12+02:00',
        message: 'update: Changed my todo app'
      },
      {
        date: '2017-01-20T22:21:12+02:00',
        message: 'commit not falling to convention'
      },
      {
        date: '2017-01-10T12:14:04+02:00',
        message: 'update: Changed my editor'
      },
      {
        date: '2017-01-03T12:04:11+02:00',
        message: 'fix: typo fix'
      },
      {
        date: '2016-12-29T17:54:01+02:00',
        message: 'Initial'
      }
    ]
    const metadataStub = {
      updates: [
        {
          date: '2017-01-21T22:21:12+02:00',
          message: 'update: Changed my todo app'
        },
        {
          date: '2017-01-10T12:14:04+02:00',
          message: 'update: Changed my editor'
        }
      ]
    }
    const setupPathMock = '/some/path/setups/some-guy.setup'

    getCommitsListStub
      .withArgs(setupPathMock)
      .returns(commitsListMock)

    let metadata = getSetupMetadata(setupPathMock)

    assert.deepEqual(metadata.updates, metadataStub.updates)
  })

  it(`gets initial commit`, () => {
    const commitsListMock = [
      {
        date: '2017-02-12T17:03:01+02:00',
        message: 'fix: typo'
      },
      {
        date: '2017-01-10T12:14:04+02:00',
        message: 'update: Changed my editor'
      },
      {
        date: '2017-01-20T22:21:12+02:00',
        message: 'commit not falling to convention'
      },
      {
        date: '2016-12-29T17:54:01+02:00',
        message: 'Initial'
      }
    ]
    const metadataStub = {
      initial: {
        date: '2016-12-29T17:54:01+02:00',
        message: 'Initial'
      }
    }
    const setupPathMock = '/some/path/setups/some-guy.setup'

    getCommitsListStub
      .withArgs(setupPathMock)
      .returns(commitsListMock)

    let metadata = getSetupMetadata(setupPathMock)

    assert.deepEqual(metadata.initial, metadataStub.initial)
  })

  it('throws an error if there are no commits for setup', () => {
    const setupFilenameMock = 'some-guy.setup'

    getCommitsListStub
      .withArgs(`setups/${setupFilenameMock}`)
      .returns([])

    let fn = () => getSetupMetadata(setupFilenameMock)

    assert.throws(fn)
  })
})
