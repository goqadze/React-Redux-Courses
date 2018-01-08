import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = ({ match }) => (
  <div>
    <AddTodo />
    <VisibleTodoList 
      filter={match.params.filter || 'all'}
    />
    <Footer />
  </div>
);

export default App;
