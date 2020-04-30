// @flow

import React from 'react';

import Tag from './Tag';

import type { Tags, Id } from '../types/tags';

export type Props = {
  tags: Tags,
  onUrlClick: (id: Id) => void
};

const TagList = ({ tags, onUrlClick }: Props) => (
  <ul>
    {tags.map(tag => (
      <Tag key={tag.id} {...tag} onClick={() => onUrlClick(tag.id)} />
    ))}
  </ul>
);

export default TagList;
