// @flow

export type Id = number;

export type Text = string;

export type Url = {
  +id: Id,
  +text: Text,
};

export type Tag = {
  +id: Id,
  +text: Text,
};

export type Urls = Array<Url>;
export type Tags = Array<Tag>;

export type UrlsState = {
  +todos: Urls,
  +tags: Tags,
};

export type UrlsAction =
  | { type: 'ADD_TODO', +id: Id, +text: Text }
