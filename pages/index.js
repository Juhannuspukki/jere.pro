import Footer from '../components/Footer'
import FrontLink from '../components/FrontLinks'
import DotPro from '../components/DotPro'
import Project from '../svg/projects.svg?sprite'
import Experience from '../svg/experience.svg?sprite'
import About from '../svg/about.svg?sprite'
import Blog from '../svg/blog.svg?sprite'
import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import { parseCookies, setCookie } from 'nookies'

const menu = [
  {
    title: "about",
    icon: <About className={"vectorLink"}/>
  },
  {
    title: "projects",
    icon: <Project className={"vectorLink"}/>
  },
  {
    title: "experience",
    icon: <Experience className={"vectorLink"}/>
  },
  {
    title: "blog",
    icon: <Blog className={"vectorLink"}/>
  }
]

const Index = (props) => {
  
  const cookieValue = props.cookies.token !== "true" ? 2800 : 0
  const [renderMenu, setRenderMenu] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderMenu(true)
    }, cookieValue);
    return () => clearTimeout(timer);
  }, []);

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
      { props.cookies.token !== "true" &&
        <div className={"dotProContainer"}>
          <DotPro/>
        </div>
      }
      { renderMenu === true &&
        <>
          <div className={"container mainMenuContainer animated"}>
            <div className={"row no-gutters"}>
              {menu.map((link) => (
                <FrontLink key={link.title} title={link.title}>
                  {link.icon}
                </FrontLink>))
              }
            </div>
          </div>
          <Footer url={""}/>
        </>
      }
    </div>
  )
}

Index.getInitialProps = async (ctx) => {
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

export default Index

