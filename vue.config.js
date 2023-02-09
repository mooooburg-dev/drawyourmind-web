const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [{ from: 'src/posts', to: 'static/posts' }],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.md$/i,
          loader: 'raw-loader',
        },
      ],
    },
  },
}
