const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = function (api) {
    api.chainWebpack((config, { isServer }) => {
        // vuetify
        if (isServer) {
            config.plugin('vuetify-loader').use(VuetifyLoaderPlugin);
        }
    });

    api.loadSource(async (actions) => {
        const English = require('./src/locales/en.json');
        const French = require('./src/locales/fr.json');
        const Spanish = require('./src/locales/es.json');

        const documents = actions.addCollection({
            typeName: 'documents'
        });

        documents.addNode(English);
        documents.addNode(Spanish);
        documents.addNode(French);
    });
};
