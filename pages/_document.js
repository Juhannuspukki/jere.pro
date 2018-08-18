import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
        <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="preload" href="/static/fonts/DP-Regular.otf" as="font" crossorigin="anonymous"/>
          <link rel="preload" href="/static/fonts/DP-Bold.otf" as="font" crossorigin="anonymous"/>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
        </html>
    )
  }
}
