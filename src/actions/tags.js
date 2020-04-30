// @flow

import type { Id, Text, TagsAction } from '../types/tags';

let nextTagId: Id = 0;

export const addTag = (text: Text): TagsAction => {
  return {
    type: 'ADD_TAG',
    id: nextTagId++,
    text
  };
};