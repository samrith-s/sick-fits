import React, { PureComponent } from 'react';

import { ItemBlock } from '../../styles/items.styles';

export default class Item extends PureComponent {
  render() {
    const { title, largeImage, price } = this.props.data;

    return (
      <ItemBlock>
        <img src={largeImage} alt="item image" />
        <p>{title}</p>
        <p>{price}</p>
      </ItemBlock>
    );
  }
}
