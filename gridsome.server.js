const nodeExternals = require('webpack-node-externals')

module.exports = function(api) {
    api.chainWebpack((config, { isServer }) => {
        // vuetify
        if (isServer) {
            config.externals([
                nodeExternals({
                    allowlist: [/^vuetify/]
                })
            ])
        }
    })

    api.loadSource(async actions => {
        const English = require('./src/data/en.json')
        const French = require('./src/data/fr.json')
        const Spanish = require('./src/data/sp.json')

        const EnglishTexts = actions.addCollection({
            typeName: 'EnglishTexts'
        })

        const FrenchTexts = actions.addCollection({
            typeName: 'FrenchTexts'
        })

        const SpanishTexts = actions.addCollection({
            typeName: 'SpanishTexts'
        })
        
        EnglishTexts.addNode(English)
        FrenchTexts.addNode(French)
        SpanishTexts.addNode(Spanish)
    })
}
