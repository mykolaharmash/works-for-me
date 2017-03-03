const path = require('path');
const url = require('url');
const fs = require('fs');
const https = require('https');
const querystring = require('querystring');

const BASE_URL = 'api.github.com';
const REPO = '/repos/nik-garmash/works-for-me';

function parseLinkHeader (linkHeaders = '') {
  const LINK_PATTERN = /<(.+)>; rel="(\w+)"/;
  let linksList = linkHeaders.split(',');

  return linksList.map(linkItem => {
    let [link, url, tag] = linkItem.match(LINK_PATTERN);

    return { link, url, tag };
  });
}

function fetch (token, endpoint = '', params = {}) {
  let paramsString = Object.keys(params).length
    ? `?${ querystring.stringify(params) }`
    : '';

  let options = {
    hostname: BASE_URL,
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

/**
 * Fetches endpoind itself plus all following pages
 * @param token
 * @param endpoint
 * @param params
 * @returns {Promise.<Array<response>>}
 */
async function fetchPaginated (token, endpoint, params) {
  let pagesResponces = [];
  let response = await fetch(token, endpoint, params);

  pagesResponces.push(response);

  if (response.headers['link']) {
    let links = parseLinkHeader(response.headers['link']);
    let nextLink = links.find(linkItem => linkItem.tag === 'next');

    if (nextLink) {
      let parsedUrl = url.parse(nextLink.url, true);
      pagesResponces = pagesResponces.concat(
        await fetchPaginated(token, endpoint, parsedUrl.query)
      );
    }
  }

  return pagesResponces;
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
      res.on('end', () => {
        let jsonBody;

        try {
          jsonBody = JSON.parse(body);
        } catch (e) {
          reject(e);
        }

        resolve({
          headers: res.headers,
          body: jsonBody
        });
      });
    });

    req.on('error', e => reject(e));

    req.end();
  });
}

async function fetchRepoInfo (token) {
  return (await fetch(token)).body;
}

async function fetchCommitsList (token, params = {}) {
  let responsesList = await fetchPaginated(token, '/commits', params)
  
  return responsesList.reduce((commits, res) => {
    return commits.concat(res.body);
  }, []);
}

module.exports = function (token) {
  if (!token) {
    throw new Error('GitHub token is required, provide it on TOKEN env variable');
  }

  return {
    fetchRepoInfo: () => fetchRepoInfo(token),
    fetchCommitsList: (params) => fetchCommitsList(token, params)
  };
};
