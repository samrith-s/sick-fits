import React, { Component } from 'react';
import Link from 'next/link';

export default class Sell extends Component {
  render() {
    return (
      <div>
        Sell!
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    );
  }
}
