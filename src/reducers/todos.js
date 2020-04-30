// @flow

import type { Todos, Todo, Id, Text } from '../types/todos';
import type { Action } from '../types';

const createTodo = (id: Id, text: Text): Todo => ({
  id,
  text,
  completed: false
});

const todos = (state: Todos = [], action: Action): Todos => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, createTodo(action.id, action.text)];
    default:
      return state;
  }
};

export default todos;
