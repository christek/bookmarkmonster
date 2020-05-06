// @flow

import React, { useState } from 'react';

import Url from './Url'

import type { Urls, Id } from '../types/todos'

export type Props = {
  todos: Urls,
  onUrlClick: (id: Id) => void,
}

const UrlList = ({ todos, tags, onUrlClick }: Props) => {
  const [count, setCount] = useState(0);

  const handleChange = (value) => {
      console.log('change' + value);
  }

  return (
  <ul>
    {todos.map((todo) => (
      <div>
        <Url key={todo.id} {...todo} />
        <select onChange={e => handleChange(e.target.value)}>
          {tags.map((tag) => (
            <option key={tag.id} value={tag.id}>{tag.text}</option>           
          ))}
        </select>
        <button onClick={() => onUrlClick(todo.id)}>+</button>
      </div>
    ))}
  </ul>
)}

export default UrlList
