module.exports = {
  plugins: [
    require('autoprefixer')({
      remove: false
    }),
    require('postcss-modules-resolve-from-alias')({
      styles: 'src/assets/styles'
    })
  ]
};
