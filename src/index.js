import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandPage from './views/landPage/LandPage';
import registerServiceWorker from './registerServiceWorker';

import Login from './views/login/Login'

ReactDOM.render(<LandPage />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Login/>, document.getElementById('root'));
registerServiceWorker();
