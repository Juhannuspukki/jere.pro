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
  const [filtersAreVisible, setFiltersAreVisible] = useState<boolean>(false);

  const setActiveTech = (tech: string) => {
    activeTechs.includes(tech)
      ? setActiveTechs(activeTechs.filter((e) => e !== tech))
      : setActiveTechs([...activeTechs, tech]);
  };

  if (typeof skills === "undefined") {
    return null;
  }

  return (
    <div className={"category"} key={name}>
      <div className={"skillSidebar"}>
        <div className={"stickyTitleContainer"}>
          <h2 className={"rotatedTitle"}>{name}</h2>
        </div>
        {name !== "UI/UX Design" && (
          <button
            onClick={() => setFiltersAreVisible(!filtersAreVisible)}
            className={"filterToggle chameleon highLightOnHover"}
          >
            {filtersAreVisible ? (
              <strong>Hide filters</strong>
            ) : (
              <strong>Show filters</strong>
            )}
          </button>
        )}
        {name !== "UI/UX Design" &&
          filtersAreVisible &&
          skills.map((skill) => {
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
      </div>
      <div className={"projectSidebar"}>
        {projects.map((project) => (
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
