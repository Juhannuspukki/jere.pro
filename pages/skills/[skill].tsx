import React, { useState } from "react";
import Head from "next/head";
import { ParentSize } from "@visx/responsive";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Graph from "../../components/SkillGraph";
import ProjectCard from "../../components/projects/ProjectCard";

import { ProjectData } from "../projects";
import { getAllPosts } from "../../lib/api";

export interface SkillsProps {
  content: {
    title: string;
    link: string;
    skills: Skill[];
  };
  projects: ProjectData[];
}

export interface Skill {
  interest: number;
  confidence: number;
  icon: string;
}

const Skills: React.FC<SkillsProps> = (props) => {
  const {
    content: { title, skills, link },
    projects,
  } = props;

  const [activeTechs, setActiveTechs] = useState<string[]>([]);

  const setActiveTech = (tech: string) => {
    activeTechs.includes(tech)
      ? setActiveTechs(activeTechs.filter((e) => e !== tech))
      : setActiveTechs([...activeTechs, tech]);
  };

  const sortedProjectList = projects.sort((a, b) => {
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
          content={`My name is Jere, and I design stuff. Read about my ${title} skills on this page.`}
        />
        <meta
          name="description"
          content={`My name is Jere, and I design stuff. Read about my ${title} skills on this page.`}
        />
      </Head>
      <NavBar url={"/skills"} />
      <main className={`${link} skill animated`}>
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
                />
              )}
            </ParentSize>
          </div>
          {/* START OF PROJECT SECTION*/}
          <div className={"projectList"}>
            <h2>Projects</h2>
            <div className={"row projectPreviewContainer"}>
              {sortedProjectList.map((project) => (
                <div key={project.id} className={"col-md-6"}>
                  <ProjectCard
                    project={project}
                    activeTechs={activeTechs}
                    referrer={`/skills/${link}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer url={"/skills"} />
    </>
  );
};

const categories = [
  { id: "web", name: "Web" },
  { id: "native", name: "Native Apps" },
  { id: "backend", name: "Backend" },
  { id: "ci-cd", name: "CI/CD" },
  { id: "embedded", name: "Embedded" },
];

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

export async function getStaticProps(context: { params: { skill: string } }) {
  const fields: string[] = [
    "name",
    "id",
    "categories",
    "techStack",
    "shortDescription",
    "external",
    "github",
    "content",
  ];

  const allProjects = getAllPosts(
    fields,
    "projects",
    categories.find((c) => c.id === context.params.skill)!.name
  );

  const content = await import(
    `../../content/skills/${context.params.skill}.json`
  );

  return {
    props: { content: content.default, projects: allProjects },
  };
}

export default Skills;
