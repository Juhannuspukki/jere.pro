const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages(withSass({
    target: 'serverless',
    optimizeImagesInDev: true,
    inlineImageLimit: 1000000,
    mozjpeg: {
      quality: 80,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config
  }
}));
