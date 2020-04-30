// @flow

export type Id = number;

export type Text = string;

export type Url = {
  +id: Id,
  +text: Text,
  +completed: boolean
};

export type Urls = Array<Url>;

export type UrlsState = {
  +todos: Urls
};

export type UrlsAction =
  | { type: 'ADD_TODO', +id: Id, +text: Text }
