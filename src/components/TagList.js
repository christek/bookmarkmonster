// @flow

import React from 'react';

import Tag from './Tag';

import type { Tags } from '../types/tags';

export type Props = {
  tags: Tags,
};

const TagList = ({ tags, onUrlClick }: Props) => (
  <ul>
    {tags.map(tag => (
      <Tag key={tag.id} {...tag} />
    ))}
  </ul>
);

export default TagList;
