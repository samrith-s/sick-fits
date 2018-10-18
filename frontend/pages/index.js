import React, { Component } from 'react';
import Link from 'next/link';

export default class Home extends Component {
  render() {
    return (
      <div>
        Home!
        <Link href="/sell">
          <a>Sell</a>
        </Link>
      </div>
    );
  }
}
