import {withRouter} from 'next/router'
import Head from 'next/head'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProjectObject from '../data/ProjectObject'


class Project extends React.Component {
  constructor(props) {
    super(props);
    const {router} = this.props;
    const findProject = projectList => projectList.find(project => project.link === router.query.link);
    const stack = ProjectObject.projects.find(stackLevel => findProject(stackLevel.projectList));
    this.state = findProject(stack.projectList);
  }

  render () {
    const {name, link, external, github, description} = this.state;
    return (
      <div>
        <Head>
          <title>jere.pro - Projects - {name}</title>
          <meta property="og:title" content={"jere.pro - Projects - " + name} />
        </Head>
        <NavBar url={"/projects"}/>
        <div className={"post"}>
          <div className={"container animated"}>
            <img className={"hero"} src={require("../static/img/" + link + ".jpeg")}/>
            <h1>{name}</h1>
            <p>
              {description}
            </p>
            <div className={"row"}>
              <div className={"col-sm-6"}>
                {(external === "unavailable") ? <div /> :
                  <a className={"postExternalLink"} href={external} target="_blank">See in action →</a>
                }
              </div>
              <div className={"col-sm-6"}>
                {(github === "unavailable") ? <div /> :
                  <a className={"postExternalLink"} href={github} target="_blank">View on GitHub →</a>
                }
              </div>
            </div>
          </div>
        </div>
        <Footer url={"/projects"}/>
      </div>
    )
  }
}

export default withRouter(Project)

