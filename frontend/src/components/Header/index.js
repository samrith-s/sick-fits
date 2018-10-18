import React, { Component } from 'react';
import Link from 'next/link';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="bar">
          <Link href="/">
            <a>Sick Fits!</a>
          </Link>
          <div className="nav">
            <Nav />
          </div>
        </div>
        <div className="sub-bar">Search</div>
        <div>Cart</div>
      </div>
    );
  }
}
