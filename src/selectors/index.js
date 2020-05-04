// @flow

import { createSelector } from 'reselect';

import type { State } from '../types';

// TODO: do we really need seperate selectors?

export const todosSelector = (state: State) => state.todos;
export const tagsSelector = (state: State) => state.tags;
const visibilityFilterSelector = (state: State) => state.visibilityFilter;
