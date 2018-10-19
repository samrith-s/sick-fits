import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

import theme from '../styles/_theme';
import { PageBlock, PageInner } from '../styles/page.styles';

export default class Page extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageBlock>
          <Meta />
          <Header />
          <PageInner>{this.props.children}</PageInner>
        </PageBlock>
      </ThemeProvider>
    );
  }
}
