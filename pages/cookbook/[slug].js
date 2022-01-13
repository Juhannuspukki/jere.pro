import React from "react";
import Image from "next/image";
import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import StepList from "../../components/StepList";

const Post = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { slug, title, image, source, ingredients, tools, instructions } = post;

  return (
    <div className={"test"}>
      <Head>
        <title>jere.pro - {title}</title>
        <meta property="og:title" content={"jere.pro - CookBook - " + title} />
        <meta
          name="description"
          content={`Read how to cook "${title}" on jere.pro`}
        />
        <meta
          property="og:description"
          content={`Read how to cook "${title}" on jere.pro`}
        />
      </Head>
      <NavBar url={"/cookbook"} />
      <div className={"blogPost"}>
        <article className={"container animated"}>
          {
            <Image
                className={"hero cookBookHero"}
                src={require(`../../public/img/cookbook/${image}.jpg`)}
                priority
            />
          }
          <h1>{title}</h1>
          <p className={"publishDate"}>{source}</p>
          <div className={"row"}>
            <div className={"col-md-6"}>
              <h2 className={"cookBookTitle"}>Ingredients</h2>
              <ul className={"cookBookList"}>
                <StepList slug={slug} steps={ingredients} />
              </ul>
            </div>
            <div className={"col-md-6"}>
              <h2 className={"cookBookTitle"}>Tools</h2>
              <ul className={"cookBookList"}>
                <StepList slug={slug} steps={tools} />
              </ul>
            </div>
          </div>
          <h2 className={"cookBookTitle"}>Instructions</h2>
          <ol className={"cookBookList"}>
            <StepList slug={slug} steps={instructions} />
          </ol>
        </article>
      </div>
      <Footer url={"/cookbook"} />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "image",
    "source",
    "ingredients",
    "tools",
    "instructions",
    "slug",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
