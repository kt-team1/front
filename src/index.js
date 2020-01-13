import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './css/index.css';
<<<<<<< HEAD
import 'semantic-ui-css/semantic.min.css';
=======
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';

>>>>>>> 7710cee156bd21ab3c6c80a4caa5049c1fb058d5

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();