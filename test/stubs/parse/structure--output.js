module.exports = [
  {
    type: 'bio',
    content: [
      {
        type: 'bio-line',
        title: 'name:',
        content: [
          { type: 'word', content: 'John' },
          { type: 'word', content: 'Doe' }
        ]
      }
    ]
  },
  {
    type: 'setup',
    content: [
      {
        type: 'env-line',
        title: [
          { type: 'word', content: 'desktop' }
        ],
        description: [
          { type: 'word', content: 'desktop' },
          { type: 'word', content: 'env' }
          { type: 'word', content: 'description' }
        ]
      },
      {
        type: 'comment-line',
        content: [
          { type: 'word', content: 'comment' }
          { type: 'word', content: 'one' }
        ]
      },
      {
        type: 'tool-line',
        purpose: 'editor:',
        title: [
          { type: 'word', content: 'Sublime' },
          { type: 'word', content: 'Text' },
          { type: 'word', content: '3' }
        ],
        description: [
          { type: 'word', content: 'tool' },
          { type: 'word', content: 'description' }
        ]
      }
    ]
  }

];