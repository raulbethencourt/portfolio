// vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

// custom scss
import '~/assets/sass/styles.scss'

export default function(Vue, { appOptions, head }) {
    head.link.push({
        rel: 'stylesheet',
        href:
            'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css'
    })

    head.link.push({
        rel: 'stylesheet',
        href:
            'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
    })

    head.script.push({
        src:
            'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
        async: true,
        defer: true
    })

    const opts = {} //opts includes, vuetify themes, icons, etc.
    Vue.use(Vuetify)

    appOptions.vuetify = new Vuetify(opts)

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}
