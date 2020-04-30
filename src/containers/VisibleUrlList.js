// @flow

import { connect } from 'react-redux';

import { visibleUrlsSelector } from '../selectors';
import UrlList from '../components/UrlList';

import type { State, Dispatch } from '../types';

const mapStateToProps = (state: State) => {
  return {
    todos: visibleUrlsSelector(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onUrlClick: id => {
      console.log('click');
    }
  };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(UrlList);
