// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { UrlsState, UrlsAction } from './todos';
import type {
  VisibilityFilterAction
} from './visibilityFilter';

export type ReduxInitAction = { type: '@@INIT' };

export type State = UrlsState;

export type Action = ReduxInitAction | UrlsAction | VisibilityFilterAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
