// @flow

import React from 'react'

import Url from './Url'

import type { Urls, Id } from '../types/todos'

export type Props = {
  todos: Urls,
  onUrlClick: (id: Id) => void,
}

const UrlList = ({ todos, onUrlClick }: Props) => (
  <ul>
    {todos.map((todo) => (
      <div>
        <Url key={todo.id} {...todo} />
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
      </div>
    ))}
  </ul>
)

export default UrlList
