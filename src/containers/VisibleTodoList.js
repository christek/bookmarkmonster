// @flow

import { connect } from 'react-redux';

import { visibleTodosSelector } from '../selectors';
import TodoList from '../components/TodoList';

import type { State, Dispatch } from '../types';

const mapStateToProps = (state: State) => {
  return {
    todos: visibleTodosSelector(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onTodoClick: id => {
      console.log('click');
    }
  };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TodoList);
