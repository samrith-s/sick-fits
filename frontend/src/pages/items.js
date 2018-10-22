import React, { Component } from 'react';

import withQuery from '../lib/withQuery';

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

export default withQuery(ALL_ITEMS)(Items);
