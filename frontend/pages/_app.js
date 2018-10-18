import App, { Container } from 'next/app';

export default class SickFits extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <p>Hey, I'm on every page</p>
        <Component />
      </Container>
    );
  }
}
