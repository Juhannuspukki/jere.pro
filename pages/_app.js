import React from 'react';
import App, { Container } from 'next/app';
import { hotjar } from 'react-hotjar';
import "../styles/style.scss"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  
  componentDidMount() {
    hotjar.initialize(1474004, 6);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
