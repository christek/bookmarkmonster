// @flow

import React from 'react';
import { shallow } from 'enzyme';

import UrlList from './UrlList';

const setup = (setupProps = {}) => {
  const defaultProps = {
    todos: [],
    onUrlClick: jest.fn()
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <UrlList todos={props.todos} onUrlClick={props.onUrlClick} />
  );

  return {
    props,
    wrapper
  };
};

describe('UrlList', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  describe('with todos', () => {
    const { wrapper, props } = setup({
      todos: [
        {
          text: 'Test AddUrl',
          id: 0
        }
      ]
    });

    test('renders a list of todos', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });
});
