import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BlogObject from '../components/BlogObject'
import Head from 'next/head'
import React from 'react'

const Index = (props) => (
  <div className={"test"}>
    <Head>
      <title>jere.pro - Blog</title>
      <meta property="og:title" content="jere.pro - Blog" />
    </Head>
    <NavBar url={"/main-menu"}/>
    <div className={"container projectContainer animated"}>
      <h1>SOON™</h1>
    </div>
    <Footer url={"/main-menu"}/>
  </div>
)

export default Index
