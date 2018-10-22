/*
  Author: Samrith Shankar
  Description: withQuery is an HOC that helps mitigate the need for render props while using react-apollo Query
*/

import React, { Component } from 'react';
import { Query } from 'react-apollo';

const withQuery = query => InputComponent =>
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

export default withQuery;
