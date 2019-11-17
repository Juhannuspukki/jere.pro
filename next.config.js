const fs = require('fs')
const Mode = require('frontmatter-markdown-loader/mode');
const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');
const blogPostsFolder = './content/blog'

const getPathsForPosts = () =>
  fs.readdirSync(blogPostsFolder).reduce((acc, blogName) => {
    const trimmedName = blogName.substring(0, blogName.length - 3)
    return Object.assign(acc, {
      [`/blog/post/${trimmedName}`]: {
        page: '/blog/post/[slug]',
        query: {
          slug: trimmedName
        }
      }
    })
  }, {})

module.exports = withOptimizedImages(withSass({
    target: 'serverless',
    optimizeImagesInDev: true,
    inlineImageLimit: 1000000,
    mozjpeg: {
      quality: 80,
  },
  webpack: configuration => {
    configuration.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: {
        mode: [Mode.BODY, Mode.HTML],
        markdownIt: {
          linkify: true,
          html: true,
          breaks: false
        }
      }
    })
    return configuration
  },
  async exportPathMap (defaultPathMap) {
    return {
      ...defaultPathMap,
      ...getPathsForPosts()
    }
  }
}));
