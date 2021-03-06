// global css
import '../../sass/main.scss';

// classes you want to use immediately
import {App} from './some-module/not-found';

/**
 * entrance code for SPA
 */
function main() {
  document.title = 'Loading...';

  const app = new App({
    dom: document.querySelector('.container')
  });

  app.writeToConsole();
}

document.addEventListener('DOMContentLoaded', main);
