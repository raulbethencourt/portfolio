<template>
    <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
        <v-navigation-drawer
            width="180px"
            class="nav-bar"
            v-model="drawer"
            :mini-variant.sync="mini"
            permanent
            fixed
        >
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img
                        :src="
                            $vuetify.theme.dark
                                ? require(`@/assets/images/profile-light.png`)
                                : require(`@/assets/images/profile-dark.png`)
                        "
                        :class="
                            $vuetify.theme.dark
                                ? 'dark-profile'
                                : 'light-profile'
                        "
                    ></v-img>
                </v-list-item-avatar>

                <v-list-item-content class="nav-bar__title">
                    <v-list-item-title class="text-h6">{{
                        $page.texts.edges[0].node.sidebar.title.toUpperCase()
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
                <v-list dense>
                    <v-list-item class="list-link">
                        <v-list-item-icon>
                            <v-icon>{{
                                $page.texts.edges[0].node.sidebar.append[0].icon
                            }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <a
                                :href="pdfLink"
                                download="download"
                                :class="$vuetify.theme.dark ? 'light' : 'dark'"
                            >
                                <v-list-item-title>{{
                                    $page.texts.edges[0].node.sidebar.append[0]
                                        .title
                                }}</v-list-item-title>
                            </a>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item class="list-link">
                        <v-list-item-icon>
                            <v-icon>{{
                                $page.texts.edges[0].node.sidebar.append[3].icon
                            }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <a
                                href="https://github.com/raulbethencourt/portfolio"
                                target="_blank"
                                download="download"
                                rel="noreferrer noopener"
                                :class="$vuetify.theme.dark ? 'light' : 'dark'"
                            >
                                <v-list-item-title>{{
                                    $page.texts.edges[0].node.sidebar.append[3]
                                        .title
                                }}</v-list-item-title>
                            </a>
                        </v-list-item-content>
                    </v-list-item>
                    
                    <v-list-item class="list-locale">
                        <v-list-item-icon>
                            <v-icon>{{
                                $page.texts.edges[0].node.sidebar.append[1].icon
                            }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <LocaleSwitcher />
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item class="list-color">
                        <v-list-item-icon>
                            <v-icon>{{
                                $page.texts.edges[0].node.sidebar.append[2].icon
                            }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-switch
                                v-model="$vuetify.theme.dark"
                                inset
                                persistent-hint
                            ></v-switch>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </template>
        </v-navigation-drawer>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script>
import LocaleSwitcher from '~/components/LocaleSwitcher.vue';

export default {
    data() {
        return {
            right: null,
            pdfLink: require('@/assets/CV_Raul_Bethencourt.pdf'),
            drawer: true,
            mini: true
        };
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
            return this.$vuetify.theme.dark ? 'dark' : 'light';
        }
    }
};
</script>
