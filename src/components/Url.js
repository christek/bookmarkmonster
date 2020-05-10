// @flow

import React from 'react';

import type { Text } from '../types/todos';

export type Props = {
  text: Text
};

const Todo = ({ text }: Props) => (
  <li>
    {text}
  </li>
);

export default Todo;
