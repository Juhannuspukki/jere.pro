import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Footer from "../components/Footer";
import Head from "next/head";
import NavBar from "../components/NavBar";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "../components/MailChimpSubscribe";


class BlogPost extends React.Component {
  static async getInitialProps({query}) {
    // note to future self: if you try to import instead of require, this breaks in production
    const post = require(`../content/blog/${query.link}.md`);
    const document = matter(post.default);
    const readingTime = Math.round((document.content.trim().split(/\s+/).length) / 220);
    return {
      ...document,
      readingTime,
    };
  }
  
  render() {
    return (
      <div>
        <Head>
          <title>jere.pro - {this.props.data.title}</title>
          <meta name="description" content={`jere.pro - Blog - ${this.props.data.title}`}/>
          <meta property="og:title" content={`jere.pro - Blog - ${this.props.data.title}`}/>
          <meta property="og:description" content={`Read my blog post "${this.props.data.title}" on jere.pro`}/>
          <meta property="og:image" content={`../static/img/blog/${this.props.data.image}.jpg?resize&size=100`}/>
        </Head>
        <NavBar url={"/blog"}/>
        <div className={"blogPost"}>
          <div className={"container animated"}>
            <img className={"hero"}
                 src={require(`../static/img/blog/${this.props.data.image}.jpg?inline?resize&size=100`)}
                 alt={this.props.data.image}
                 height="100%"
            />
            <h1>{this.props.data.title}</h1>
            <p className={"publishDate"}>Published
              on {new Date(this.props.data.date).toDateString()}, {this.props.readingTime} min read</p>
            <ReactMarkdown source={this.props.content}/>
            <p className={"subscriptionHeadline"}>Did you enjoy reading?</p>
            <p className={"subscriptionSubHeadline"}>Subscribe to receive a notification every time a new post is published. Cancel anytime.</p>
            <p className={"subscriptionSubHeadline"}>I publish new content ~10 times a year.</p>
            <MailchimpSubscribe
              url={"https://jere.us4.list-manage.com/subscribe/post?u=996f6dc600464969b0d58fde8&amp;id=7c0fc9b8fd"}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
        <Footer url={"/blog"}/>
      </div>
  )
  }
  }
  
  export default BlogPost
