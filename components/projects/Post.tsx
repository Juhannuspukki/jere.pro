import React from "react";

import slugify from "../../lib/slugify";
import ReactMarkdown from "react-markdown";

import MacbookFrame from "../../svg/macbookframe.svg";
import PhoneFrame from "../../svg/iphoneframe.svg";

interface PostProps {
  project: {
    name: string;
    id: string;
    frame?: string;
    content: string;
    techStack?: string[];
    external?: string;
    github?: string;
  };
}

const Post: React.FC<PostProps> = (props) => {
  const {
    project: { name, id, frame, techStack, content, external, github },
  } = props;

  const heroClass = () => {
    switch (frame) {
      case "Macbook":
        return "macbookHeroImage";
      case "iPhone":
        return "iPhoneHeroImage";
      default:
        return "heroImage";
    }
  };

  return (
    <main>
      <div className={"container"}>
        <div className={"hero"}>
          {frame === "Macbook" && <MacbookFrame className={"macbookFrame"} />}
          {frame === "iPhone" && <PhoneFrame className={"iPhoneFrame"} />}
          <video
            loop
            muted
            autoPlay
            playsInline
            src={`/img/projects/${id}/desktop.mp4`}
            poster={`/img/projects/${id}/desktop.jpg`}
            className={heroClass()}
          />
        </div>
        <h1>{name}</h1>
        <div className="techStack container">
          <div className="row">
            {techStack &&
              techStack.map((tech) => {
                const Icon = require(`../../svg/graphsymbols/${slugify(
                  tech
                )}.svg`).default;
                return (
                  <div key={tech + "-icon"} className="col">
                    <Icon className={"chameleon"} />
                    <span>{tech}</span>
                  </div>
                );
              })}
          </div>
        </div>
        <ReactMarkdown className="content" linkTarget="_blank">
          {content}
        </ReactMarkdown>
        <div className={"row"}>
          {external && (
            <div className={"col-6"}>
              <a
                className={"postExternalLink highLightOnHover"}
                href={external}
                target="_blank"
                rel="noreferrer"
              >
                Go to project →
              </a>
            </div>
          )}
          {github && (
            <div className={"col-6"}>
              <a
                className={"postExternalLink highLightOnHover"}
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Post;
