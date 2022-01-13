import Head from "next/head";
import React from "react";
import fs from "fs";
import path from "path";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Project = (props) => {
  const { name, external, github, link, description, techStack, url } = props;

  return (
    <div>
      <Head>
        <title>jere.pro - Projects - {name}</title>
        <meta property="og:title" content={"jere.pro - Projects - " + name} />
        <meta
          property="description"
          content={description.replace(/^(.{100}[^\s]*).*/s, "$1") + "..."}
        />
        <meta
          property="og:description"
          content={description.replace(/^(.{100}[^\s]*).*/s, "$1") + "..."}
        />
        <meta
          property="og:image"
          content={`/img/projects/${link}/desktop.jpg`}
        />
        <meta name="robots" content="noindex" />
      </Head>
      <NavBar url={`/skills/${url}`} />
      <div className={"post"}>
        <div className={"container animated"}>
          <video
            loop={true}
            autoPlay={true}
            muted={true}
            playsInline={true}
            controls={false}
            className={"hero-desktop"}
            aria-hidden={"true"}
            poster={`/img/projects/${link}/desktop.jpg`}
          >
            <source
              src={`/img/projects/${link}/desktop.mp4`}
              type="video/mp4"
            />
          </video>
          <h1>{name}</h1>
          <div className="techStack container">
            <div className="row">
              {techStack.map((tech) => {
                const Icon = (require(`../../svg/graphsymbols/${tech.toLowerCase().replace(/\./g, "")}.svg`)).default
                return (
                  <div key={tech + "-icon"} className="col">
                    <Icon
                        className={"chameleon"}
                    />
                    <span>{tech}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <p className="techStackDescription">{description}</p>
          <div className={"row"}>
            {external && (
              <div className={"col-6"}>
                <a
                  className={"postExternalLink"}
                  href={external}
                  target="_blank"
                >
                  See in action →
                </a>
              </div>
            )}
            {github && (
              <div className={"col-6"}>
                <a className={"postExternalLink"} href={github} target="_blank">
                  View on GitHub →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer url={`/skills/${url}`} />
    </div>
  );
};

export async function getStaticPaths() {
  // Store paths here
  const paths = [];

  // Read all files in directory
  const postDirectory = path.join(process.cwd(), "content/skills");
  const filenames = fs.readdirSync(postDirectory);

  // Find links to projects
  filenames.map((filename) => {
    const filePath = path.join(postDirectory, filename);
    const fileContents = JSON.parse(fs.readFileSync(filePath, "utf8"));

    fileContents.projectList.map((project) => {
      paths.push({
        params: { project: project.link },
      });
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // Store paths here
  const paths = [];

  console.log(context);

  // Read all files in directory
  const postDirectory = path.join(process.cwd(), "content/skills");
  const filenames = fs.readdirSync(postDirectory);

  let data = {};

  // Find links to projects
  filenames.map((filename) => {
    const filePath = path.join(postDirectory, filename);
    const fileContents = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const theDroid = fileContents.projectList.find(
      (project) => project.link === context.params.project
    );

    if (typeof theDroid !== "undefined") {
      data = theDroid;
      data.url = fileContents.link;
    }
  });

  return {
    props: data,
  };
}

export default Project;
