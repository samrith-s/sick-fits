import React, { Component } from 'react';
import Link from 'next/link';

import Nav from './Nav';

import { Logo, HeaderBlock } from '../../styles/header.styles';

export default class Header extends Component {
  render() {
    return (
      <div>
        <HeaderBlock>
          <Link href="/">
            <Logo>Sick Fits!</Logo>
          </Link>
          <div className="nav">
            <Nav />
          </div>
        </HeaderBlock>
        <div className="sub-bar">Search</div>
        <div>Cart</div>
      </div>
    );
  }
}
