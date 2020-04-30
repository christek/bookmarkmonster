// @flow

import React from 'react';

import type { Text } from '../types/todos';

export type Props = {
  onClick: () => void,
  text: Text
};

const Todo = ({ onClick, text }: Props) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
);

export default Todo;
