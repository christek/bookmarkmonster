// @flow

import { combineReducers } from 'redux';

import todos from './todos';
import tags from './tags';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  tags
});
