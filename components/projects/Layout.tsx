import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ProjectData } from "../../pages/projects";
import { Skill } from "../../pages/skills/[skill]";
import Post from "./Post";
import CategorySegment from "./CategorySegment";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { array } from "prop-types";

interface ProjectProps {
  allProjects: ProjectData[];
  skills: { name: string; skills: Skill[] }[];
}

export interface ProjectCategory {
  name: string;
  projects: ProjectData[];
  skills: Skill[];
}

interface InitialProject {
  name: string;
  id: string;
  techStack: string[];
  content: string;
}

const initialProject: InitialProject = {
  name: "Projects",
  id: "Index",
  techStack: [],
  content:
    "On this page you can find a (non-comprehensive) list of some of my projects. Feel free to look around! You can filter\n" +
    "projects by technology using the sidebar. If you want a more technology-related overview, try the skill pages.",
};

const PostPreview: React.FC<ProjectProps> = ({ allProjects, skills }) => {
  const router = useRouter();

  const projectsByCategory: ProjectCategory[] = [
    {
      name: "UI/UX Design",
      projects: [],
      skills: skills.find((e) => e.name === "UI/UX Design")!.skills,
    },
    {
      name: "Web",
      projects: [],
      skills: skills.find((e) => e.name === "Web")!.skills,
    },
    {
      name: "Backend",
      projects: [],
      skills: skills.find((e) => e.name === "Backend")!.skills,
    },
    {
      name: "Native Apps",
      projects: [],
      skills: skills.find((e) => e.name === "Native")!.skills,
    },
    {
      name: "CI/CD",
      projects: [],
      skills: skills.find((e) => e.name === "CI/CD")!.skills,
    },
    {
      name: "Embedded",
      projects: [],
      skills: skills.find((e) => e.name === "Embedded")!.skills,
    },
  ];

  allProjects.forEach((project) => {
    projectsByCategory.forEach((category) => {
      if (
        project.categories.includes(category.name) &&
        !category.projects.includes(project)
      ) {
        category.projects.push(project);
      }
    });
  });

  const [activeProject, setActiveProject] = useState<
    ProjectData | InitialProject
  >(initialProject);

  useEffect(() => {
    const newActiveProject = allProjects.find(
      (p) => p.id === router.query.project
    );

    if (typeof newActiveProject !== "undefined") {
      setActiveProject(newActiveProject);
    }
  }, [allProjects, router.query.project]);

  // ensure that the query param is not an array of params
  const referrer: string | undefined = Array.isArray(router.query.referrer)
    ? undefined
    : router.query.referrer;

  const footerLink = () => {
    if (referrer) {
      return referrer;
    } else {
      return typeof router.query.project === "undefined" ? "/" : `/projects`;
    }
  };

  return (
    <div className={"animated"}>
      <aside
        className={
          router.query.project
            ? "sidebar chameleon"
            : "sidebar chameleon entryPage"
        }
      >
        <nav>
          {projectsByCategory.map((category) => (
            <CategorySegment
              key={category.name}
              name={category.name}
              projects={category.projects}
              skills={category.skills}
              referrer={referrer}
            />
          ))}
        </nav>
      </aside>
      <div className={"post"}>
        <NavBar url={referrer ? referrer : "/"} />
        <Post project={activeProject} />
        <Footer url={footerLink()} />
      </div>
    </div>
  );
};

export default PostPreview;
