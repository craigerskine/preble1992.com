module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/_redirects');
  eleventyConfig.addPassthroughCopy('src/_assets');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addShortcode('version', function() {
    return String(Date.now())
  });
  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};