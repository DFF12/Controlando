import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandPage from './views/landPage/LandPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LandPage />, document.getElementById('root'));
registerServiceWorker();
