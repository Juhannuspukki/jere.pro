import Head from "next/head";
import React from "react";
import ReactMarkdown from "react-markdown";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import slugify from "../../lib/slugify";

import { ProjectData } from "./index";
import { getAllPosts, getPostBySlug } from "../../lib/api";

interface ProjectProps extends ProjectData {
  url: string;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { name, link, techStack, external, github, content } = props;

  return (
    <>
      <Head>
        <title>jere.pro - Projects - {name}</title>
        <meta property="og:title" content={"jere.pro - Projects - " + name} />
        <meta
          property="description"
          content={content.replace(/^(.{100}[^\s]*).*/s, "$1") + "..."}
        />
        <meta
          property="og:description"
          content={content.replace(/^(.{100}[^\s]*).*/s, "$1") + "..."}
        />
        <meta
          property="og:image"
          content={`/img/projects/${link}/desktop.jpg`}
        />
        <meta name="robots" content="noindex" />
      </Head>
      <NavBar url={`/projects`} />
      <main className={"post"}>
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
      <Footer url={`/projects`} />
    </>
  );
};

export async function getStaticProps({
  params: { project },
}: {
  params: {
    project: string;
  };
}) {
  const post = getPostBySlug(
    project,
    [
      "name",
      "link",
      "categories",
      "techStack",
      "shortDescription",
      "external",
      "github",
      "content",
    ],
    "projects"
  );
  return {
    props: {
      ...post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"], "projects");

  return {
    paths: posts.map((post) => {
      return {
        params: {
          project: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Project;
