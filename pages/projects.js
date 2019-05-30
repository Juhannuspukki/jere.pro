import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Project from '../components/Project'
import ProjectObject from '../components/ProjectObject'
import Head from 'next/head'
import React from 'react'

const Index = (props) => (
  <div className={"test"}>
    <Head>
      <title>jere.pro - Projects</title>
      <meta property="og:title" content="jere.pro - Projects" />
    </Head>
    <NavBar/>
    <div className={"container projectContainer animated"}>
      {ProjectObject.projects.map((project) => (
        <Project key={project.title} title={project.title} projectList={project.projectList}>
          {project.image}
        </Project>
      ))}
    </div>
    <Footer/>
  </div>
)

export default Index
