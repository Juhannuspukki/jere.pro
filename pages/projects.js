import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import StackLevel from '../components/StackLevel'
import ProjectObject from '../content/ProjectContent'
import Head from 'next/head'
import React from 'react'

const Index = (props) => (
  <div className={"test"}>
    <Head>
      <title>jere.pro - Projects</title>
      <meta property="og:title" content="jere.pro - Projects" />
    </Head>
    <NavBar url={"/main-menu"}/>
    <div className={"container projectContainer animated"}>
      {ProjectObject.projects.map((project) => (
        <StackLevel key={project.title} title={project.title} link={project.link} projectList={project.projectList}>
          {project.image}
        </StackLevel>
      ))}
    </div>
    <Footer url={"/main-menu"}/>
  </div>
)

export default Index
