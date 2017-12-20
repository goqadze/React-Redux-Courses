import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App txt="this is the prop text" cat={5} />, 
	document.getElementById('root')
);

registerServiceWorker();
