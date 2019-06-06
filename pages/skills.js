import Head from 'next/head'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Graph from "../components/SkillGraph";
import {ParentSize} from "@vx/responsive";


class Post extends React.Component {
  static async getInitialProps({ query }) {
    console.log(query);
    const post = await import(`../content/ProjectContent`);
    const document = post.default.projects.find(stackLevel => stackLevel.link === query.link);
    return {
      ...document
    };
  }

  render() {
    const {title, skills, description} = this.props;
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

export default Post

