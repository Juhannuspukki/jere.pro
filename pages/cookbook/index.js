import Head from 'next/head'
import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import BlogPreview from '../../components/BlogPreview'

const importBlogPosts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/cookbook', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2))
  
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../../content/cookbook/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const CookBook = ({ postList }) => {
  return (
    <div className={"test"}>
      <Head>
        <title>jere.pro - CookBook</title>
        <meta property="og:title" content="jere.pro - CookBook" />
        <meta property="og:description" content="Yo, my name is Jere, and I design stuff. Here is my cookbook with a variety of recipes." />
        <meta name="description" content="Yo, my name is Jere, and I design stuff. Here is my cookbook with a variety of recipes." />
      </Head>
      <NavBar url={"/"}/>
      <div className={"container animated blogContainer cookBookContainer"}>
        <h1>CookBook</h1>
        {postList.map((post) => (
          <BlogPreview
            content={post.body}
            data={post.attributes}
            slug={post.slug}
            key={post.slug}
          />
        ))}
      </div>
      <Footer url={"/"}/>
    </div>
  )
}

CookBook.getInitialProps = async () => {
  const postList = await importBlogPosts()
  return { postList }
}

export default CookBook
