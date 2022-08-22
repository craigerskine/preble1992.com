const yml = require("js-yaml");

module.exports = function(eleventyConfig) {

  // .yml extension in _data
  eleventyConfig.addDataExtension("yml", (contents) => yml.load(contents));

  eleventyConfig.addPassthroughCopy('src/_redirects');
  eleventyConfig.addPassthroughCopy('src/_assets');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addShortcode('version', () => `${String(Date.now())}`);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
  // | randomLimit(6, page.url)
  eleventyConfig.addFilter('randomLimit', (arr, limit, currPage) => {
    const pageArr = arr.filter((page) => page.url !== currPage);
    pageArr.sort(() => {
      return 0.5 - Math.random();
    });
    return pageArr.slice(0, limit);
  });
  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: '_site',
      output: 'public',
    },
  };
};