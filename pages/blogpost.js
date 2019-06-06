import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Footer from "../components/Footer";
import Head from "next/head";
import NavBar from "../components/NavBar";
export default class extends React.Component {
  static async getInitialProps({ query }) {
    const post = await import(`../content/blog/${query.id}.md`);
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
          <title>jere.pro - Blog</title>
          <meta property="og:title" content="jere.pro - Blog" />
        </Head>
        <NavBar url={"/blog"}/>
        <div className={"blogPost"}>
          <div className={"container animated"}>
            <img className={"hero"} src={require("../static/img/blog/" + this.props.data.thumbnail + ".jpg")} height="100%"/>
            <h1>{this.props.data.title}</h1>
            <p className={"publishDate"}>Published on {new Date(this.props.data.date).toDateString()}, {this.props.readingTime} min read</p>
            <ReactMarkdown source={this.props.content} />
          </div>
        </div>
        <Footer url={"/blog"}/>
      </div>
    )
  }
}
