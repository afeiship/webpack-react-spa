module.exports = {
  'src/**/*.{ts,tsx,js,jsx}': [
    'eslint --fix --max-warnings 0',
    'prettier --write',
  ],
  '*.css': ['stylelint --fix'],
};
