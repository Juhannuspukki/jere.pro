import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Graph from "../components/SkillGraph";
import ProjectContent from '../content/ProjectContent'
import {ParentSize} from "@vx/responsive";

const Skills = () => {
  const router = useRouter()
  
  const {title, skills, description} = ProjectContent.projects.find(stackLevel => stackLevel.link === router.query.link);
  
  return (
    <div>
      <Head>
        <title>jere.pro - Skills - {title}</title>
        <meta property="og:title" content={"jere.pro - Skills - " + title}/>
        <meta property="og:description" content={`Yo, my name is Jere, and I design stuff. Read about my ${title} skills on this page.`} />
        <meta name="description" content={`Yo, my name is Jere, and I design stuff. Read about my ${title} skills on this page.`} />
      </Head>
      <NavBar url={"/projects"}/>
      <div className={"skills animated"}>
        <div className={"container"}>
            <div className="graphContainer">
              <ParentSize>
                {parent => (
                  <Graph
                    skills={skills}
                    parentWidth={parent.width}
                    parentHeight={parent.height}
                    parentTop={parent.top}
                    parentLeft={parent.left}
                    parentRef={parent.ref}
                    resizeParent={parent.resize}
                  />
                )}
              </ParentSize>
            </div>
          <h1>{title}</h1>
          <p>
            {description}
          </p>
        </div>
      </div>
      <Footer url={"/projects"}/>
    </div>
  )
}

export default Skills

