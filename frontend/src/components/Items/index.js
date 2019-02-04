import React, { Component } from 'react';

import Item from './Item';

import { ALL_ITEMS } from '../../gql/queries/items.queries';

import { withQuery } from '../../utils/graphql-util';

import { ItemsBlock } from '../../styles/items.styles';

class Items extends Component {
  renderItems = (data = {}) => {
    const { items } = data;

    return items.map(item => <Item data={item} key={item.id} />);
  };

  render() {
    const { payload = {} } = this.props;
    const { loading, error, data } = payload;

    if (loading) {
      return <div>Loading</div>;
    }

    if (error) {
      return <div>Error!</div>;
    }

    return <ItemsBlock>{this.renderItems(data)}</ItemsBlock>;
  }
}

export default withQuery(ALL_ITEMS)(Items);
