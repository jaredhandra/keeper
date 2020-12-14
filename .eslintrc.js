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
    'plugin:vue/essential',
    'standard',
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
      singleline: 'never',
      multiline: 'never'
    }],
    // turn off certain rules and warnings
    'no-undef': 'off',
    'no-new': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    'vue/require-default-prop': 'off'
  }
}
