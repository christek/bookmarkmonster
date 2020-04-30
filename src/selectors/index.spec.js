// @flow

import { visibleUrlsSelector } from './index';

describe('visibleUrlsSelector', () => {
  let state;
  beforeEach(() => {
    state = {
      todos: [
        { id: 0, text: 'Test Url 1', completed: false },
        { id: 1, text: 'Test Url 2', completed: true }
      ],
      visibilityFilter: 'SHOW_ALL'
    };
  });

  test('should handle SHOW_ALL', () => {
    expect(visibleUrlsSelector(state)).toEqual([
      { id: 0, text: 'Test Url 1', completed: false },
      { id: 1, text: 'Test Url 2', completed: true }
    ]);
  });

  test('should handle SHOW_ACTIVE', () => {
    state.visibilityFilter = 'SHOW_ACTIVE';
    expect(visibleUrlsSelector(state)).toEqual([
      { id: 0, text: 'Test Url 1', completed: false }
    ]);
  });

  test('should handle SHOW_COMPLETED', () => {
    state.visibilityFilter = 'SHOW_COMPLETED';
    expect(visibleUrlsSelector(state)).toEqual([
      { id: 1, text: 'Test Url 2', completed: true }
    ]);
  });
});
