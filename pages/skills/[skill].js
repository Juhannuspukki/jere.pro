import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import { ParentSize } from "@visx/responsive";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Graph from "../../components/SkillGraph";
import ProjectCard from "../../components/ProjectCard";

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
      <main className={`${link} skills animated`}>
        <div className={"container"}>
          {/* START OF GRAPH*/}
          <h1>{title}</h1>
          <div className="graphContainer">
            <ParentSize>
              {(parent) => (
                <Graph
                  skills={skills}
                  link={link}
                  activeTechs={activeTechs}
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
          {/* START OF PROJECT SECTION*/}
          <div className={"projectList"}>
            <h2>Projects</h2>
            <div className={"row projectPreviewContainer"}>
              {sortedProjectList.map((project) => (
                <ProjectCard
                  key={project.link}
                  link={project.link}
                  activeTechs={activeTechs}
                  techStack={project.techStack}
                  name={project.name}
                  shortDescription={project.shortDescription}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer url={"/projects"} />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { skill: "web" } },
      { params: { skill: "native" } },
      { params: { skill: "backend" } },
      { params: { skill: "ci-cd" } },
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
