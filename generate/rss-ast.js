const fs = require('fs');
const {
  NEW_SETUP_TAG_TOKEN,
  UPDATE_TAG_TOKEN,
  BODY_CONTEXT,
  BIO_CONTEXT,
  RSS_CONTEXT,
  RSS_ITEM_CONTEXT,
  RSS_ITEM_TITLE_CONTEXT,
  RSS_NEW_SETUP_TITLE_CONTEXT,
  RSS_UPDATE_SETUP_TITLE_CONTEXT,
  RSS_ITEM_METADATA_CONTEXT
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

function generateItemTitle (commitItem) {
  let bioContext = findBioContext(commitItem.setupAst);
  let message = commitItem.commit.message.trim();
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

function generateFeedItem (commitItem) {
  let itemTitle = generateItemTitle(commitItem);

  return {
    type: RSS_ITEM_CONTEXT,
    content: [
      itemTitle,
      {
        type: RSS_ITEM_METADATA_CONTEXT,
        content: commitItem.commit.message
      }
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
