import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';

import Nav from './Nav';

import { HeaderBlock, NavBlock, Logo } from '../../styles/header.styles';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default class Header extends Component {
  render() {
    return (
      <HeaderBlock>
        <NavBlock>
          <Link href="/">
            <Logo>Sick Fits!</Logo>
          </Link>
          <Nav />
        </NavBlock>
        <div className="sub-bar">Search</div>
        <div>Cart</div>
      </HeaderBlock>
    );
  }
}
