module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        'last 2 version',
        'Explorer >= 10',
        'Android >= 4'
      ],
      remove: false
    })
  ]
};
