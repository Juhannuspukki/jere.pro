const fs = require('fs')
const Mode = require('frontmatter-markdown-loader/mode');
const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');
const blogPostsFolder = './content/blog'
const withOffline = require('next-offline')

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

module.exports = withOffline(withOptimizedImages(withSass({
    target: 'serverless',
    transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
    // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
    // turn on the SW in dev mode so that we can actually test it
    generateInDevMode: true,
    workboxOpts: {
      swDest: 'static/service-worker.js',
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'https-calls',
            networkTimeoutSeconds: 15,
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    optimizeImagesInDev: true,
    inlineImageLimit: 10000000,
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
})));
