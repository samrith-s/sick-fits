import React, { Component } from 'react';

import { ALL_ITEMS } from '../gql/queries/items.queries';

import { withQuery } from '../utils/graphql-util';

class Items extends Component {
  render() {
    return (
      <div>
        <p>I am the child of query!</p>
      </div>
    );
  }
}

export default withQuery(ALL_ITEMS)(Items);
