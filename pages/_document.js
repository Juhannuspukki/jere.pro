import Document, {Head, Main, NextScript} from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        {(Date.now() % 2 === 0) ? <link rel="stylesheet" href="/static/white.css"/> : <link rel="stylesheet" href="/static/black.css"/> }

        <meta property="og:image" content="/static/img/ogimg.png"/>
        <meta name="application-name" content="jere.pro"/>

        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" sizes="57x57"
              href="/static/img/favicons/apple-touch-icon-57x57.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="114x114"
              href="/static/img/favicons/apple-touch-icon-114x114.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="72x72"
              href="/static/img/favicons/apple-touch-icon-72x72.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="144x144"
              href="/static/img/favicons/apple-touch-icon-144x144.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="60x60"
              href="/static/img/favicons/apple-touch-icon-60x60.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="120x120"
              href="/static/img/favicons/apple-touch-icon-120x120.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="76x76"
              href="/static/img/favicons/apple-touch-icon-76x76.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="152x152"
              href="/static/img/favicons/apple-touch-icon-152x152.png"/>
        <link rel="icon" type="image/png" href="/static/img/favicons/favicon-196x196.png" sizes="196x196"/>
        <link rel="icon" type="image/png" href="/static/img/favicons/favicon-96x96.png" sizes="96x96"/>
        <link rel="icon" type="image/png" href="/static/img/favicons/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="/static/img/favicons/favicon-16x16.png" sizes="16x16"/>
        <link rel="icon" type="image/png" href="/static/img/favicons/favicon-128.png" sizes="128x128"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}
