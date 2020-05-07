import React from 'react'
import Footer from "../../components/Footer";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "../../components/MailChimpSubscribe";


const Post = ({ blogpost }) => {
  if (!blogpost) return <div>404</div>
  
  const readingTime = (text) => Math.round((text.trim().split(/\s+/).length)/220);
  
  return (
    <div>
      <Head>
        <title>jere.pro - {blogpost.attributes.title}</title>
        <meta name="description" content={`jere.pro - Blog - ${blogpost.attributes.title}`}/>
        <meta property="og:title" content={`jere.pro - Blog - ${blogpost.attributes.title}`}/>
        <meta property="og:description" content={`Read my blog post "${blogpost.attributes.title}" on jere.pro`}/>
        <meta property="og:image" content={`/img/blog/${blogpost.attributes.image}.jpg?resize&size=100`}/>
      </Head>
      <NavBar url={"/blog"}/>
      <div className={"blogPost"}>
        <div className={"container animated"}>
          <img className={"hero"}
               src={require(`../../public/img/blog/${blogpost.attributes.image}.jpg?resize&size=738`)}
               alt={blogpost.attributes.image}
               height="100%"
          />
          <h1>{blogpost.attributes.title}</h1>
          <p className={"publishDate"}>Published
            on {new Date(blogpost.attributes.date).toDateString()}, {readingTime(blogpost.body)} min read</p>
          <div dangerouslySetInnerHTML={{ __html: blogpost.html }} />
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

Post.getInitialProps = async ({ query }) => {
  const { slug } = query
  const blogpost = await import(`../../content/blog/${slug}.md`).catch(
    () => null
  )
  return { blogpost }
}

export default Post
