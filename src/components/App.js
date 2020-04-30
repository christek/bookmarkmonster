// @flow

import React from 'react';

import AddUrl from '../containers/AddUrl';
import AddTag from '../containers/AddTag';
import VisibleUrlList from '../containers/VisibleUrlList';
import VisibleTagList from '../containers/VisibleTagList';

const App = () => (
  <div>
    <AddUrl />
    <AddTag />
    <VisibleUrlList />
    <VisibleTagList />
  </div>
);

export default App;
