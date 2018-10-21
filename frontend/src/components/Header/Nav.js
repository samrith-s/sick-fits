import React, { Component } from 'react';
import Link from 'next/link';

import { NAV_LINKS } from '../../utils/constants';

import { NavMenu, NavItem } from '../../styles/header.styles';

export default class Nav extends Component {
  renderNav = () => {
    return NAV_LINKS.map(({ title, link }, index) => (
      <NavItem key={index}>
        <Link href={link}>
          <a>{title}</a>
        </Link>
      </NavItem>
    ));
  };
  render() {
    return <NavMenu>{this.renderNav()}</NavMenu>;
  }
}
