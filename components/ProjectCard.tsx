import React from "react";
import Link from "next/link";

import slugify from "../lib/slugify";

interface ProjectCardProps {
  link: string;
  activeTechs: string[];
  techStack?: string[];
  name: string;
  shortDescription: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { link, activeTechs, techStack, name, shortDescription } = props;

  return (
    <div className={"col-md-6 projectPreviewCard"}>
      <Link as={`/projects/${link}`} href={`/projects/${link}`}>
        <a
          className={
            activeTechs.length === 0 ||
            (techStack && techStack.some((r) => activeTechs.includes(r)))
              ? "highLightOnHover projectPreviewCardInner chameleon"
              : "passive highLightOnHover projectPreviewCardInner chameleon"
          }
        >
          <h3>{name} →</h3>
          <p>{shortDescription}</p>
          {techStack && (
            <div className="techStack container">
              <div className="row no-gutters">
                {techStack.map((tech) => {
                  const Icon = require(`../svg/graphsymbols/${slugify(
                    tech
                  )}.svg`).default;
                  return (
                    <div key={tech + "-icon"} className="col">
                      <Icon
                        className={
                          activeTechs.length === 0 || activeTechs.includes(tech)
                            ? "chameleon"
                            : "passive chameleon"
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
