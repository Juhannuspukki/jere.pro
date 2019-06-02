import {withRouter} from 'next/router'
import Head from 'next/head'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProjectObject from '../data/ProjectObject'
import Graph from "../components/SkillGraph";
import {ParentSize} from "@vx/responsive";
import Link from "next/link";


class Post extends React.Component {
  constructor(props) {
    super(props);
    const {router} = this.props;
    this.state = ProjectObject.projects.find(stackLevel => stackLevel.link === router.query.link);
  }

  render() {
    const {title, skills, description, projectList} = this.state;
    return (
      <div>
        <Head>
          <title>jere.pro - Projects - {title}</title>
          <meta property="og:title" content={"jere.pro - Skills - " + title}/>
        </Head>
        <NavBar url={"/projects"}/>
        <div className={"skills animated"}>
          <div className={"container"}>
            <h1>{title}</h1>
            <p>
              {description}
            </p>
            <div className="row">
              <div className="col-md-7 graphContainer">
                <h2>Skills</h2>
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
              <div className="col-md-5">
                <h2>Projects</h2>
                <div className="projectList">
                  <div>
                {projectList.map((project) => (
                  <Link prefetch as={`/projects/${project.link}`} href={`/project?link=${project.link}`} key={project.link}>
                    <a>{project.name}</a>
                  </Link>
                ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer url={"/projects"}/>
      </div>
    )
  }
}

export default withRouter(Post)

