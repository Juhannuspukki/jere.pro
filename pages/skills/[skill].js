import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import { ParentSize } from "@visx/responsive";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Graph from "../../components/SkillGraph";

const Skills = ({ content }) => {
  const { title, skills, projectList, link } = content;

  const [activeTechs, setActiveTechs] = useState([]);

  const setActiveTech = (tech) => {
    activeTechs.includes(tech)
      ? setActiveTechs(activeTechs.filter((e) => e !== tech))
      : setActiveTechs([...activeTechs, tech]);
  };

  const sortedProjectList = projectList.sort((a, b) => {
    let occurencesInA = 0;
    let occurencesInB = 0;
    activeTechs.forEach((element) =>
      a.techStack.includes(element) ? occurencesInA++ : {}
    );
    activeTechs.forEach((element) =>
      b.techStack.includes(element) ? occurencesInB++ : {}
    );
    return occurencesInB - occurencesInA;
  });

  return (
    <>
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
      <div className={`${link} skills animated`}>
        <div className={"container"}>
          {/* START OF GRAPH*/}
          <h1>{title}</h1>
          <div className="graphContainer">
            <ParentSize>
              {(parent) => (
                <Graph
                  skills={skills}
                  link={link}
                  setActiveTech={setActiveTech}
                  parentWidth={
                    parent.width +
                    20 /* Compensate for axis name on the other side*/
                  }
                  parentHeight={parent.height}
                  parentTop={parent.top}
                  parentLeft={parent.left}
                  parentRef={parent.ref}
                  resizeParent={parent.resize}
                />
              )}
            </ParentSize>
          </div>
          {/* START OF TECH FILTER LIST*/}
          {activeTechs.length !== 0 && (
            <div className={"techFilterList"}>
              <h2>Selected Filters</h2>
              <div className={"selectedTechnologies"}>
                <div className="selectedTechnologyContainer">
                  {activeTechs.map((tech) => {
                    const Icon = require(`../../svg/graphsymbols/${tech
                      .toLowerCase()
                      .replace(/\./g, "")}.svg`).default;
                    return (
                      <button
                        onClick={() => setActiveTech(tech)}
                        key={tech + "-icon"}
                        className="techButton highLightOnHover"
                      >
                        <Icon className={"chameleon"} />
                        <span className={"chameleon"}>{tech}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {/* START OF PROJECT SECTION*/}
          <div className={"projectList"}>
            <h2>Projects</h2>
            <div className={"row projectPreviewContainer"}>
              {sortedProjectList.map((project) => (
                <div
                  className={"col-md-6 projectPreviewCard"}
                  key={project.link}
                >
                  <Link
                    as={`/projects/${project.link}`}
                    href={`/projects/${project.link}`}
                  >
                    <a
                      className={
                        activeTechs.length === 0 ||
                        project.techStack.some((r) => activeTechs.includes(r))
                          ? "highLightOnHover projectPreviewCardInner chameleon"
                          : "passive highLightOnHover projectPreviewCardInner chameleon"
                      }
                    >
                      <h3>{project.name} →</h3>
                      <p>{project.shortDescription}</p>
                      <div className="techStack container">
                        <div className="row no-gutters">
                          {project.techStack.map((tech) => {
                            const Icon = require(`../../svg/graphsymbols/${tech
                              .toLowerCase()
                              .replace(/\./g, "")}.svg`).default;
                            return (
                              <div key={tech + "-icon"} className="col">
                                <Icon
                                  className={
                                    activeTechs.length === 0 ||
                                    activeTechs.includes(tech)
                                      ? "chameleon"
                                      : "passive chameleon"
                                  }
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer url={"/projects"} />
    </>
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
