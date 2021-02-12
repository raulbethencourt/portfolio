<template>
    <v-app>
        <v-navigation-drawer width="240px" class="nav-bar" dark permanent fixed>
            <v-list-item>
                <v-list-item-content class="nav-bar__title">
                    <v-list-item-title class="text-h6">{{
                        $static.texts.edges[0].node.sidebar.title
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="subtitle-1"
                        >{{ $static.texts.edges[0].node.sidebar.subtitle }}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item
                    v-for="item in $static.texts.edges[0].node.sidebar.items"
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
            right: null
        }
    },
    components: {
        LocaleSwitcher
    }
}
</script>

<static-query>
query($locale: String) {
    texts: allDocuments(lang: $locale) {
        edges {
            node {
                sidebar {
                    title
                    subtitle
                    items {
                        title
                        icon
                    }
                }
            }
        }
    }
}
</static-query>
