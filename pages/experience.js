import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ExperienceGraph from '../components/ExperienceGraph'
import Head from 'next/head'
import React from 'react'
import {ParentSize} from "@vx/responsive";
import ExperienceContent from "../content/ExperienceContent"

const Index = () => {
  const margin = {
    top: 10, left: 80, right: 80, bottom: 50
  };
  return (
    <div>
      <Head>
        <title>jere.pro - Experience</title>
        <meta property="og:title" content="jere.pro - Experience"/>
      </Head>
      <NavBar url={"/main-menu"}/>
      <div className={"timeLineContainer animated"}>
        <div className={"container"}>
          <ParentSize>
            {parent => (
              <ExperienceGraph
                data={ExperienceContent}
                width={parent.width}
                height={1500}
                parentTop={parent.top}
                parentLeft={parent.left}
                parentRef={parent.ref}
                resizeParent={parent.resize}
                margin={margin}
              />
            )}
          </ParentSize>
        </div>
      </div>
      <Footer url={"/main-menu"}/>
    </div>
  )
}

export default Index
