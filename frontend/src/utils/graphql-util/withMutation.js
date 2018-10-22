/*
  Author: Samrith Shankar

  TODO: Add description
*/

import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

export default mutation => InputComponent =>
  class extends Component {
    static displayName = `withMutation(${InputComponent.name})`;

    render() {
      return (
        <Mutation mutation={mutation}>
          {(mutate, payload) => (
            <InputComponent payload={payload} mutate={mutate} />
          )}
        </Mutation>
      );
    }
  };
