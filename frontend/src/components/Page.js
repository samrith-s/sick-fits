import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

import GlobalStyle from '../styles/_global-style';
import theme from '../styles/_theme';
import { PageBlock, PageInner } from '../styles/page.styles';

export default class Page extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <PageBlock>
            <Meta />
            <Header />
            <PageInner>{this.props.children}</PageInner>
          </PageBlock>
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    );
  }
}
