// @flow

import React from 'react';

import type { Text } from '../types/tagss';

export type Props = {
  text: Text
};

const Tag = ({ text }: Props) => (
  <li>
    {text}
  </li>
);

export default Tag;
