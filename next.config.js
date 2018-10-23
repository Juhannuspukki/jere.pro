const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages(withSass({
    optimizeImagesInDev: true,
    mozjpeg: {
      quality: 80,
  },
}));
