// @flow

import { connect } from 'react-redux';

import { todosSelector, tagsSelector } from '../selectors';
import UrlList from '../components/UrlList';

import type { State } from '../types';

const mapStateToProps = (state: State) => {
  return {
    todos: todosSelector(state),
    tags: tagsSelector(state)
  };
};

const connector = connect(
  mapStateToProps
);

export default connector(UrlList);
