import React, { Component } from 'react';
import Link from 'next/link';

import { NAV_LINKS } from '../../utils/constants';

export default class Nav extends Component {
  renderNav = () => {
    return NAV_LINKS.map(({ title, link }, index) => (
      <Link href={link} key={index}>
        <a>{title}</a>
      </Link>
    ));
  };
  render() {
    return <div>{this.renderNav()}</div>;
  }
}
