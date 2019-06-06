import {withRouter} from 'next/router'
import Head from 'next/head'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


class Project extends React.Component {
  static async getInitialProps({ query }) {
    const findProject = projectList => projectList.find(project => project.link === query.link);

    const post = await import(`../content/ProjectContent`);

    const document = post.default.projects.find(stackLevel => findProject(stackLevel.projectList));
    const data = findProject(document.projectList);
    return {
      ...data,
    };
  }

  render () {
    const {name, link, external, github, description} = this.props;
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

