import React from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PostPreview from "../../components/PostPreview";
import { getAllPosts } from "../../lib/api";

const CookBook = ({ allPosts }) => {
  return (
    <main className={"test"}>
      <Head>
        <title>jere.pro - CookBook</title>
        <meta property="og:title" content="jere.pro - CookBook" />
        <meta
          property="og:description"
          content="Yo, my name is Jere, and I design stuff. Here is my cookbook with a variety of recipes."
        />
        <meta
          name="description"
          content="Yo, my name is Jere, and I design stuff. Here is my cookbook with a variety of recipes."
        />
      </Head>
      <NavBar url={"/"} />
      <div className={"container animated blogContainer cookBookContainer"}>
        <h1>CookBook</h1>
        {allPosts.map((post) => (
          <PostPreview
            image={post.image}
            source={post.source}
            title={post.title}
            ingredients={post.ingredients}
            slug={post.slug}
            key={post.slug}
          />
        ))}
      </div>
      <Footer url={"/"} />
    </main>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "image",
    "source",
    "ingredients",
    "tools",
    "instructions",
    "slug",
  ]);

  return {
    props: { allPosts },
  };
}

export default CookBook;
