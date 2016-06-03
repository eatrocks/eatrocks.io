import { configure } from '@kadira/storybook';

function loadStories() {
    require('../src/app/components/Welcome/WelcomeStory.js');
}

configure(loadStories, module);
