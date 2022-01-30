import React from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PostPreview from "../../components/PostPreview";
import { getAllPosts } from "../../lib/api";

interface CookBookIndexProps {
  allRecipes: Recipe[];
}

export interface Recipe {
  title: string;
  image: string;
  source: string;
  ingredients: string[];
  tools: string[];
  instructions: string[];
  slug: string;
}

const CookBookIndex: React.FC<CookBookIndexProps> = ({ allRecipes }) => {
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
        {allRecipes.map((recipe) => (
          <PostPreview
            image={recipe.image}
            source={recipe.source}
            title={recipe.title}
            ingredients={recipe.ingredients}
            slug={recipe.slug}
            key={recipe.slug}
          />
        ))}
      </div>
      <Footer url={"/"} />
    </main>
  );
};

export async function getStaticProps() {
  const fields: string[] = [
    "title",
    "image",
    "source",
    "ingredients",
    "tools",
    "instructions",
    "slug",
  ];

  const allRecipes = getAllPosts(fields, "cookbook");

  return {
    props: { allRecipes },
  };
}

export default CookBookIndex;
