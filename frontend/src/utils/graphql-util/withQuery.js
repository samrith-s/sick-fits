/*
  Author: Samrith Shankar

  TODO: Add description
*/

import React, { Component } from 'react';
import { Query } from 'react-apollo';

export default query => InputComponent =>
  class extends Component {
    static displayName = `withQuery(${InputComponent.name})`;

    render() {
      return (
        <Query query={query}>
          {payload => <InputComponent payload={payload} />}
        </Query>
      );
    }
  };
