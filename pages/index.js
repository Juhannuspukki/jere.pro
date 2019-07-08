import Footer from '../components/Footer'
import FrontLink from '../components/FrontLinks'
import DotPro from '../components/DotPro'
import Project from '../svg/projects.svg'
import Experience from '../svg/experience.svg'
import About from '../svg/about.svg'
import Blog from '../svg/blog.svg'
import Head from 'next/head'
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

  constructor(props) {
    super(props);
    this.state = {siteVisited: false};
  }


  componentDidMount() {
   setTimeout(() => {
    return (
      this.setState(
        {renderMenu: true}
        )
      )
    }, this.props.cookies.token !== "true" ? 2200 : 0)

  }

  render (state) {
    return (
      <div className={"indexContainer"}>
        <Head>
          <title>jere.pro</title>
          <meta property="og:title" content="jere.pro" />
          <meta property="og:description" content="Yo, my name is Jere, and I design stuff. Such as this website, for example. It's cool, check it out. Go on. Click. I dare you." />
          <meta name="description" content="Yo, my name is Jere, and I design stuff. Such as this website, for example. It's cool, check it out. Go on. Click. I dare you." />
          <meta property="og:url" content="https://jere.pro"/>
        </Head>
        <h1 className={"hidden"}>jere.pro - Main Menu</h1>
        { this.props.cookies.token !== "true" &&
          <div className={"dotProContainer"}>
            <DotPro/>
          </div>
        }
        { this.state.renderMenu === true &&
          <div className={"container mainMenuContainer animated"}>
            <div className={"row no-gutters"}>
            <FrontLink title={"about"}><About className={"vectorLink"}/></FrontLink>
            <FrontLink title={"projects"}><Project className={"vectorLink"}/></FrontLink>
            <FrontLink title={"experience"}><Experience className={"vectorLink"}/></FrontLink>
            <FrontLink title={"blog"}><Blog className={"vectorLink"}/></FrontLink>
            </div>
          </div>
        }
        { this.state.renderMenu === true &&
          <Footer url={""}/>
        }
      </div>
    )
  }
}

export default Index
