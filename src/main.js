//vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

//default Layout
import DefaultLayout from '~/layouts/Default.vue';

//custom scss
import '~/assets/sass/styles.scss';

export default function(Vue, { appOptions, head }) {
    head.link.push({
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css'
    });

    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
    });

    head.link.push({
        rel: 'stylesheet',
        href:
            'https://fonts.googleapis.com/css2?Space+Mono:wght@700&family=Bungee+Shade&family=Tomorrow:wght@800&family=DotGothic16&display=swap'
    });

    head.link.push({
        rel: 'stylesheet',
        href: 'https://unpkg.com/aos@next/dist/aos.css'
    });

    head.script.push({
        src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
        async: true,
        defer: true
    });
    

    const opts = {
        theme: {
            themes: {
                dark: {
                    primary: '#458588',
                    secondary: '#7c6f64',
                    accent: '#b16286',
                    error: '#cc241d',
                    info: '#689d6a',
                    success: '#98971a',
                    warning: '#d79921',
                    background: '#3c3836'
                },
                light: {
                    primary: '#458588',
                    secondary: '#a89984',
                    accent: '#b16286',
                    error: '#cc241d',
                    info: '#689d6a',
                    success: '#98971a',
                    warning: '#d79921',
                    background: '#ebdbb2'
                }
            }
        }
    };

    // locals hot reload
    appOptions.i18n.setLocaleMessage('es', require('@/locales/es.json'));
    appOptions.i18n.setLocaleMessage('fr', require('@/locales/fr.json'));
    appOptions.i18n.setLocaleMessage('en', require('@/locales/en.json'));

    //opts includes, vuetify themes, icons, etc.
    Vue.use(Vuetify);
    appOptions.vuetify = new Vuetify(opts);

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
}
