// @flow

import type { Urls, Url, Id, Text } from '../types/todos';
import type { Action } from '../types';

const createUrl = (id: Id, text: Text): Url => ({
  id,
  text,
  completed: false
});

const todos = (state: Urls = [], action: Action): Urls => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, createUrl(action.id, action.text)];
    default:
      return state;
  }
};

export default todos;
