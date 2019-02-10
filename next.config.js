const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages(withSass({
    optimizeImagesInDev: true,
    inlineImageLimit: 1000000,
    mozjpeg: {
      quality: 80,
  }
}));
