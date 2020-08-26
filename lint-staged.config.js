module.exports = {
  'src/**/*.{js}': [
    'npm run pretty',
    'eslint --fix --max-warnings 0',
  ],
  '*.{css,scss}': [
    'npm run pretty',
    'stylelint --fix'
  ],
};
