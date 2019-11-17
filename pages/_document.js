import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  
  render() {
    return (
      <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta property="og:image" content="/img/ogimg.png"/>
        <meta name="application-name" content="jere.pro"/>
        <link rel="manifest" href="/manifest.json" />
        
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" sizes="57x57"
              href="/img/favicons/apple-touch-icon-57x57.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="114x114"
              href="/img/favicons/apple-touch-icon-114x114.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="72x72"
              href="/img/favicons/apple-touch-icon-72x72.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="144x144"
              href="/img/favicons/apple-touch-icon-144x144.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="60x60"
              href="/img/favicons/apple-touch-icon-60x60.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="120x120"
              href="/img/favicons/apple-touch-icon-120x120.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="76x76"
              href="/img/favicons/apple-touch-icon-76x76.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="152x152"
              href="/img/favicons/apple-touch-icon-152x152.png"/>
        <link rel="icon" type="image/png" href="/img/favicons/favicon-196x196.png" sizes="196x196"/>
        <link rel="icon" type="image/png" href="/img/favicons/favicon-96x96.png" sizes="96x96"/>
        <link rel="icon" type="image/png" href="/img/favicons/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="/img/favicons/favicon-16x16.png" sizes="16x16"/>
        <link rel="icon" type="image/png" href="/img/favicons/favicon-128.png" sizes="128x128"/>
      </Head>
      <body className={(Date.now() % 2 === 0) ? "white" : "black" }>
      <Main/>
      <NextScript/>
      </body>
      </Html>
    )
  }
}
