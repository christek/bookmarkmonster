// @flow

import { connect } from 'react-redux';

import { tagsSelector } from '../selectors';
import TagList from '../components/TagList';

import type { State } from '../types';

const mapStateToProps = (state: State) => {
  return {
    tags: tagsSelector(state)
  };
};

const connector = connect(
  mapStateToProps,
);

export default connector(TagList);
