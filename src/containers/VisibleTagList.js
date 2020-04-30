// @flow

import { connect } from 'react-redux';

import { visibleTagsSelector } from '../selectors';
import TagsList from '../components/TagsList';

import type { State, Dispatch } from '../types';

const mapStateToProps = (state: State) => {
  return {
    tags: visibleTagsSelector(state)
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

export default connector(TagsList);
