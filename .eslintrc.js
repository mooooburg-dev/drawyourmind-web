module.exports = {
  globals: {
    $: true,
    jQuery: true,
  },
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {},
}
