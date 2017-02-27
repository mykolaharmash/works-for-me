const path = require('path');
const fs = require('fs');
const https = require('https');
const querystring = require('querystring');

const URL = 'api.github.com';
const REPO = '/repos/nik-garmash/works-for-me';

function fetch (token, endpoint = '', params = {}) {
  let paramsString = Object.keys(params).length
    ? `?${ querystring.stringify(params) }`
    : '';

  let options = {
    hostname: URL,
    port: 443,
    path: `${ REPO }${ endpoint }${ paramsString }`,
    method: 'GET',
    key: fs.readFileSync(path.resolve(__dirname, '../generate/https/key')),
    cert: fs.readFileSync(path.resolve(__dirname, '../generate/https/cert')),
    headers: {
      'User-Agent': 'Works For Me Generator',
      'Authorization': `token ${ token }`
    }
  };

  return request(options);
}

function request (options) {
  return new Promise((resolve, reject) => {
    let req = https.request(options, res => {
      let body = '';

      if (res.statusCode !== 200) {
        reject(new Error(res.statusMessage));
      }

      res.setEncoding('utf8');

      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    });

    req.on('error', e => reject(e));

    req.end();
  });
}

function fetchRepoInfo (token) {
  return fetch(token);
}

function fetchCommitsList (token, params = {}) {
  return fetch('/commits', params, token);
}

module.exports = function (token) {
  if (!token) {
    throw new Error('GitHub token is required, provide it on TOKEN env variable');
  }

  return {
    fetchRepoInfo: () => fetchRepoInfo(token),
    fetchCommitsList: (params) => fetchCommitsList(params, token)
  };
};
