// @flow

import { addTodo } from '../actions/todos';
import todos from './todos';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todos(undefined, { type: '@@INIT' })).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    expect(todos([], addTodo('Run the tests'))).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ]);

    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }
        ],
        addTodo('Use Redux')
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ]);

    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 1
          }
        ],
        addTodo('Fix the tests')
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 1
      },
      {
        text: 'Fix the tests',
        completed: false,
        id: 2
      }
    ]);
  });

});
