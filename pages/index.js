import Head from 'next/head'
import { withRouter } from 'next/router'
import React from 'react'

class Index extends React.Component {
  componentDidMount() {
    const {router} = this.props;
    router.prefetch('/main-menu');
    setTimeout(() => router.push('/main-menu'), 2000)
  }

  render () {
    const { router } = this.props;

    return (
      <div className={"test"}>
        <Head>
          <title>jere.pro</title>
          <meta property="og:title" content="jere.pro" />
          <meta property="og:description" content="Yo, my name is Jere, and I design stuff." />
          <meta name="description" content="Yo, my name is Jere, and I design stuff." />
          <meta property="og:url" content="https://jere.pro"/>
        </Head>
          <a className={"fullPageContainer"}>
            <h1 className={"dotPro"}>jere.pro</h1>
          </a>
      </div>
    )
  }
}

export default withRouter(Index)
