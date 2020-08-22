const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
      './src/**/*.js',
      './public/index.html',
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  })
  
  module.exports = {
    plugins: [
      require('tailwindcss')("./src/tailwind.config.js"),
      require('autoprefixer'),
      ...process.env.NODE_ENV === 'production'
        ? [purgecss]
        : []
    ]
  }