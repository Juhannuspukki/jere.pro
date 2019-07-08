import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ExperienceGraph from '../components/ExperienceGraph'
import Head from 'next/head'
import React from 'react'
import {ParentSize} from "@vx/responsive";
import ExperienceContent from "../content/ExperienceContent"

const Index = () => {
  const margin = {
    top: 10, left: 10, right: 10, bottom: 0
  };
  return (
    <div>
      <Head>
        <title>jere.pro - Experience</title>
        <meta property="og:title" content="jere.pro - Experience"/>
        <meta property="og:description" content="Yo, my name is Jere, and I design stuff. Read about the stuff I have done on this page." />
        <meta name="description" content="Yo, my name is Jere, and I design stuff. Read about the stuff I have done on this page." />
      </Head>
      <NavBar url={"/"}/>
      <div className={"timeLineContainer animated"}>
        <h1>Experience</h1>
          <ParentSize>
            {parent => (
              <ExperienceGraph
                data={ExperienceContent}
                width={parent.width}
                height={parent.width > 576 ? 1080: 2060}
                parentTop={parent.top}
                parentLeft={parent.left}
                parentRef={parent.ref}
                resizeParent={parent.resize}
                margin={margin}
              />
            )}
          </ParentSize>
      </div>
      <Footer url={"/"}/>
    </div>
  )
}

export default Index
