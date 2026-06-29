// var ghpages = import('gh-pages');
import {ghpages} from 'gh-pages';

ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'riggy420.github.io',
    },
    () => {
        console.log('Deploy Complete!')
    }
)