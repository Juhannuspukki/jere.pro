import React, { useState } from "react";

import slugify from "../../lib/slugify";
import { ProjectCategory } from "./Layout";
import ProjectCard from "./ProjectCard";

interface CategorySegmentProps extends ProjectCategory {
  referrer?: string;
}

const CategorySegment: React.FC<CategorySegmentProps> = (props) => {
  const { name, projects, skills, referrer } = props;

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

  if (typeof skills === "undefined") {
    return null;
  }

  // only show skills that are actually used in projects
  const usedSkills =
    name === "UI/UX Design"
      ? []
      : skills.filter((skill) =>
          projects.some((project) => project.techStack.includes(skill.icon))
        );

  return (
    <div className={"category"} key={name}>
      <div className={"skillSidebar"}>
        <div className={"stickyTitleContainer"}>
          <h2 className={"rotatedTitle"}>{name}</h2>
        </div>
        {name !== "UI/UX Design" && (
          <>
            <p>
              <strong>Filters</strong>
            </p>
            {usedSkills.map((skill) => {
              const Icon = require(`../../svg/graphsymbols/${slugify(
                skill.icon
              )}.svg`).default;
              return (
                <button
                  key={skill.icon}
                  className={
                    activeTechs.length === 0 || activeTechs.includes(skill.icon)
                      ? "skillIconContainer highLightOnHover"
                      : "passive skillIconContainer highLightOnHover"
                  }
                  onClick={() => setActiveTech(skill.icon)}
                >
                  <Icon />
                  <p className={"skillTitle chameleon"}>{skill.icon}</p>
                </button>
              );
            })}
          </>
        )}
      </div>
      <div className={"projectSidebar"}>
        {sortedProjectList.map((project) => (
          <div className={"projectPreviewCardContainer"} key={project.id}>
            <ProjectCard
              project={project}
              referrer={referrer}
              activeTechs={activeTechs}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySegment;
