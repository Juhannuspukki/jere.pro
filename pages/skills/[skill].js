import Head from "next/head";
import React, { useState } from "react";
import { Svg } from "react-optimized-image";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ParentSize } from "@vx/responsive";
import Graph from "../../components/SkillGraph";

const Skills = ({ content }) => {
  const { title, description, skills, projectList } = content;

  const [activeTech, setActiveTech] = useState(null);

  return (
    <div>
      <Head>
        <title>jere.pro - Skills - {title}</title>
        <meta property="og:title" content={"jere.pro - Skills - " + title} />
        <meta
          property="og:description"
          content={`Yo, my name is Jere, and I design stuff. Read about my ${title} skills on this page.`}
        />
        <meta
          name="description"
          content={`Yo, my name is Jere, and I design stuff. Read about my ${title} skills on this page.`}
        />
      </Head>
      <NavBar url={"/projects"} />
      <div className={"skills animated"}>
        <div className={"container"}>
          <h1>{title}</h1>
          <div className="graphContainer">
            <ParentSize>
              {(parent) => (
                <Graph
                  skills={skills}
                  setActiveTech={setActiveTech}
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
          <div className={"row"}>
            <div className={"col-md-6"}>
              <h2>Selected technology</h2>
              <div className={"techSymbolContainer"}>
                {activeTech !== null && (
                  <div>
                    <Svg
                      src={require(`../../svg/graphsymbols/${activeTech
                        .toLowerCase()
                        .replace(/\./g, "")}.svg`)}
                      className={"chameleon"}
                    />
                    <h3>{activeTech}</h3>
                  </div>
                )}
              </div>
            </div>
            <div className={"col-md-6"}>
              <h2>Projects</h2>
              <div className={"techProjectContainer"}>
                <div className={"techProjectLinks"}>
                  {projectList.map((project) => (
                    <Link
                      as={`/projects/${project.link}`}
                      href={`/projects/${project.link}`}
                      key={project.link}
                    >
                      <a
                        className={
                          activeTech === null ||
                          project.techStack.includes(activeTech)
                            ? "highLightOnHover"
                            : "passive highLightOnHover"
                        }
                      >
                        {project.name} →
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer url={"/projects"} />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { skill: "design" } },
      { params: { skill: "web" } },
      { params: { skill: "native" } },
      { params: { skill: "backend" } },
      { params: { skill: "devops" } },
      { params: { skill: "embedded" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const content = await import(
    `../../content/skills/${context.params.skill}.json`
  );

  return {
    props: { content: content.default },
  };
}

export default Skills;
