import Link from 'next/link'
import "../styles/style.scss"
import Head from 'next/head'

const Index = () => (
  <div className={"test"}>
    <Head>
      <title>jere.pro</title>
      <meta property="og:title" content="jere.pro" />
    </Head>
    <Link prefetch href={"/main-menu"}>
      <a className={"fullPageContainer"}>
        <h1 className={"dotPro"}>jere.pro</h1>
      </a>
    </Link>
  </div>
)

export default Index
