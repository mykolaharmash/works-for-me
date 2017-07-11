const fs = require('fs');
const {
  BASE_URL,
  NEW_SETUP_TAG_TOKEN,
  UPDATE_TAG_TOKEN,
  BODY_CONTEXT,
  BIO_CONTEXT,
  RSS_CONTEXT,
  RSS_ITEM_CONTEXT,
  RSS_ITEM_TITLE_CONTEXT,
  RSS_NEW_SETUP_TITLE_CONTEXT,
  RSS_UPDATE_SETUP_TITLE_CONTEXT,
  RSS_ITEM_DESCRIPTION_CONTEXT,
  RSS_ITEM_AUTHOR_CONTEXT,
  RSS_ITEM_PUB_DATE_CONTEXT,
  RSS_ITEM_ID_CONTEXT,
  RSS_ITEM_LINK_CONTEXT,
  COMMIT_MESSAGE_CONTEXT,
  COMMIT_DATE_CONTEXT,
  COMMIT_HASH_CONTEXT,
  SETUP_URL_CONTEXT
} = require('../lib/constants');

function findBioContext (setupAst) {
  let bodyContext = setupAst
    .content
    .find(context => context.type === BODY_CONTEXT);

  if (!bodyContext) {
    return;
  }

  return bodyContext
    .content
    .find(context => context.type === BIO_CONTEXT);
}

/**
 * Normalizes every commit to setup AST item
 *
 * @param setupsAst — array of setups AST
 * @param setupsMetadata — array of setups metadata
 * @returns {Array} — array of commit items, each one contains
 * commit data and setup AST data which commit belongs to
 */
function generateCommitsList (setupsAst, setupsMetadata) {
  return setupsMetadata.reduce((list, metadata, index) => {
    let commits = metadata.allCommits.map(commit => {
      let setup = setupsAst[index];

      return {
        commit,
        key: setup.name,
        setupAst: setup.content
      };
    });

    return list.concat(commits);
  }, []);
}

function generateItemTitle (setupAst, commit) {
  let bioContext = findBioContext(setupAst);
  let message = commit.message.trim();
  let titleTypeContext;

  if (message.startsWith(NEW_SETUP_TAG_TOKEN)) {
    titleTypeContext = {
      type: RSS_NEW_SETUP_TITLE_CONTEXT,
      content: 'New setup:'
    };
  } else {
    titleTypeContext = {
      type: RSS_UPDATE_SETUP_TITLE_CONTEXT,
      content: 'Updated setup:'
    };
  }

  return {
    type: RSS_ITEM_TITLE_CONTEXT,
    content: [
      titleTypeContext,
      bioContext
    ]
  };
}

function generateItemDescription (commit) {
  return {
    type: RSS_ITEM_DESCRIPTION_CONTEXT,
    content: [
      {
        type: COMMIT_MESSAGE_CONTEXT,
        content: commit.message
      }
    ]
  };
}

function generateItemAuthor (setupAst) {
  let bioContext = findBioContext(setupAst);

  return {
    type: RSS_ITEM_AUTHOR_CONTEXT,
    content: [
      bioContext
    ]
  };
}

function generateItemPubDate (commit) {
  return {
    type: RSS_ITEM_PUB_DATE_CONTEXT,
    content: [
      {
        type: COMMIT_DATE_CONTEXT,
        content: commit.date
      }
    ]
  };
}

function generateItemId (commit) {
  return {
    type: RSS_ITEM_ID_CONTEXT,
    content: [
      {
        type: COMMIT_HASH_CONTEXT,
        content: commit.hash
      }
    ]
  };
}

function generateItemLink (setupKey) {
  return {
    type: RSS_ITEM_LINK_CONTEXT,
    content: [
      {
        type: SETUP_URL_CONTEXT,
        content: `${ BASE_URL }/setups/${ setupKey }/${ setupKey }.html`
      }
    ]
  };
}

function generateFeedItem (commitItem) {
  let title = generateItemTitle(commitItem.setupAst, commitItem.commit);
  let description = generateItemDescription(commitItem.commit);
  let author = generateItemAuthor(commitItem.setupAst);
  let pubDate = generateItemPubDate(commitItem.commit);
  let id = generateItemId(commitItem.commit);
  let link = generateItemLink(commitItem.key);

  return {
    type: RSS_ITEM_CONTEXT,
    content: [
      title,
      description,
      author,
      pubDate,
      id,
      link
    ]
  };
}

function generateFeed (itemsAst = []) {
  return {
    type: RSS_CONTEXT,
    content: itemsAst
  };
}

function isRssCommit (commitItem) {
  let message = commitItem.commit.message.trim();

  return message.startsWith(NEW_SETUP_TAG_TOKEN)
    || message.startsWith(UPDATE_TAG_TOKEN);
}

module.exports = function (setupsAst = [], setupsMetadata = []) {
  let commitsList = generateCommitsList(setupsAst, setupsMetadata);
  let feedItemsAst = commitsList
    .filter(isRssCommit)
    .map(generateFeedItem);

  return generateFeed(feedItemsAst);
};
