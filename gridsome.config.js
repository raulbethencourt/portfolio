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
                defaultLocale: 'en', // default language
                enablePathGeneration: false,
                routes: require('./routes.js'), // load path translation declaration from external file
                messages: {}
            }
        }
    ],
    chainWebpack(config) {
        // Load variables for all vue-files
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

        types.forEach((type) => {
            addStyleResource(config.module.rule('scss').oneOf(type))
        })
    }
}
