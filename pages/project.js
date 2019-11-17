import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProjectContent from "../content/ProjectContent";
import Skills from './skills'

const Project = () => {
  const router = useRouter()
  
  const findProject = projectList => projectList.find(project => project.link === router.query.link);
  const document = ProjectContent.projects.find(stackLevel => findProject(stackLevel.projectList));
  
  const {name, external, github, link, description, techStack} = findProject(document.projectList);
  
  return (
    <div>
      <Head>
        <title>jere.pro - Projects - {name}</title>
        <meta property="og:title" content={"jere.pro - Projects - " + name} />
        <meta property="description" content={ description.replace(/^(.{100}[^\s]*).*/s, "$1") + "..."} />
        <meta property="og:description" content={ description.replace(/^(.{100}[^\s]*).*/s, "$1") + "..."} />
        <meta property="og:image" content={ require(`../public/img/projects/${link}/desktop.jpg`) } />
        <meta name="robots" content="noindex" />
      </Head>
      <NavBar url={"/projects"}/>
      <div className={"post"}>
        <div className={"container animated"}>
          <video loop={true}
                 autoPlay={true}
                 muted={true}
                 playsInline={true}
                 controls={false}
                 className={"hero-desktop"}
                 aria-hidden={"true"}
                 poster={require(`../public/img/projects/${link}/desktop.jpg`)}
          >
            <source src={`/img/projects/${link}/desktop.mp4`} type="video/mp4"/>
          </video>
          <h1>{name}</h1>
          <div className="techStack container">
            <div className="row">
              {techStack.map(tech => (
                <div key={tech.text + "-icon"} className="col">
                  {tech.icon}
                </div>
              ))}
            </div>
            <div className="row">
              {techStack.map(tech => (
                <div key={tech.text + "-text"} className="col">
                  <span>
                    {tech.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="techStackDescription">
            {description}
          </p>
          <div className={"row"}>
            {external !== "unavailable" &&
              <div className={"col-6"}>
                <a className={"postExternalLink"} href={external} target="_blank">See in action →</a>
              </div>
            }
            {github !== "unavailable" &&
              <div className={"col-6"}>
                <a className={"postExternalLink"} href={github} target="_blank">View on GitHub →</a>
              </div>
            }
          </div>
        </div>
      </div>
      <Footer url={"/projects"}/>
    </div>
  )
}


Skills.getInitialProps = (ctx) => {
  const findProject = projectList => projectList.find(project => project.link === ctx.query.link);
  const document = ProjectContent.projects.find(stackLevel => findProject(stackLevel.projectList));
  return findProject(document.projectList);
}

export default Project
