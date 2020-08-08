module.exports = {
  'src/**/*.{ts,tsx,js,jsx}': [
    'prettier --write',
    'eslint --fix --max-warnings 0',
  ],
  '*.{css,scss}': [
    'prettier --write',
    'stylelint --fix'
  ],
};
