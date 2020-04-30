// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import VisibleTodoList from './VisibleTodoList';

const setup = (setupProps = {}) => {
  const store = configureStore()({
    todos: [
      {
        text: 'Test AddTodo',
        completed: false,
        id: 0
      },
      {
        text: 'Test AddTodo',
        completed: true,
        id: 1
      }
    ]
  });
  const wrapper = shallow(<VisibleTodoList store={store} />);

  return {
    store,
    wrapper
  };
};

describe('VisibleTodoList', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

});
