module.exports = {
  'src/**/*.{ts,tsx,js,jsx}': [
    'npm run pretty',
    'eslint --fix --max-warnings 0',
  ],
  '*.{css,scss}': [
    'npm run pretty',
    'stylelint --fix'
  ],
};
