// @flow

import reducer from './index';

describe('root reducer', () => {
  it('should combine all reducers', () => {
    expect(reducer({}, { type: '@@INIT' })).toEqual({
      todos: [],
      tags: [],      
      visibilityFilter: 'SHOW_ALL'
    });
  });
});
