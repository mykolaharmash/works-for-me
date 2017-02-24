const path = require('path');
const fs = require('fs');
const https = require('https');
const querystring = require('querystring');

const TOKEN = process.env.TOKEN;
const URL = 'api.github.com';
const REPO = '/repos/nik-garmash/works-for-me';

if (!TOKEN) {
  throw new Error('GitHub token is required, provide it on TOKEN env variable');
}

function fetchCommitsList (params = {}) {
  let options = {
    hostname: URL,
    port: 443,
    path: `${ REPO }/commits?${ querystring.stringify(params) }`,
    method: 'GET',
    key: fs.readFileSync(path.resolve(__dirname, './https/key')),
    cert: fs.readFileSync(path.resolve(__dirname, './https/cert')),
    headers: {
      'User-Agent': 'Works For Me Generator'
    }
  };

  return new Promise((resolve, reject) => {
    let req = https.request(options, res => {
      let body = '';

      res.setEncoding('utf8');

      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    });

    req.on('error', e => reject(e));

    req.end();
  });
}

module.exports = {
  fetchCommitsList
};
