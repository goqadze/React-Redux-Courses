import React from 'react';
import { Provider } from 'react-redux'; 
import App from './App';
import NotFound from './NotFound';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact={true} path='/' component={App} />
          <Redirect from='/all' to='/' />
          <Route exact={true} path='/:filter(all|active|completed)' component={App} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default Root;
