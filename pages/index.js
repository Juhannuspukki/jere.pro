import Footer from '../components/Footer'
import FrontLink from '../components/FrontLinks'
import Project from '../svg/projects.svg'
import Experience from '../svg/experience.svg'
import About from '../svg/about.svg'
import Blog from '../svg/blog.svg'
import Head from 'next/head'
import { withRouter, Router } from 'next/router'
import React from 'react'
import { parseCookies, setCookie } from 'nookies'


class Index extends React.Component {
  static async getInitialProps(ctx) {

    // Parse
    const cookies = parseCookies(ctx);

    // Set
    setCookie(ctx, 'token', 'true', {
      expires: 0,
      path: '/',
    });
    return {
      cookies,
    };
  }

  render () {
    return (
      <div className={"indexContainer"}>
        <Head>
          <title>jere.pro</title>
          <meta property="og:title" content="jere.pro" />
          <meta property="og:description" content="Yo, my name is Jere, and I design stuff. Sometimes I also develop stuff. Such as this website, for example. It's cool, check it out." />
          <meta name="description" content="Yo, my name is Jere, and I design stuff. Sometimes I also develop stuff. Such as this website, for example. It's cool, check it out." />
          <meta property="og:url" content="https://jere.pro"/>
        </Head>
        { this.props.cookies.token !== "true" &&
          <div className={"dotProContainer"}>
            <h1 className={"dotPro"}>jere.pro</h1>
          </div>
        }
        <div className={"container mainMenuContainer animated"}>
          <div className={"row no-gutters"}>
            <FrontLink title={"about"}><About className={"vectorLink"}/></FrontLink>
            <FrontLink title={"projects"}><Project className={"vectorLink"}/></FrontLink>
            <FrontLink title={"experience"}><Experience className={"vectorLink"}/></FrontLink>
            <FrontLink title={"blog"}><Blog className={"vectorLink"}/></FrontLink>
          </div>
        </div>
        <Footer url={""}/>
      </div>
    )
  }
}

export default withRouter(Index)
