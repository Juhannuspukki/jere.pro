import Head from 'next/head'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Graph from "../components/SkillGraph";
import ProjectContent from '../content/ProjectContent'
import {ParentSize} from "@vx/responsive";
import {withRouter} from 'next/router'


class Post extends React.Component {
  constructor(props) {
    super(props);
    const {router} = this.props;
    this.state = ProjectContent.projects.find(stackLevel => stackLevel.link === router.query.link);
  }

  render() {
    const {title, skills, description} = this.state;
    return (
      <div>
        <Head>
          <title>jere.pro - Projects - {title}</title>
          <meta property="og:title" content={"jere.pro - Skills - " + title}/>
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
}

export default withRouter(Post)

