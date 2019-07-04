import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import StackLevel from '../components/StackLevel'
import ProjectObject from '../content/ProjectContent'
import Head from 'next/head'
import React from 'react'

const Index = (props) => (
  <div>
    <Head>
      <title>jere.pro - Projects</title>
      <meta property="og:title" content="jere.pro - Projects" />
    </Head>
    <NavBar url={"/"}/>
    <div className={"container projectContainer animated"}>
      <h1>Projects</h1>
      {ProjectObject.projects.map((project) => (
        <StackLevel key={project.title} title={project.title} link={project.link} projectList={project.projectList}>
          {project.image}
        </StackLevel>
      ))}
    </div>
    <Footer url={"/"}/>
  </div>
)

export default Index
