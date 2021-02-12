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

        const _allDocuments = actions.addCollection({
            typeName: '_allDocuments'
        })

        _allDocuments.addNode(English)
        _allDocuments.addNode(French)
        _allDocuments.addNode(Spanish)
    })
}
