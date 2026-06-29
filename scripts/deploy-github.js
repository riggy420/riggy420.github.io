// var ghpages = import('gh-pages');
import ghpages from 'gh-pages';

ghpages.publish(
    'public',
    {
        branch: 'main',
        repo: 'riggy420.github.io',
    },
    () => {
        console.log('Deploy Complete!')
    }
)