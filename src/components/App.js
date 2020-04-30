// @flow

import React from 'react';

import AddTodo from '../containers/AddTodo';
import AddTag from '../containers/AddTag';
import VisibleTodoList from '../containers/VisibleTodoList';
import VisibleTagList from '../containers/VisibleTagList';

const App = () => (
  <div>
    <AddTodo />
    <AddTag />
    <VisibleTodoList />
    <VisibleTagList />
  </div>
);

export default App;
