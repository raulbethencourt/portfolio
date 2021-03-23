//vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

//default Layout
import DefaultLayout from '~/layouts/Default.vue';

//custom scss
import '~/assets/sass/styles.scss';

const darkBg = require(`@/assets/images/dark-bg.webp`);

export default function (Vue, { appOptions, head }) {
    head.meta.push({
        name: 'title',
        content: 'Raul Bethencourt(G) - Portfolio'
    });

    head.meta.push({
        name: 'author',
        content: 'Raul Bethencourt Gonzalez'
    });

    head.meta.push({
        name: 'description',
        content:
            'This is my personal portfolio built with framework Gridsome based in the technologies Vue.Js and GraphQL.'
    });

    head.meta.push({
        name: 'keywords',
        content: 'Raul Bethencourt, Gridsome, Vuejs, Portfolio, GraphQL'
    });

    head.meta.push({
        name: 'robots',
        content: 'index, follow'
    });

    head.link.push({
        rel: 'canonical',
        href: 'https://raulbethencourt.com'
    });

    head.link.push({
        rel: 'preload',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
        as: 'style',
        crossorigin: true
    });

    head.link.push({
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700,900',
        as: 'style',
        crossorigin: true
    });

    head.link.push({
        rel: 'preload',
        href:
            'https://fonts.googleapis.com/css2?Space+Mono:wght@700&family=Bungee+Shade&family=Tomorrow:wght@800&family=DotGothic16&display=swap',
        as: 'style',
        crossorigin: true
    });

    head.link.push({
        rel: 'preload',
        href: 'https://unpkg.com/aos@next/dist/aos.css',
        as: 'style',
        crossorigin: true
    });

    head.link.push({
        rel: 'preload',
        href: darkBg,
        as: 'image'
    });

    head.script.push({
        src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
        async: true,
        defer: true
    });

    const opts = {
        theme: {
            dark: true,
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

    //opts includes, vuetify themes, icons, etc.
    Vue.use(Vuetify);
    appOptions.vuetify = new Vuetify(opts);

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
}
