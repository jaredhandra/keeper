module.exports = {
  root: true,
  // autoFixOnSave: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    'prettier/standard',
    'plugin:jest/recommended'
  ],
  // vue required to lint *.vue files
  plugins: ['vue', 'prettier', 'jest'],
  // add your custom rules here
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    // turn off certain rules and warnings
    'no-undef': 'off',
    'no-new': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    'vue/require-default-prop': 'off'
  }
}