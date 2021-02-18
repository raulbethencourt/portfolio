<template>
    <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
        <v-navigation-drawer
            width="200px"
            class="nav-bar"
            v-model="drawer"
            :mini-variant.sync="mini"
            permanent
            fixed
        >
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img
                        src="https://randomuser.me/api/portraits/men/85.jpg"
                    ></v-img>
                </v-list-item-avatar>

                <v-list-item-content class="nav-bar__title">
                    <v-list-item-title class="text-h6">{{
                        $page.texts.edges[0].node.sidebar.title
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="subtitle-1"
                        >{{ $page.texts.edges[0].node.sidebar.subtitle }}
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-btn icon @click.stop="mini = !mini">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item
                    v-for="item in $page.texts.edges[0].node.sidebar.items"
                    :key="item.title"
                    link
                    :to="`#${item.title.toLowerCase()}`"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <template v-slot:append>
                <a :href="pdfLink" download="download">CV PDF</a>

                <div class="pa-5">
                    <LocaleSwitcher />
                </div>
                
                <v-switch
                    v-model="$vuetify.theme.dark"
                    inset
                    persistent-hint
                ></v-switch>
            </template>
        </v-navigation-drawer>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script>
import LocaleSwitcher from '~/components/LocaleSwitcher.vue'

export default {
    data() {
        return {
            right: null,
            pdfLink: require('@/assets/CV_Raul_Bethencourt.pdf'),
            drawer: true,
            mini: true
        }
    },
    components: {
        LocaleSwitcher
    },
    props: {
        attrs: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        theme() {
            return this.$vuetify.theme.dark ? 'dark' : 'light'
        }
    }
}
</script>
