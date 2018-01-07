import React from 'react';
import { Provider } from 'react-redux'; 
import App from './App';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact={true} path='/' component={App} />
        <Route exact={true} path='/:filter' component={App} />
      </div>
    </Router>
  </Provider>
)

export default Root;
