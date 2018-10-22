import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { ALL_ITEMS } from '../queries/items.queries';

class Items extends Component {
  render() {
    return (
      <div>
        <p>I am the child of query!</p>
      </div>
    );
  }
}

export default graphql(ALL_ITEMS)(Items);
