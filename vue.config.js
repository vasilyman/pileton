// const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  assetsDir: 'vue',
  css: {
    loaderOptions: {
      sass: {
        prependData: '',
      },
    },
  },
  configureWebpack: {
    plugins: [
      // (“en” is built into Moment and can’t be removed)
      // new MomentLocalesPlugin({
      //   localesToKeep: ['de'],
      // }),
    ],
  },
};
