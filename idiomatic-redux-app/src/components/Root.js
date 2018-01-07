import React from 'react';
import { Provider } from 'react-redux'; 
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root;
