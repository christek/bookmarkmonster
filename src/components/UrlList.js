// @flow

import React from 'react'

import Url from './Url'

import type { Urls, Id } from '../types/todos'

export type Props = {
  todos: Urls,
  onUrlClick: (id: Id) => void,
}

const UrlList = ({ todos, tags, onUrlClick }: Props) => (
  <ul>
    {todos.map((todo) => (
      <div>
        <Url key={todo.id} {...todo} />
        <select>
          {tags.map((tag) => (
            <option value={tag.text}>{tag.text}</option>
          ))}
        </select>
      </div>
    ))}
  </ul>
)

export default UrlList
