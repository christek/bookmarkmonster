// @flow

import type { Tags, Tag, Id, Text } from '../types/tags';
import type { Action } from '../types';

const createTag = (id: Id, text: Text): Tag => ({
  id,
  text,
  completed: false
});

const toggleTag = (tags: Tags, id: Id): Tags =>
  tags.map(t => (t.id !== id ? t : { ...t, completed: !t.completed }));

const tags = (state: Tags = [], action: Action): Tags => {
  switch (action.type) {
    case 'ADD_TAG':
      return [...state, createTag(action.id, action.text)];
    case 'TOGGLE_TAG':
      return toggleTag(state, action.id);
    default:
      return state;
  }
};

export default tags;
