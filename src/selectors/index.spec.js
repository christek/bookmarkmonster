// @flow

import { todosSelector } from './index';

describe('visibleUrlsSelector', () => {
  let state;
  beforeEach(() => {
    state = {
      todos: [
        { id: 0, text: 'Test Url 1' },
        { id: 1, text: 'Test Url 2' }
      ],
    };
  });

  test('should handle SHOW_ALL', () => {
    expect(todosSelector(state)).toEqual([
      { id: 0, text: 'Test Url 1' },
      { id: 1, text: 'Test Url 2' }
    ]);
  });

});


