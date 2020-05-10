// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Url from './Url';

const setup = (setupProps = {}) => {
  const defaultProps = {
    text: 'Test todo',
    onClick: jest.fn()
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <Url
      text={props.text}
      onClick={props.onClick}
    />
  );

  return {
    props,
    wrapper
  };
};

describe('Url', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
  
});
