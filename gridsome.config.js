const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}

module.exports = {
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'es-es',
          'fr-fr',
          'en-gb'
        ],
        pathAliases: { // path segment alias for each locales
          'es-es': 'es',
          'fr-fr': 'fr',
          'en-gb': 'en'
        },
        fallbackLocale: 'fr-fr', // fallback language
        defaultLocale: 'fr-fr', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'es-es': require('./src/locales/es-es.json'), // Messages files
          'fr-fr': require('./src/locales/fr-fr.json'),
          'en-gb': require('./src/locales/en-gb.json'),
        }
      }
    }
  ]
}
