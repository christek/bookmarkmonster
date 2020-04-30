// @flow

import { visibleUrlsSelector } from './index';

describe('visibleUrlsSelector', () => {
  let state;
  beforeEach(() => {
    state = {
      todos: [
        { id: 0, text: 'Test Url 1' },
        { id: 1, text: 'Test Url 2' }
      ],
      visibilityFilter: 'SHOW_ALL'
    };
  });
});
