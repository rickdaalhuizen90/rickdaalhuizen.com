console.log('🔥 PostCSS config loaded at:', new Date().toISOString());
console.log('Working directory:', process.cwd());
console.log('Hugo environment:', process.env.HUGO_ENVIRONMENT);

module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['assets/css']
    }),
    require('postcss-nesting')(),
    require('postcss-custom-properties')({
      preserve: false,
    }),
    require('autoprefixer')(),
    ...(process.env.NODE_ENV === 'production' ? [require('cssnano')()] : [])
  ]
}

