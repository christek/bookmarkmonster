// @flow

import { connect } from 'react-redux';

import { tagsSelector } from '../selectors';
import TagList from '../components/TagList';

import type { State, Dispatch } from '../types';

const mapStateToProps = (state: State) => {
  return {
    tags: tagsSelector(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onTagClick: id => {
      console.log('click;');
    }
  };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TagList);
