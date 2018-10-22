import React, { Component } from 'react';

import CreateItem from '../components/CreateItem';

export default class Sell extends Component {
  render() {
    return (
      <div>
        <h2>Sell an item</h2>
        <CreateItem />
      </div>
    );
  }
}
