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
          <meta property="description" content={ description.replace(/^(.{100}[^\s]*).*/s, "$1") + "..."} />
          <meta property="og:description" content={ description.replace(/^(.{100}[^\s]*).*/s, "$1") + "..."} />
        </Head>
        <NavBar url={"/projects"}/>
        <div className={"post"}>
          <div className={"container animated"}>
            <video loop={true}
                   autoPlay={true}
                   muted={true}
                   playsInline={true}
                   controls={false}
                   className={"hero"}
                   aria-hidden={"true"}
                   poster={require("../static/img/projects/" + link + ".jpg")}
            >
              <source src={"../static/img/projects/" + link + ".mp4"} type="video/mp4"/>
            </video>
            <h1>{name}</h1>
            <p>
              {description}
            </p>
            <div className={"row"}>
              {external !== "unavailable" &&
                <div className={"col-sm-6"}>
                  <a className={"postExternalLink"} href={external} target="_blank">See in action →</a>
                </div>
              }
              {github !== "unavailable" &&
                <div className={"col-sm-6"}>
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
}

export default Project

