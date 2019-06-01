import Footer from '../components/Footer'
import FrontLink from '../components/FrontLinks'
import Project from '../svg/projects.svg'
import Experience from '../svg/experience.svg'
import About from '../svg/about.svg'
import Blog from '../svg/blog.svg'
import Head from 'next/head'
import React from 'react'

const Index = () => (
  <div className={"test"}>
    <Head>
      <title>jere.pro - Main menu</title>
      <meta property="og:title" content="jere.pro - Main menu" />
    </Head>
    <div className={"container mainMenuContainer animated"}>
      <div className={"row no-gutters"}>
        <FrontLink title={"about"}><About className={"vectorLink"}/></FrontLink>
        <FrontLink title={"projects"}><Project className={"vectorLink"}/></FrontLink>
        <FrontLink title={"experience"}><Experience className={"vectorLink"}/></FrontLink>
        <FrontLink title={"blog"}><Blog className={"vectorLink"}/></FrontLink>
      </div>
    </div>
    <Footer url={"/main-menu"}/>
  </div>
)

export default Index
