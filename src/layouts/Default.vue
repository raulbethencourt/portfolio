<template>
    <v-app>
        <v-navigation-drawer width="240px" class="nav-bar" dark permanent fixed>
            <v-list-item>
                <v-list-item-content class="nav-bar__title">
                    <v-list-item-title class="text-h6">{{
                        $page.texts.edges[0].node.sidebar.title
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="subtitle-1"
                        >{{ $page.texts.edges[0].node.sidebar.subtitle }}
                    </v-list-item-subtitle>
                </v-list-item-content>
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
            pdfLink: require('@/assets/CV_Raul_Bethencourt.pdf')
        }
    },
    components: {
        LocaleSwitcher
    }
}
</script>
