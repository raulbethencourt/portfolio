const path = require('path')

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [path.resolve(__dirname, './src/assets/sass/*.scss')]
        })
}

module.exports = {
    plugins: [
        {
            use: 'gridsome-plugin-i18n',
            options: {
                locales: [
                    // locales list
                    'en',
                    'es',
                    'fr'
                ],
                enablePathGeneration: false,
                routes: require('./routes.js'), // load path translation declaration from external file
                messages: {
                    fr: require('./src/locales/fr.json'),
                    es: require('./src/locales/es.json'),
                    en: require('./src/locales/en.json')
                }
            }
        }
    ],
    chainWebpack(config) {
        // Load variables for all vue-files
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

        types.forEach((type) => {
            addStyleResource(config.module.rule('scss').oneOf(type))
        })

        config.module
            .rule('pdf')
            .test(/\.pdf$/)
            .use('file-loader')
            .loader('file-loader')
    }
}
