// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUrl } from '../actions/todos';

import type { Dispatch } from '../types';

export type Props = {
  dispatch: Dispatch
};

export type State = {
  value: string
};

class AddUrl extends Component<Props, State> {
  state = {
    value: ''
  };
  handleChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  };
  handleSubmit = (event: Event) => {
    event.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }
    this.props.dispatch(addUrl(this.state.value));
    this.setState({ value: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} />
          <button type="submit">
            Add Url
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(AddUrl);
