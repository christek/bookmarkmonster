// @flow

import type { Id, Text, UrlsAction } from '../types/todos';

let nextUrlId: Id = 0;

export const addUrl = (text: Text): UrlsAction => {
  return {
    type: 'ADD_TODO',
    id: nextUrlId++,
    text
  };
};
