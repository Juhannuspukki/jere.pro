import React from "react";
import Head from "next/head";
import Layout from "../../components/projects/Layout";

import { getAllPosts } from "../../lib/api";
import { Skill } from "../skills/[skill]";

interface ProjectIndexProps {
  allProjects: ProjectData[];
  skills: { name: string; skills: Skill[] }[];
}

export interface ProjectData {
  name: string;
  id: string;
  frame?: string;
  categories: string[];
  techStack: string[];
  shortDescription: string;
  external?: string;
  github?: string;
  content: string;
}

const ProjectIndex: React.FC<ProjectIndexProps> = ({ allProjects, skills }) => {
  return (
    <>
      <Head>
        <title>jere.pro - Projects</title>
        <meta property="og:title" content="jere.pro - Projects" />
        <meta
          property="og:description"
          content="Yo, my name is Jere, and I design stuff. This page contains a listing of some of my projects."
        />
        <meta
          name="description"
          content="Yo, my name is Jere, and I design stuff. This page contains a listing of some of my projects."
        />
      </Head>
      <Layout allProjects={allProjects} skills={skills} />
    </>
  );
};

export async function getStaticProps() {
  const fields: string[] = [
    "name",
    "id",
    "frame",
    "categories",
    "techStack",
    "shortDescription",
    "external",
    "github",
    "content",
  ];

  const allProjects = getAllPosts(fields, "projects");

  const designSkills = await import(`../../content/skills/design.json`);
  const webSkills = await import(`../../content/skills/web.json`);
  const backendSkills = await import(`../../content/skills/backend.json`);
  const nativeSkills = await import(`../../content/skills/native.json`);
  const cicdSkills = await import(`../../content/skills/ci-cd.json`);
  const embeddedSkills = await import(`../../content/skills/embedded.json`);

  const skills = [
    { name: "UI/UX Design", skills: designSkills.default.skills },
    { name: "Web", skills: webSkills.default.skills },
    { name: "Backend", skills: backendSkills.default.skills },
    { name: "Native", skills: nativeSkills.default.skills },
    { name: "CI/CD", skills: cicdSkills.default.skills },
    { name: "Embedded", skills: embeddedSkills.default.skills },
  ];

  return {
    props: { allProjects, skills },
  };
}

export default ProjectIndex;
