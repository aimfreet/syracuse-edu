module.exports = {
  publicPath: '/syracuse-edu',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/main.scss";',
      },
    },
  },
};
