import Link from 'next/link'
import "../styles/style.scss"
import Head from 'next/head'

const Index = () => (
  <div className={"test"}>
    <Head>
      <title>jere.pro</title>
      <meta property="og:title" content="jere.pro" />
      <meta property="og:description" content="Yo, my name is Jere, and I design stuff." />
      <meta name="description" content="Yo, my name is Jere, and I design stuff." />
      <meta property="og:url" content="https://jere.pro"/>
    </Head>
    <Link prefetch href={"/main-menu"}>
      <a className={"fullPageContainer"}>
        <h1 className={"dotPro"}>jere.pro</h1>
      </a>
    </Link>
  </div>
)

export default Index
