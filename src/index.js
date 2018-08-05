import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Importing FontAwsome for Social Network icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Importing singleton styles for Image Preview
import 'react-image-lightbox/style.css';

library.add(fab, faBars, faEnvelope);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();