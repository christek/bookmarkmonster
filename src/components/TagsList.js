// @flow

import React from 'react';

import Tag from './Tag';

import type { Tags, Id } from '../types/tags';

export type Props = {
  tags: Tags,
  onTodoClick: (id: Id) => void
};

const TagsList = ({ tags, onTodoClick }: Props) => (
  <ul>
    {tags.map(tag => (
      <Tag key={tag.id} {...tag} onClick={() => onTodoClick(tag.id)} />
    ))}
  </ul>
);

export default TagsList;
