module.exports = {
  lintOnSave: true,
  configureWebpack: {
    plugins: [],
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ],
    },
  },
}
