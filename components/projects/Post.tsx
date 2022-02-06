import React from "react";

import slugify from "../../lib/slugify";
import ReactMarkdown from "react-markdown";

interface PostProps {
  project: {
    name: string;
    id: string;
    content: string;
    techStack?: string[];
    external?: string;
    github?: string;
  };
}

const Post: React.FC<PostProps> = (props) => {
  const {
    project: { name, id, techStack, content, external, github },
  } = props;

  return (
    <main>
      <div className={"container"}>
        <video
          loop={true}
          autoPlay={true}
          muted={true}
          playsInline={true}
          controls={false}
          className={"hero-desktop"}
          aria-hidden={"true"}
          poster={`/img/projects/${id}/desktop.jpg`}
        >
          <source src={`/img/projects/${id}/desktop.mp4`} type="video/mp4" />
        </video>
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
                See in action →
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
