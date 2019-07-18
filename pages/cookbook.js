import Head from 'next/head'
import React from 'react'
import matter from 'gray-matter';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BlogPreview from "../components/BlogPreview";

export default class extends React.Component {
  static async getInitialProps() {
    // Get posts from folder
    let posts = (ctx => {
      const keys = ctx.keys();
      const values = keys.map(ctx);
      const data = keys.map((key, index) => {
        // Create slug from filename
        const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
        const value = values[index];

        // Parse document
        const document = matter(value.default);

        return {
          document,
          slug
        };
      });
      return data;
    })(require.context('../content/cookbook', true, /\.md$/));

    return {
      posts
    };
  }
  render() {
    return (
      <div className={"test"}>
        <Head>
          <title>jere.pro - CookBook</title>
          <meta property="og:title" content="jere.pro - CookBook" />
          <meta property="og:description" content="Yo, my name is Jere, and I design stuff. Here is my cookbook with a variety of recipes." />
          <meta name="description" content="Yo, my name is Jere, and I design stuff. Here is my cookbook with a variety of recipes." />
        </Head>
        <NavBar url={"/"}/>
        <div className={"container animated blogContainer"}>
          {this.props.posts.map(({ document: { data, content }, slug, readingTime }) => (
            <BlogPreview
              content={content}
              data={data}
              slug={slug}
              key={slug}
              readingTime={readingTime}
            />
          ))}
        </div>
        <Footer url={"/"}/>
      </div>
    )
  }
}
