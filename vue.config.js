var webpack = require('webpack');

module.exports = {
  lintOnSave: false,
  // pluginOptions: {
  //   i18n: {
  //     locale: "ko",
  //     fallbackLocale: "ko",
  //     localeDir: "locales",
  //     enableInSFC: false
  //   }
  // },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
      }),
    ]
  }
};
