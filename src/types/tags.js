// @flow

export type Id = number;

export type Text = string;

export type Tag = {
  +id: Id,
  +text: Text,
};

export type Tags = Array<Tag>;

export type TagsState = {
  +tags: Tags
};

export type TagsAction =
  | { type: 'ADD_TAG', +id: Id, +text: Text }
  | { type: 'TOGGLE_TAG', +id: Id };
