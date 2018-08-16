import Document, { Head, Main } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
        <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
        <Main />
        </body>
        </html>
    )
  }
}
