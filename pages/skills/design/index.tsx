import React from "react";
import Head from "next/head";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import ProjectCard from "../../../components/ProjectCard";

import slugify from "../../../lib/slugify";
import { SkillsProps } from "../[skill]";

const Skills: React.FC<SkillsProps> = ({ content }) => {
  const { title, skills, projectList, link } = content;

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
          {/* START OF UX*/}
          <h1>{title}</h1>
          <div className="uxSkills">
            <h2>Things I Know a Thing or Two About:</h2>
            <div className="row uxSkillContainer">
              {skills.map((skill) => {
                const Icon = require(`../../../svg/graphsymbols/${slugify(
                  skill.icon
                )}.svg`).default;
                return (
                  <div
                    key={slugify(skill.icon) + "-icon"}
                    className="col-md-3 col-sm-4 col-6"
                  >
                    <div className={"centering"}>
                      <Icon className={"chameleon"} />
                    </div>
                    <p>{skill.icon}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* START OF PROJECT SECTION*/}
          <div className={"projectList"}>
            <h2>Projects</h2>
            <div className={"row projectPreviewContainer"}>
              {projectList.map((project) => (
                <ProjectCard
                  key={project.link}
                  link={project.link}
                  activeTechs={[]}
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

export async function getStaticProps() {
  const content = await import(`../../../content/skills/design.json`);

  return {
    props: { content: content.default },
  };
}

export default Skills;
