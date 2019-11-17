import Head from 'next/head'
import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import BlogPreview from '../../components/BlogPreview'

const importBlogPosts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/blog', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2))
  
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../../content/blog/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Blog = ({ postList }) => {
  const readingTime = (text) => Math.round((text.trim().split(/\s+/).length)/220);

  const posts = postList.sort(
    (a, b) => new Date(a.attributes.date) - new Date(b.attributes.date)
  ).reverse();
  
  return (
    <div>
      <Head>
        <title>jere.pro - Blog</title>
        <meta property="og:title" content="jere.pro - Blog" />
        <meta property="og:description" content="Yo, my name is Jere, and I design stuff. Here is my blog. It's cool, check it out." />
        <meta name="description" content="Yo, my name is Jere, and I design stuff. Here is my blog. It's cool, check it out." />
      </Head>
      <NavBar url={"/"}/>
      <div className={"container animated blogContainer"}>
        <h1>Blog</h1>
        {posts.map((post) => (
          <BlogPreview
            content={post.body}
            data={post.attributes}
            slug={post.slug}
            key={post.slug}
            readingTime={readingTime(post.body)}
          />
        ))}
      </div>
      <Footer url={"/"}/>
    </div>
  )
}

Blog.getInitialProps = async () => {
  const postList = await importBlogPosts()
  return { postList }
}

export default Blog
