// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import VisibleUrlList from './VisibleUrlList';

const setup = (setupProps = {}) => {
  const store = configureStore()({
    todos: [
      {
        text: 'Test AddUrl',
        completed: false,
        id: 0
      },
      {
        text: 'Test AddUrl',
        completed: true,
        id: 1
      }
    ]
  });
  const wrapper = shallow(<VisibleUrlList store={store} />);

  return {
    store,
    wrapper
  };
};

describe('VisibleUrlList', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

});
