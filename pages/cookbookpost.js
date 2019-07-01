import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Footer from "../components/Footer";
import Head from "next/head";
import NavBar from "../components/NavBar";

class BlogPost extends React.Component {
  static async getInitialProps({ query }) {
    const post = require(`../content/cookbook/${query.link}.md`);
    const document = matter(post.default);
    const readingTime = Math.round((document.content.trim().split(/\s+/).length)/220);
    return {
      ...document,
      readingTime,
    };
  }

  render() {
    return (
      <div className={"test"}>
        <Head>
          <title>jere.pro - {this.props.data.title}</title>
          <meta property="og:title" content={"jere.pro - CookBook - " + this.props.data.title} />
          <meta property="og:description" content={`Read my cooking tips about "${this.props.data.title}" on jere.pro`} />
        </Head>
        <NavBar url={"/cookbook"}/>
        <div className={"blogPost"}>
          <div className={"container animated"}>
            <img className={"hero"} src={require("../static/img/cookbook/" + this.props.data.image + ".jpg?inline?resize&size=100")} height="100%"/>
            <h1>{this.props.data.title}</h1>
            <p className={"publishDate"}>Published on {new Date(this.props.data.date).toDateString()}, {this.props.readingTime} min read</p>
            <ReactMarkdown source={this.props.content} />
          </div>
        </div>
        <Footer url={"/cookbook"}/>
      </div>
    )
  }
}

export default BlogPost
