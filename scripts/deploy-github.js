const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/hiteshjoshi1/overthink.git',
  },
  () => {
    console.log('Deploy Complete!');
  }
);
