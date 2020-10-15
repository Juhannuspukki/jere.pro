const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      images: {
        // for example
        handleImages: ["jpeg", "png", "svg", "webp", "gif", "ico"],
      },
    },
  ],

  // your other plugins here
]);
