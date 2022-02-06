import React from "react";
import { useRouter } from "next/router";

import slugify from "../../lib/slugify";
import { ProjectData } from "../../pages/projects";

interface ProjectCardProps {
  activeTechs: string[];
  referrer?: string;
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const router = useRouter();
  const { activeTechs, project, referrer } = props;

  const href = `/projects/?project=${project.id}${
    referrer ? "&referrer=" + referrer : ""
  }`;

  return (
    <div className={"projectPreviewCard"}>
      <button
        onClick={() => router.push(href, undefined, { shallow: true })}
        className={
          activeTechs.length === 0 ||
          (project.techStack &&
            project.techStack.some((r) => activeTechs.includes(r)))
            ? "highLightOnHover projectPreviewCardInner chameleon"
            : "passive highLightOnHover projectPreviewCardInner chameleon"
        }
      >
        <h3>{project.name} →</h3>
        <p>{project.shortDescription}</p>
        {project.techStack && (
          <div className="techStack container">
            <div className="row no-gutters">
              {project.techStack.map((tech) => {
                const Icon = require(`../../svg/graphsymbols/${slugify(
                  tech
                )}.svg`).default;
                return (
                  <div key={tech + "-icon"} className="col">
                    <Icon
                      className={
                        activeTechs.length === 0 || activeTechs.includes(tech)
                          ? undefined
                          : "passive"
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default ProjectCard;
