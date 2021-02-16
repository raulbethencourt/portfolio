const nodeExternals = require('webpack-node-externals')

module.exports = function (api) {
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

    api.loadSource(async (actions) => {
        const English = require('./src/locales/en.json')
        const French = require('./src/locales/fr.json')
        const Spanish = require('./src/locales/es.json')

        const documents = actions.addCollection({
            typeName: 'documents'
        })

        documents.addNode(English)
        documents.addNode(French)
        documents.addNode(Spanish)
    })
}
