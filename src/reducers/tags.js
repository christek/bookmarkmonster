// @flow

import type { Tags, Tag, Id, Text } from '../types/tags';
import type { Action } from '../types';

const createTag = (id: Id, text: Text): Tag => ({
  id,
  text,
});

const toggleTag = (tags: Tags, id: Id): Tags =>
  tags.map(t => (t.id !== id ? t : { ...t }));

const tags = (state: Tags = [], action: Action): Tags => {
  switch (action.type) {
    case 'ADD_TAG':
      return [...state, createTag(action.id, action.text)];
    default:
      return state;
  }
};

export default tags;
